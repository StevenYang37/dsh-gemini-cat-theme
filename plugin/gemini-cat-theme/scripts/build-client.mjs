import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { runInNewContext } from 'node:vm'
import assert from 'node:assert/strict'

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const original = await readFile(resolve(packageRoot, 'assets/gemini-zipzippipe-original.jpg'))
if (original[0] !== 0xff || original[1] !== 0xd8 || original.at(-2) !== 0xff || original.at(-1) !== 0xd9) {
  throw new Error('Gemini original art must be an intact JPEG file')
}
const assets = [
  ['__GEMINI_MASCOT_DATA_URL__', 'image/png', 'gemini-sidebar-seated-v1.png'],
  ['__GEMINI_CUTOUT_DATA_URL__', 'image/png', 'gemini-cutout-v1.png'],
  ['__GEMINI_CHIBI_DATA_URL__', 'image/png', 'gemini-chibi-v1.png'],
  ['__GEMINI_SCENE_DATA_URL__', 'image/png', 'gemini-observatory-v1.png'],
  ['__GEMINI_LIGHT_SCENE_DATA_URL__', 'image/png', 'gemini-observatory-light-v1.png'],
]
let source = await readFile(resolve(packageRoot, 'src/theme-client.js'), 'utf8')

// Check evaluated stylesheets too: later refinements must reach both builds.
const styleNames = [...source.matchAll(/const (CSS\w*) = /g)].map(match => match[1])
const styles = runInNewContext(
  source.slice(0, source.indexOf('function loadSettings()')) +
    `;({ css: [${styleNames.join(',')}].join('\\n'), pairs: BUILD_CLASS_GROUPS, expand: withBuildAliases })`,
  { exports: {} }, { timeout: 1000 },
)
const selectors = styles.css.replace(/\/\*[\s\S]*?\*\//g, '')
for (const [first, ...others] of styles.pairs) {
  const roles = prefix => {
    const counts = {}
    for (const match of selectors.matchAll(new RegExp(`\\.${prefix}_([\\w-]+)`, 'g'))) {
      counts[match[1]] = (counts[match[1]] || 0) + 1
    }
    return counts
  }
  assert.ok(Object.keys(roles(first)).length > 0, `Missing styles: ${first}`)
  for (const second of others) assert.deepEqual(roles(first), roles(second), `Unpaired styles: ${first}/${second}`)
  const sample = `.${first}_header`
  assert.equal(styles.expand(styles.expand(sample)), styles.expand(sample), 'Aliases must be idempotent')
}
// Independently recorded names from official published module exports. These
// fixtures catch omissions even when the alias table itself is incomplete.
const nativeFixtures = JSON.parse(await readFile(resolve(packageRoot, 'scripts/native-class-fixtures.json'), 'utf8'))
for (const item of nativeFixtures.fixtures) {
  assert.ok(selectors.includes(`.${item.local}`), `Missing native role: ${item.module}.${item.role}`)
  assert.ok(selectors.includes(`.${item.published}`), `Missing published component: ${item.published}`)
}
console.log(`Checked ${styles.pairs.length} alias families and ${nativeFixtures.fixtures.length} official native-role fixtures`)

for (const [placeholder, mime, filename, knownBytes] of assets) {
  const quoted = `'${placeholder}'`
  if (!source.includes(quoted)) throw new Error(`Client asset placeholder missing: ${placeholder}`)
  const bytes = knownBytes || await readFile(resolve(packageRoot, 'assets', filename))
  if (mime === 'image/png' && bytes.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${filename}`)
  source = source.replace(quoted, JSON.stringify(`data:${mime};base64,${bytes.toString('base64')}`))
}
const outputPath = resolve(packageRoot, 'lib/client.js')
const output = `window.__ModuleLoader__.load({
  id: 'dsh-gemini-cat-theme',
  factory: (require) => {
    const module = { exports: {} }
    const exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
${source.trimEnd().split('\n').map((line) => line ? `    ${line}` : '').join('\n')}
    return module.exports
  }
})
`

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, output, 'utf8')
console.log(`Built ${outputPath}`)
