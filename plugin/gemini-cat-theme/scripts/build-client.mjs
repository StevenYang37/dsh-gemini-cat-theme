import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

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
