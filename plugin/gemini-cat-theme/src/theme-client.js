exports.name = 'dsh-gemini-cat-theme'
// The panel's system appearance entry needs the host theme service.
exports.inject = ['theme']

// DSH Desktop 0.2.0-rc.2 selector aliases for Windows and macOS builds.
const BASE_SELECTORS = Object.freeze({
  frame: ':is(.BynINW_frame,._6Qf49G_frame)', sidebar: ':is(._2H3hWW_root,._3WPZCG_root)', footer: ':is(._2H3hWW_footArea,._3WPZCG_footArea)',
  main: ':is(.BynINW_centerCol,._6Qf49G_centerCol)', conversation: ':is(.Dc7zOa_root,.ST7X_W_root)', composer: ':is(.RlGAzG_card,.yhfFVG_card)',
  heroTitle: ':is(.Hqq-bq_root,.bocITq_root)', heroComposer: ':is(.Dc7zOa_composerHero,.ST7X_W_composerHero)', sidebarFade: ':is(._9lTDKa_fade,._7514NG_fade)',
})
const ID = Object.freeze({ style: 'dsh-gemini-theme-style', trigger: 'dsh-gemini-theme-trigger', panel: 'dsh-gemini-theme-panel', art: 'dsh-gemini-theme-art', companion: 'dsh-gemini-theme-companion', mascot: 'dsh-gemini-theme-mascot', frame: 'dsh-gemini-theme-frame' })
const KEY = 'dsh-gemini-cat-theme:v1'
const MAX_INTENSITY = 250
const DEFAULT = Object.freeze({ enabled: true, showArt: true, intensity: 82 })
const CUTOUT_DATA_URL = '__GEMINI_CUTOUT_DATA_URL__'
const CHIBI_DATA_URL = '__GEMINI_CHIBI_DATA_URL__'
const SCENE_DATA_URL = '__GEMINI_SCENE_DATA_URL__'
const LIGHT_SCENE_DATA_URL = '__GEMINI_LIGHT_SCENE_DATA_URL__'

// Component families verified against native CSS-module exports in the local
// DSH bundle and official published packages. Apply aliases to every stylesheet.
// Never infer arbitrary hashes or match generic author-content class suffixes.
const BUILD_CLASS_GROUPS = Object.freeze([
  [
    "BynINW",
    "_6Qf49G",
    "PIRFFq",
    "pI_x6G"
  ],
  [
    "ST7X_W",
    "Dc7zOa",
    "wSkVaW",
    "kiGsTW"
  ],
  [
    "_3WPZCG",
    "_2H3hWW",
    "hHd-Xa",
    "kB3qhq"
  ],
  [
    "yhfFVG",
    "RlGAzG",
    "uV2eYG",
    "JZLxKW"
  ],
  [
    "bocITq",
    "Hqq-bq",
    "pXSMma",
    "_8tPydW"
  ],
  [
    "_7514NG",
    "_9lTDKa",
    "qDHVXG",
    "Kjh-qa",
    "bhn1Oq"
  ],
  [
    "jJkEga",
    "hIlkoa",
    "YDXeBa",
    "JoiKIa"
  ],
  [
    "ZVcBiW",
    "fO69Vq",
    "X_2TxG",
    "w6M7KW"
  ],
  [
    "wCInkW",
    "Dws9Sa",
    "_77Pn0W",
    "VOzbGW"
  ],
  [
    "Z9Jnlq",
    "tki__G",
    "z8WDjq",
    "_3e4SsG"
  ],
  [
    "icaHSq",
    "EvIC1a",
    "tnXGgG"
  ],
  [
    "IzP3Va",
    "Sixlwa",
    "AkCqbG"
  ],
  [
    "HiSsxa",
    "lcKema",
    "ijfCxa"
  ],
  [
    "_PaunW",
    "l_V-RG",
    "gTO55a"
  ],
  [
    "sZXytW",
    "Q51KRG",
    "KkN8mG"
  ],
  [
    "ppByMG",
    "xzv4MW",
    "ZITbJG"
  ],
  [
    "YS3v9W",
    "_5OnbHa",
    "B9WI8q"
  ],
  [
    "gKv1-q",
    "hWmORq",
    "XNZzAa"
  ],
  [
    "OpZ85W",
    "bOPqQW",
    "TQ0rwa"
  ],
  [
    "JXrxFq",
    "eGxaPq",
    "_4if9eW"
  ],
  [
    "Bpi2Dq",
    "XrJvXW",
    "ft5itq"
  ],
  [
    "TXqvFW",
    "O_Ebla",
    "r52wTW"
  ],
  [
    "y0jqnG",
    "JObwrW",
    "X0HXfW"
  ],
  [
    "Q2dzhW",
    "o3BgMG",
    "UHhYua"
  ],
  [
    "-gRAhq",
    "CY-8Ka",
    "BFlR-G"
  ],
  [
    "yj_sLW",
    "xDAfVq",
    "_3mBzwG",
    "DXqwVW"
  ],
  [
    "_33HxeW",
    "_1p9O6q",
    "C0O0ea"
  ],
  [
    "rkta1W",
    "Y0dWHa",
    "rh_gBW"
  ],
  [
    "_0rqS-a",
    "qBU-ya",
    "YRYrTq"
  ],
  [
    "leLPTq",
    "fV0t5q",
    "PMrbXa"
  ],
  [
    "_3li69W",
    "SVAs4q",
    "nIjNjW"
  ],
  [
    "FfBBxq",
    "rtSEdW",
    "gdzZCG"
  ],
  [
    "m0vb0q",
    "cubgiG",
    "ufIuna"
  ],
  [
    "Fw9vfq",
    "QsffPG",
    "_4iHfma"
  ],
  [
    "iGvAsW",
    "SB_kFW",
    "k_IHJa"
  ],
  [
    "AhTMVW",
    "dhJKeW",
    "gLzERG"
  ],
  [
    "UgCwSW",
    "Java6a",
    "ie5riG"
  ],
  [
    "_0TPaqG",
    "_6DJyyG",
    "_7yHdaG"
  ],
  [
    "HZhGha",
    "rK_xAW",
    "fsXYAq"
  ],
  [
    "kbRY4W",
    "GSsNcq",
    "_6_jNJa"
  ],
  [
    "ztjrea",
    "vdszpW",
    "hz8-rW"
  ],
  [
    "PSXfDq",
    "i67LPW",
    "ZDDmpq"
  ],
  [
    "T1tA0G",
    "G1c4tW",
    "JqwYuG"
  ]
])

function withBuildAliases(css) {
  for (const group of BUILD_CLASS_GROUPS) {
    // Collapse only exact same-role aliases, then expand each token once.
    css = css.replace(/:is\((\.[\w-]+(?:,\.[\w-]+)+)\)/g, (all, list) => {
      const names = list.split(',').map(token => token.slice(1))
      const role = names[0].split('_').at(-1)
      return names.every(name => group.some(prefix => name === `${prefix}_${role}`))
        ? `.${group[0]}_${role}` : all
    })
    const token = new RegExp(`\\.(?:${group.join('|')})_([\\w-]+)`, 'g')
    css = css.replace(token, (_, name) => `:is(${group.map(prefix => `.${prefix}_${name}`).join(',')})`)
  }
  return css
}

// DOM queries must recognize every verified build too, not only the CSS.
const S = Object.freeze(Object.fromEntries(
  Object.entries(BASE_SELECTORS).map(([name, selector]) => [name, withBuildAliases(selector)]),
))

const CSS = withBuildAliases(`
html[data-dsh-gemini-theme="active"] {
  --gem-app:#fbf9ff; --gem-side:#f0eaf8; --gem-card:#fff; --gem-text:#30243f;
  --gem-muted:#695777; --gem-accent:#70509f; --gem-on-accent:#fff; --gem-line:#d9cde8;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-app:#2b2447; --gem-side:#40365d; --gem-card:#3a3152; --gem-text:#f4f0ff;
  --gem-muted:#bfb4d2; --gem-accent:#c4acff; --gem-on-accent:#24133e; --gem-line:#4e405f;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="conversation"] ${S.frame} {
  --dsw-alias-bg-base:var(--gem-app); --dsw-alias-bg-layer-1:var(--gem-card);
  --dsw-alias-bg-layer-2:var(--gem-card); --dsw-alias-bg-layer-3:var(--gem-card);
  --dsw-alias-bg-module-platform:var(--gem-side);
  --dsw-alias-button-primary-fill:var(--gem-accent);
  --dsw-alias-button-primary-hover:var(--gem-accent);
  --dsw-alias-border-l1:var(--gem-line); --dsw-alias-border-l2:var(--gem-line);
  background:var(--gem-side); color:var(--gem-text);
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} { background:var(--gem-side); color:var(--gem-text); border-right:1px solid var(--gem-line); }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="conversation"] ${S.main},
html[data-dsh-gemini-theme="active"] ${S.conversation} { background:var(--gem-app); color:var(--gem-text); }
html[data-dsh-gemini-theme="active"] ${S.composer} { background:var(--gem-card); border-color:var(--gem-line); }
html[data-dsh-gemini-theme="active"] ${S.composer} :where(textarea,[contenteditable="true"]) { color:var(--gem-text); caret-color:var(--gem-accent); }
html[data-dsh-gemini-theme="active"] button[aria-label="发送消息"] { background:var(--gem-accent); color:var(--gem-on-accent); }
html[data-dsh-gemini-theme="active"] :where(button,input,textarea,[contenteditable="true"]):focus-visible { outline:2px solid var(--gem-accent); outline-offset:2px; }
${S.footer} > #${ID.trigger} {
  display:flex; align-items:center; gap:8px; width:100%; min-height:34px;
  padding:5px 9px; border:1px solid transparent; border-radius:8px;
  background:transparent; color:var(--gem-text,inherit); cursor:pointer;
  font:13px/20px system-ui,sans-serif; text-align:left;
}
${S.footer} > #${ID.trigger}:hover { background:color-mix(in srgb,var(--gem-accent,#70509f) 14%,transparent); }
${S.footer} > #${ID.trigger}:focus-visible,
#${ID.panel} :focus-visible { outline:2px solid var(--gem-accent,#70509f); outline-offset:2px; }
#${ID.trigger} .gem-dot { width:10px; height:10px; border-radius:50%; background:#9a70c9; box-shadow:0 0 0 2px #9a70c930; }
#${ID.panel} {
  position:fixed; left:284px; bottom:12px; z-index:10000; width:min(294px,calc(100vw - 300px));
  padding:16px; border:1px solid var(--gem-line,#d9cde8); border-radius:14px;
  background:var(--gem-card,#fff); color:var(--gem-text,#30243f);
  box-shadow:0 14px 42px #1d102c38; font:13px/1.5 system-ui,sans-serif;
}
#${ID.panel}[hidden] { display:none; }
#${ID.panel} h2 { margin:0 0 10px; font:600 16px/1.3 system-ui,sans-serif; }
#${ID.panel} label { display:flex; align-items:center; justify-content:space-between; gap:10px; margin:9px 0; }
#${ID.panel} .gem-tone-setting { margin:8px 0 14px; }
#${ID.panel} .gem-tone-label { display:block; margin-bottom:6px; color:var(--gem-muted,#695777); font-size:12px; }
#${ID.panel} .gem-tone-control {
  display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:4px; padding:4px;
  border:1px solid var(--gem-line,#d9cde8); border-radius:10px;
  background:color-mix(in srgb,var(--gem-accent,#70509f) 7%,var(--gem-card,#fff));
}
#${ID.panel} .gem-tone-control button {
  min-width:0; padding:6px 3px; border-color:transparent; color:var(--gem-muted,#695777);
  font-size:12px; white-space:nowrap;
}
#${ID.panel} .gem-tone-control button[aria-pressed="true"] {
  border-color:var(--gem-gold,#c8a669); background:var(--gem-accent,#70509f);
  color:var(--gem-on-accent,#fff); font-weight:600;
}
#${ID.panel} input[type="checkbox"], #${ID.panel} input[type="range"] { accent-color:var(--gem-accent,#70509f); }
#${ID.panel} input[type="range"] { width:100%; }
#${ID.panel} button { border:1px solid var(--gem-line,#d9cde8); border-radius:8px; padding:6px 10px; background:transparent; color:inherit; cursor:pointer; }
#${ID.panel} p { margin:10px 0 0; color:var(--gem-muted,#695777); font-size:11px; }
#${ID.art} {
  position:absolute; inset-block-start:142px; inset-inline-end:12px; width:184px; height:290px;
  pointer-events:none; user-select:none; z-index:0; opacity:var(--gem-art-opacity,.36);
  filter:drop-shadow(0 16px 28px #6f3dab50);
}
#${ID.art}[hidden] { display:none; }
#${ID.art}.is-original {
  inset-block-start:102px; inset-inline-end:20px; width:224px; height:auto;
  padding:8px 8px 6px; border:1px solid var(--gem-line,#d9cde8); border-radius:14px;
  background:#fff; box-shadow:0 12px 36px #3f275032;
}
#${ID.art}.is-original img { display:block; width:100%; height:auto; border-radius:8px; }
#${ID.art} .orbit { position:absolute; inset:12px 0 0; border:1px solid #a78ad7; border-radius:50%; transform:rotate(-24deg) scaleX(.82); }
#${ID.art} .orbit::before, #${ID.art} .orbit::after { content:''; position:absolute; width:8px; height:8px; border-radius:50%; background:#d4b5ff; }
#${ID.art} .orbit::before { top:32px; left:10px; } #${ID.art} .orbit::after { bottom:20px; right:14px; }
#${ID.art} .hair { position:absolute; top:58px; left:32px; width:122px; height:204px; border-radius:62px 62px 50px 50px; background:linear-gradient(145deg,#9b72c9,#513477 65%,#34214f); }
#${ID.art} .ear { position:absolute; top:27px; width:56px; height:80px; background:#7c55a7; clip-path:polygon(50% 0,100% 100%,0 100%); }
#${ID.art} .ear::after { content:''; position:absolute; inset:18px 14px 8px; background:#d9a3d1; clip-path:polygon(50% 0,100% 100%,0 100%); }
#${ID.art} .ear.left { left:27px; transform:rotate(-13deg); } #${ID.art} .ear.right { right:23px; transform:rotate(13deg); }
#${ID.art} .face { position:absolute; top:96px; left:52px; width:84px; height:105px; border-radius:45% 45% 48% 48%; background:#f4d9db; }
#${ID.art} .fringe { position:absolute; top:74px; left:42px; width:104px; height:60px; border-radius:55% 50% 70% 20%; background:#73509e; transform:rotate(-8deg); }
#${ID.art} .fringe::after { content:''; position:absolute; top:24px; right:5px; width:42px; height:40px; background:#73509e; clip-path:polygon(0 0,100% 0,60% 100%); }
#${ID.art} .eye { position:absolute; top:151px; width:10px; height:6px; border-bottom:2px solid #5b3f74; border-radius:50%; }
#${ID.art} .eye.left { left:74px; } #${ID.art} .eye.right { left:105px; }
#${ID.art} .bow { position:absolute; top:199px; left:60px; width:67px; height:22px; background:#c8a7f5; clip-path:polygon(0 0,45% 32%,50% 47%,55% 32%,100% 0,82% 100%,52% 62%,48% 62%,18% 100%); }
#${ID.art} .star { position:absolute; top:48px; right:0; width:18px; height:18px; background:#d3baff; clip-path:polygon(50% 0,60% 39%,100% 50%,60% 61%,50% 100%,40% 61%,0 50%,40% 39%); }
@media (max-width:650px) { #${ID.panel} { left:12px; width:min(294px,calc(100vw - 24px)); } }
`)

const CSS_V2 = withBuildAliases(`
html[data-dsh-gemini-theme="active"] {
  --gem-app:#e8e3fb; --gem-side:#333a70; --gem-card:#fbf9ff;
  --gem-text:#392766; --gem-muted:#715b99; --gem-accent:#6052b2;
  --gem-on-accent:#fff; --gem-line:#b8a6dc; --gem-gold:#c8a669; --gem-link:#167f8a;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-app:#2b2447; --gem-side:#40365d; --gem-card:#3a3152;
  --gem-text:#f7f2ff; --gem-muted:#c3b9df; --gem-accent:#bba9ff;
  --gem-on-accent:#1c1839; --gem-line:#65568d; --gem-gold:#d5b987; --gem-link:#62dce7;
}
/* Match native form controls to the active skin; light is the default skin tone. */
html[data-dsh-gemini-theme="active"] { color-scheme:light; }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] { color-scheme:dark; }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="conversation"] ${S.frame} {
  --dsw-alias-bg-base:var(--gem-app); --dsw-alias-bg-layer-1:var(--gem-card);
  --dsw-alias-bg-layer-2:var(--gem-card); --dsw-alias-bg-layer-3:var(--gem-card);
  --dsw-alias-bg-module-platform:var(--gem-side);
  --dsw-alias-button-primary-fill:var(--gem-accent);
  --dsw-alias-button-primary-hover:var(--gem-accent);
  --dsw-alias-border-l1:var(--gem-line); --dsw-alias-border-l2:var(--gem-line);
  background:#2b2a52;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} {
  position:relative; isolation:isolate; color:#f5efff;
  background:radial-gradient(circle at 44% 4%,#737dbb 0,#4a568f 31%,#343d76 69%,#272e60 100%);
  border-right:3px double #c8a669;
  box-shadow:inset 0 0 0 3px #252c5d,inset 0 0 0 4px #c6b9ea80,8px 0 24px #10102655;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar}::before {
  content:""; position:absolute; inset:8px 6px; pointer-events:none; z-index:4;
  border:1px solid #d1b67a75; border-radius:8px;
  background:radial-gradient(circle at 0 0,#ffe6a8 0 2px,transparent 3px),
    radial-gradient(circle at 100% 0,#ffe6a8 0 2px,transparent 3px),
    radial-gradient(circle at 0 100%,#ffe6a8 0 2px,transparent 3px),
    radial-gradient(circle at 100% 100%,#ffe6a8 0 2px,transparent 3px);
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :where(button,a,input,[role="button"]) {
  color:#f6f1ff; border-color:#bba6d566;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :where(button,[role="button"]):hover {
  background:linear-gradient(90deg,#696bb866,#a185cf44);
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} input {
  background:#252e66bb; color:#f6f1ff; border:1px solid #d0bdeb88;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} input::placeholder { color:#d5cbe8; }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="conversation"] ${S.main} { background:transparent; }
html[data-dsh-gemini-theme="active"] ${S.conversation} {
  position:relative; isolation:isolate; color:var(--gem-text);
  --dsw-alias-label-primary:#352460; --dsw-alias-label-secondary:#67538c;
  --dsw-alias-label-tertiary:#7b689f; --dsw-alias-brand-text:#392766;
  background-image:linear-gradient(90deg,#f4f0ff15 0%,#f7f3ff30 28%,#fbf9ff6b 48%,#f7f4ff49 74%,#ddd1f721 100%),url("${SCENE_DATA_URL}");
  background-size:cover; background-position:center center;
  box-shadow:none;
}
/* DSH paints a base-color gradient on the active transcript's sticky composer seat. Clear that layer directly; the theme scene marker can lag behind chat navigation. */
html[data-dsh-gemini-theme="active"] :is(
  .ST7X_W_root[data-phase="active"] .ST7X_W_composerSeat,
  .ST7X_W_embeddedBody[data-content-phase="active"] .ST7X_W_composerSeat,
  .Dc7zOa_root[data-phase="active"] .Dc7zOa_composerSeat,
  .Dc7zOa_embeddedBody[data-content-phase="active"] .Dc7zOa_composerSeat
) {
  background:transparent !important;
  backdrop-filter:none !important; -webkit-backdrop-filter:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.conversation} {
  --dsw-alias-label-primary:#f3eaff; --dsw-alias-label-secondary:#d0bee9;
  --dsw-alias-label-tertiary:#b6a0d4; --dsw-alias-brand-text:#f3eaff;
  background-image:linear-gradient(90deg,#0b092bc9,#171435a9 28%,#1b173987 52%,#1813339e 73%,#080722c9),url("${SCENE_DATA_URL}");
}
html[data-dsh-gemini-theme="active"] ${S.conversation} :where(${S.heroTitle},${S.heroComposer}) {
  color:var(--gem-text);
}
html[data-dsh-gemini-theme="active"] ${S.conversation}::before {
  content:""; position:absolute; inset:8px 8px auto; height:24px; pointer-events:none; z-index:3;
  background:repeating-linear-gradient(135deg,#f7edcb99 0 2px,transparent 2px 12px),
    linear-gradient(#271e62d9,#271e6200);
  opacity:.28; -webkit-mask-image:linear-gradient(#000,transparent); mask-image:linear-gradient(#000,transparent);
}
#${ID.frame} {
  position:absolute; inset:12px 12px 5px; pointer-events:none; z-index:5;
  border:2px solid #d8bd7a; border-radius:5px;
  box-shadow:inset 0 0 0 1px #534a8a78,0 0 0 1px #29285780;
}
#${ID.frame}[hidden] { display:none; }
#${ID.frame} .corner { position:absolute; width:42px; height:42px; color:#b99559; }
#${ID.frame} .corner::before {
  content:""; position:absolute; inset:3px; border:1px solid currentColor; border-radius:0 100% 0 0;
  box-shadow:inset 0 0 0 3px #fff5dc44; transform:rotate(90deg); transform-origin:center;
}
#${ID.frame} .corner::after {
  content:"✦"; position:absolute; font:21px/1 Georgia,serif; color:#f5d88f; text-shadow:0 0 5px #494087;
}
#${ID.frame} .top-left { left:0; top:0; }
#${ID.frame} .top-right { right:0; top:0; transform:scaleX(-1); }
#${ID.frame} .bottom-left { left:0; bottom:0; transform:scaleY(-1); }
#${ID.frame} .bottom-right { right:0; bottom:0; transform:scale(-1); }
#${ID.frame} .top-left::after,#${ID.frame} .top-right::after,#${ID.frame} .bottom-left::after,#${ID.frame} .bottom-right::after { top:0; left:0; }
#${ID.frame} .seal {
  position:absolute; top:-13px; left:50%; transform:translateX(-50%); width:44px; height:26px;
  border:1px solid #ddc38c; border-radius:50%; color:#f7e6b4;
  background:radial-gradient(circle,#6960a2,#393563); text-align:center; font:22px/23px Georgia,serif;
  box-shadow:0 1px 8px #20244e99;
}
#${ID.art} {
  position:absolute; left:13px; right:auto; top:auto; bottom:9px;
  width:min(28vw,410px); height:calc(100% - 90px);
  padding:0; border:0; border-radius:0; background:transparent; box-shadow:none;
  opacity:var(--gem-art-opacity,.82); filter:drop-shadow(12px 16px 14px #28235077); z-index:1;
  transform-origin:left bottom; transition:transform .56s cubic-bezier(.22,.78,.2,1),opacity .42s ease;
}
#${ID.art}.is-original { left:13px; right:auto; top:auto; bottom:9px; width:min(28vw,410px); height:calc(100% - 90px); padding:0; border:0; background:none; box-shadow:none; }
#${ID.art}.is-original img { width:100%; height:100%; object-fit:contain; object-position:left bottom; border-radius:0; }
#${ID.companion} {
  position:absolute; right:18px; bottom:13px; width:min(19vw,270px); height:62%;
  pointer-events:none; user-select:none; z-index:1; opacity:var(--gem-art-opacity,.82);
  filter:drop-shadow(0 17px 15px #2c265c88);
  transform-origin:right bottom; transition:transform .56s cubic-bezier(.22,.78,.2,1),opacity .42s ease;
}
html[data-dsh-gemini-scene="chat"] #${ID.art} { transform:translateX(-4px); }
html[data-dsh-gemini-scene="chat"] #${ID.companion} { transform:scale(.76) translateX(8px); }
#${ID.companion}[hidden] { display:none; }
#${ID.companion} img { display:block; width:100%; height:100%; object-fit:contain; object-position:right bottom; }
html[data-dsh-gemini-theme="active"] ${S.composer} {
  position:relative; z-index:2; color:var(--gem-text);
  background:var(--gem-card);
  border:1px solid #c9aa74; border-radius:18px;
  box-shadow:0 18px 46px #25205440,0 0 0 3px #f4e8c9b5,inset 0 0 0 1px #fffefa;
  backdrop-filter:none;
}
html[data-dsh-gemini-theme="active"] ${S.composer}::before {
  content:"✦ ─────────── ✧ ─────────── ✦"; position:absolute; left:50%; top:-14px;
  transform:translateX(-50%); white-space:nowrap; pointer-events:none;
  padding:0 13px; color:#b69a68; font:14px/18px Georgia,serif;
  border-radius:20px; background:#f8f3ffed; box-shadow:0 1px 4px #24235033;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label="添加文件或调用指令"] {
  width:30px; height:30px; border:1px solid #b8a5d8; border-radius:50%;
  background:linear-gradient(145deg,#fffefa,#e9e0fb); color:#51418f;
  box-shadow:0 2px 5px #493f8060,inset 0 0 0 2px #fffafc;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label="添加文件或调用指令"]:hover {
  background:linear-gradient(145deg,#fffefa,#d8cbfa); border-color:#9e88ce;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label^="访问模式"] {
  min-height:28px; padding-inline:9px; border:1px solid #d5c4e6; border-radius:999px;
  background:#f3effbcc; color:#544777; font-weight:500;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label^="选择模型"] {
  min-height:28px; padding-inline:10px; border:1px solid #cbbbe4; border-radius:999px;
  background:linear-gradient(90deg,#f6f2ff,#e9e4fa); color:#433769; font-weight:600;
  box-shadow:inset 0 0 0 1px #fffdfd;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label^="选择模型"] * {
  color:#4d4278; font-weight:600;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.composer} button[aria-label^="选择模型"],
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.composer} button[aria-label^="访问模式"] {
  background:#3b3258; color:#f4efff; border-color:#7d6ea4;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.composer} button[aria-label^="选择模型"] * {
  color:#f4efff;
}
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label^="选择模型"]:hover,
html[data-dsh-gemini-theme="active"] ${S.composer} button[aria-label^="访问模式"]:hover {
  border-color:#a98fd4; background:#eae2fb;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-wide="yes"] ${S.conversation} ${S.heroComposer} {
  width:640px; max-width:calc(100% - 32px); margin-inline:auto; transform:translateX(80px);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-wide="yes"] ${S.conversation} ${S.heroComposer} ${S.composer} {
  width:calc(100% - 32px); max-width:100%;
}
html[data-dsh-gemini-theme="active"] button[aria-label="发送消息"] {
  background:linear-gradient(145deg,#786ad1,#443883); color:#fff;
  box-shadow:0 2px 7px #31296f88;
}
html[data-dsh-gemini-theme="active"] #${ID.panel} { color:var(--gem-text); }
html[data-dsh-gemini-theme="active"] #${ID.panel} :where(h2,label,output,button) { color:inherit; }
html[data-dsh-gemini-theme="active"] #${ID.panel} p { color:var(--gem-muted); }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-transition="on"] ${S.conversation}::after {
  content:""; position:absolute; inset:0; z-index:4; pointer-events:none;
  background:linear-gradient(110deg,transparent 18%,#baa5ed55 48%,transparent 80%);
  animation:gemini-session-wash .46s ease-out both;
}
@keyframes gemini-session-wash {
  0%,100% { opacity:0; transform:translateX(-3%); }
  45% { opacity:1; transform:translateX(2%); }
}
@media (prefers-reduced-motion:reduce) {
  #${ID.art},#${ID.companion} { transition:none; }
  html[data-dsh-gemini-theme="active"] ${S.conversation}::after { animation:none !important; }
}
#${ID.mascot} {
  position:relative; width:100%; height:174px; margin:0 0 6px;
  pointer-events:none; overflow:hidden; border:0; background:transparent; box-shadow:none;
}
#${ID.mascot}[hidden] { display:none; }
#${ID.mascot}::before {
  content:""; position:absolute; left:50%; bottom:-25px; width:185px; height:170px;
  transform:translateX(-50%); border-radius:50%;
  background:radial-gradient(ellipse,#a997db88 0,#9e8ad945 45%,transparent 72%);
}
#${ID.mascot} img { position:relative; display:block; width:190px; height:168px; margin:2px auto 0; object-fit:contain; object-position:center; filter:drop-shadow(0 7px 7px #20245977); }
${S.footer} > #${ID.trigger} {
  justify-content:center; min-height:36px; border:1px solid #cfb47d;
  border-radius:9px; color:#f9edcf; background:linear-gradient(90deg,#343b76,#4f518f,#343b76);
  box-shadow:inset 0 0 0 2px #2e3569,inset 0 0 0 3px #c8ae77aa;
}
${S.footer} > #${ID.trigger}:hover { background:linear-gradient(90deg,#404b98,#7462ab,#404b98); }
#${ID.trigger} .gem-dot { background:#b8a1ff; box-shadow:0 0 0 2px #dacaa3,0 0 9px #b8a1ff; }
#${ID.panel} {
  border:1px solid #d2b77d; border-radius:15px;
  background:linear-gradient(160deg,#fffefd,#f1ecff); color:#292249;
  box-shadow:0 18px 52px #15143577,0 0 0 3px #534b8c;
}
html[data-dsh-gemini-tone="dark"] #${ID.panel} { background:linear-gradient(160deg,#42365e,#332b4d); color:#f7f2ff; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} :not(svg):not(path) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
/* Keep the pale new-session action legible against its light surface. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"]:not(._2H3hWW_brand,._3WPZCG_brand):not(svg):not(path),
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"]:not(._2H3hWW_brand,._3WPZCG_brand) :not(svg):not(path) {
  color:#211b48 !important; -webkit-text-fill-color:#211b48 !important;
}
/* Windows renders the brand as a new-session button; macOS renders a span.
   Keep this button on the sidebar surface, without styling it as a composer action. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} button:is(._2H3hWW_brand,._3WPZCG_brand) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  background:transparent !important; border:0 !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"]:not(._2H3hWW_brand,._3WPZCG_brand) {
  color:#211b48 !important; background:linear-gradient(#fffefa,#efe8ff) !important;
  border:1px solid #d5b87d !important; box-shadow:0 0 0 2px #393561,inset 0 0 0 1px #fff;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button:is(._2H3hWW_newSession,._3WPZCG_newSession) {
  border-radius:10px !important;
  background:linear-gradient(105deg,#fffdfd,#eee5ff 72%,#e0d6fa) !important;
  box-shadow:0 0 0 2px #32396d,inset 0 0 0 1px #fff,0 3px 9px #1c225255;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button:is(._2H3hWW_newSession,._3WPZCG_newSession) svg {
  box-sizing:border-box; width:25px; height:25px; padding:4px;
  border:1px solid #bea6dc; border-radius:50%; background:#e9ddff;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"]:not(._2H3hWW_brand,._3WPZCG_brand) * { color:#211b48 !important; }
html[data-dsh-gemini-theme="active"] ${S.footer} { background:transparent !important; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar { width:7px; height:7px; background:#3a4077; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar-track { background:#3a4077; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar-thumb { background:#9c8fc6; border-radius:8px; }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.sidebar} *::-webkit-scrollbar,
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.sidebar} *::-webkit-scrollbar-track { background:#59466f; }
/* Keep the Windows conversation scroller from exposing its bright native scrollbar. */
html[data-dsh-gemini-theme="active"] ${S.conversation} :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody) {
  scrollbar-color:#89789f #383452 !important; scrollbar-width:thin !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody)::-webkit-scrollbar {
  width:8px; height:8px; background:#383452;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody)::-webkit-scrollbar-track {
  background:#383452;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody)::-webkit-scrollbar-thumb {
  background:#89789f; border:2px solid #383452; border-radius:8px;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody)::-webkit-scrollbar-thumb:hover {
  background:#d7ba80;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} ${S.sidebarFade} {
  background-image:linear-gradient(transparent,#3a3d74) !important;
}
@media (min-width:1100px) and (max-width:1499px) {
  #${ID.art}.is-original { width:clamp(260px,26vw,390px); height:calc(100% - 90px); }
  #${ID.companion} { width:clamp(145px,13vw,190px); height:46%; }
  html[data-dsh-gemini-theme="active"] ${S.conversation} ${S.heroComposer} {
    width:calc(100% - clamp(260px,26vw,390px) - 220px); max-width:600px; margin-left:calc(clamp(260px,26vw,390px) + 28px); margin-right:auto;
  }
}
@media (max-width:1099px) { #${ID.art},#${ID.companion} { display:none; } }
@media (max-height:720px) { #${ID.mascot} { height:112px; } #${ID.mascot} img { width:78px; height:108px; margin:2px auto 0; } }
`)

// Shared opaque surfaces cover both in-frame views and body-level portals.
const CSS_V3 = withBuildAliases(`
/* Independent controls: keep character positioning without requiring the star theme. */
html[data-dsh-gemini-art="on"] ${S.conversation} {
  position:relative; isolation:isolate;
}
html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"] ${S.conversation} :is(${S.heroTitle},${S.heroComposer},.Dc7zOa_scrollBody,.ST7X_W_scrollBody) {
  position:relative; z-index:2;
}
html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"] ${S.heroTitle} {
  box-sizing:border-box; width:100%; max-width:100%; margin:0; padding-inline:0; transform:none;
}
html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"] ${S.heroTitle} :is(.Hqq-bq_headline,.bocITq_headline) {
  justify-content:center; align-items:center; text-align:center;
}
html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"][data-dsh-gemini-wide="yes"] ${S.conversation} ${S.heroComposer} {
  width:640px; max-width:calc(100% - 32px); margin-inline:auto; transform:translateX(80px);
}
html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"][data-dsh-gemini-wide="yes"] ${S.heroComposer} ${S.composer} {
  box-sizing:border-box; width:calc(100% - 32px); max-width:100%;
}
@media (min-width:1100px) and (max-width:1499px) {
  html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"] ${S.conversation} ${S.heroComposer} {
    width:min(52%,640px); max-width:640px; margin-left:36%; margin-right:auto;
    transform:translateY(calc(0px - clamp(48px,6.5vh,64px)));
  }
  html[data-dsh-gemini-theme="off"][data-dsh-gemini-art="on"] ${S.heroComposer} ${S.composer} {
    box-sizing:border-box; width:100%; max-width:100%;
  }
}
/* The sidebar panel has a persistent selected state, separate from hover. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_panelRow,._3WPZCG_panelRow):is(:hover,[aria-current="page"],._2H3hWW_panelActive,._3WPZCG_panelActive) {
  background:linear-gradient(90deg,#514b8d,#3e3b7a) !important;
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_panelRow,._3WPZCG_panelRow):is(:hover,[aria-current="page"],._2H3hWW_panelActive,._3WPZCG_panelActive) :where(:not(svg):not(path)) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_panelRow,._3WPZCG_panelRow):is([aria-current="page"],._2H3hWW_panelActive,._3WPZCG_panelActive) {
  box-shadow:inset 3px 0 #d7ba80;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_panelRow,._3WPZCG_panelRow) svg {
  color:#f9e8b0;
}
/* End independent controls. */
/* Recolor DSH settings surfaces and controls as one palette so OS dark controls cannot sit on light panels. */
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) {
  --gem-settings-surface:color-mix(in srgb,var(--gem-accent) 5%,var(--gem-card));
  --gem-settings-control:color-mix(in srgb,var(--gem-accent) 9%,var(--gem-card));
  --dsw-alias-bg-base:var(--gem-app) !important;
  --dsw-alias-bg-layer-1:var(--gem-settings-surface) !important;
  --dsw-alias-bg-layer-2:var(--gem-app) !important;
  --dsw-alias-bg-layer-3:var(--gem-settings-surface) !important;
  --dsw-alias-bg-layer-4:color-mix(in srgb,var(--gem-accent) 12%,var(--gem-settings-surface)) !important;
  --dsw-alias-bg-module-platform:var(--gem-side) !important;
  --dsw-alias-settings-card-fill:var(--gem-settings-surface) !important;
  --dsw-alias-settings-card-stroke:var(--gem-line) !important;
  --dsw-alias-label-primary:var(--gem-text) !important;
  --dsw-alias-label-secondary:var(--gem-muted) !important;
  --dsw-alias-label-tertiary:var(--gem-muted) !important;
  --dsw-alias-label-caption:var(--gem-muted) !important;
  --dsw-alias-label-primary-bluish:var(--gem-gold) !important;
  --dsw-alias-brand-text:var(--gem-text) !important;
  --dsw-alias-border-l1:var(--gem-line) !important;
  --dsw-alias-border-l2:var(--gem-line) !important;
  --dsw-alias-border-l3:var(--gem-line) !important;
  --dsw-alias-border-l4:var(--gem-line) !important;
  --dsw-alias-interactive-bg-hover:color-mix(in srgb,var(--gem-accent) 16%,var(--gem-settings-surface)) !important;
  --dsw-alias-interactive-bg-active:color-mix(in srgb,var(--gem-accent) 24%,var(--gem-settings-surface)) !important;
  --dsw-alias-button-primary-fill:var(--gem-accent) !important;
  --dsw-alias-button-primary-hover:var(--gem-accent) !important;
  --dsw-alias-button-tool-bar-fill:var(--gem-settings-control) !important;
  --dsw-alias-button-tool-bar-hover:color-mix(in srgb,var(--gem-accent) 16%,var(--gem-settings-control)) !important;
  --dsw-alias-label-primary-foreground:var(--gem-on-accent) !important;
  --dsw-alias-brand-primary:var(--gem-accent) !important;
  --dsw-alias-switch-thumb:#e8d8b6 !important;
  --dsw-alias-state-business-primary:var(--gem-accent) !important;
  --dsw-specific-sidebar-nav-item-hover:color-mix(in srgb,var(--gem-accent) 16%,var(--gem-settings-surface)) !important;
  --dsw-specific-sidebar-nav-item-active:color-mix(in srgb,var(--gem-accent) 24%,var(--gem-settings-surface)) !important;
  color:var(--gem-text) !important; color-scheme:inherit;
  background:linear-gradient(135deg,var(--gem-app),var(--gem-settings-surface)) !important;
}
html[data-dsh-gemini-theme="active"] .Dws9Sa_panel {
  border:1px solid var(--gem-gold) !important; border-radius:20px;
  box-shadow:0 18px 54px #15143577,0 0 0 2px #d7ba8033 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_nav,.wCInkW_nav) {
  color:#f9e8b0 !important;
  background:linear-gradient(160deg,#5b65a4,#42447c 56%,#36315e) !important;
  border-right:1px solid #c8a669 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_navTitle,.wCInkW_navTitle) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_nav,.wCInkW_nav) button {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
  background:transparent !important; border-color:transparent !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_content,.wCInkW_content) {
  color:var(--gem-text) !important;
  background:linear-gradient(135deg,var(--gem-app),var(--gem-settings-surface)) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_navCell,.wCInkW_navCell) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_navCell.Dws9Sa_active,.wCInkW_navCell.wCInkW_active) {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
  background:linear-gradient(90deg,#65569d,#49447e) !important;
  box-shadow:inset 3px 0 #e4c67c,0 3px 10px #17153744;
}
/* Only paint the actual model card surface. Matching every class containing "card"
   also catches title/description wrappers and creates rectangular highlight strips. */
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_card {
  background:var(--gem-settings-surface) !important; color:var(--gem-text) !important;
  border-color:var(--gem-line) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) button:not(.Dws9Sa_navCell):not(.wCInkW_navCell):not([role="switch"]):not([role="radio"]):not([aria-checked]):not(.FfBBxq_helpButton):not(.FfBBxq_iconButton) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:var(--gem-settings-control) !important; border-color:var(--gem-line) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :where(
  input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),textarea,select,[role="combobox"],[role="spinbutton"]
) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:var(--gem-settings-control) !important; border:1px solid var(--gem-line) !important;
  color-scheme:inherit;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  button[aria-pressed="true"],button[aria-selected="true"],button[aria-current="page"],button[data-state="on"],
  button[data-selected="true"],[role="radio"][aria-checked="true"],[role="tab"][aria-selected="true"],
  [role="option"][aria-selected="true"],button[aria-checked="true"]:not([role="switch"]),button[data-state="checked"]:not([role="switch"])
) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:var(--gem-on-accent) !important;
  background:var(--gem-accent) !important; border-color:var(--gem-gold) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"],button[class*="link" i]) {
  color:var(--gem-link) !important; -webkit-text-fill-color:var(--gem-link) !important;
}
/* Status chips in tool/plugin settings need their own foreground, rather than
   inheriting a dark switch/button label on the same dark fill. */
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  :is(.badge,[class*="_badge_"],[class$="_badge"]),:is(.tag,[class*="_tag_"],[class$="_tag"]),:is(.pill,[class*="_pill_"],[class$="_pill"]),[data-status],[data-state="disabled"]
) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:color-mix(in srgb,var(--gem-accent) 10%,var(--gem-settings-surface)) !important;
  border:1px solid var(--gem-line) !important; border-radius:999px !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  :is(.badge,[class*="_badge_"],[class$="_badge"]),:is(.tag,[class*="_tag_"],[class$="_tag"]),:is(.pill,[class*="_pill_"],[class$="_pill"]),[data-status],[data-state="disabled"]
) :where(:not(svg):not(path)) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) :where(:not(svg):not(path)) {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),[role="spinbutton"],.DwKIAW_stepper
) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:var(--gem-settings-control) !important; border-color:var(--gem-gold) !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(div,button):has(> input[type="number"]),
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(div,button):has(> [role="spinbutton"]) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:var(--gem-settings-control) !important; border:1px solid var(--gem-gold) !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :where(:is(.input,[class*="_input_"],[class$="_input"]),:is(.fieldControl,[class*="_fieldControl_"],[class$="_fieldControl"])) {
  background:var(--gem-settings-control) !important; color:var(--gem-text) !important;
  border-color:var(--gem-line) !important;
}
/* The DSH font-size control is a custom stepper, not a text input. */
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_stepper {
  background:var(--gem-settings-control) !important; color:var(--gem-text) !important;
  border:1px solid var(--gem-gold) !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_value {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_unit {
  color:var(--gem-muted) !important; -webkit-text-fill-color:var(--gem-muted) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_arrow {
  color:var(--gem-text) !important; background:color-mix(in srgb,var(--gem-accent) 10%,var(--gem-settings-control)) !important;
  border:1px solid var(--gem-line) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_arrow:hover:not(:disabled) {
  color:var(--gem-on-accent) !important; background:var(--gem-accent) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :where(input[type="checkbox"],input[type="radio"],input[type="range"],[role="switch"]) {
  accent-color:#b28a3f !important; filter:none !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) {
  --dsw-alias-label-primary-foreground:#fff3cd !important;
  --dsw-alias-switch-thumb:#e8d8b6 !important;
  background:#5b5284 !important; border:1px solid #bca46f !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  .switch[aria-checked="true"],:is(.switch,[class*="_switch_"],[class$="_switch"])[aria-checked="true"],[role="switch"][aria-checked="true"],
  .switch[data-state="checked"],:is(.switch,[class*="_switch_"],[class$="_switch"])[data-state="checked"],[role="switch"][data-state="checked"]
) { background:#7461ad !important; }
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) :is(.thumb,:is(.thumb,[class*="_thumb_"],[class$="_thumb"])) {
  background:#fff3cd !important; border:1px solid #c8a669 !important; box-shadow:0 1px 3px #1b153c55 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(input[type="radio"],input[type="checkbox"]) {
  accent-color:#b28a3f !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardActive .FfBBxq_cardIdentity > :is(.tag,[class*="_tag_"],[class$="_tag"])[data-tone="solid"] {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
  background:#5b5284 !important; border:1px solid #c8a669 !important; border-radius:999px !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot {
  background:color-mix(in srgb,var(--gem-accent) 9%,var(--gem-settings-surface)) !important;
  border-top:1px solid var(--gem-line) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_helpButton,
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_iconButton {
  color:var(--gem-muted) !important; -webkit-text-fill-color:var(--gem-muted) !important;
  background:transparent !important; border:1px solid transparent !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_helpButton:hover,
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_iconButton:hover,
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_helpButton:focus-visible,
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot button.FfBBxq_iconButton:focus-visible {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:color-mix(in srgb,var(--gem-accent) 12%,var(--gem-settings-surface)) !important;
  border-color:var(--gem-line) !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_cardFoot :where(:not(svg):not(path)) {
  color:var(--gem-text) !important; -webkit-text-fill-color:var(--gem-text) !important;
  background:transparent !important; box-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:#8a651c !important; -webkit-text-fill-color:#8a651c !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:#f1d997 !important; -webkit-text-fill-color:#f1d997 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"] :where(:not(svg):not(path)) {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"] {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"],button[class*="link" i]) {
  color:#8a651c !important; -webkit-text-fill-color:#8a651c !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"],button[class*="link" i]) {
  color:#f1d997 !important; -webkit-text-fill-color:#f1d997 !important;
}
/* The top-up action has a saturated button fill, so use a bright foreground instead of body-link gold. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"],
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"] :where(:not(svg):not(path)) {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"],
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"] :where(:not(svg):not(path)) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:var(--gem-on-accent) !important;
}
html[data-dsh-gemini-theme="active"] :where(${S.frame},[role="menu"],[role="listbox"],._surface_ri079_1,:is(.Z9Jnlq_menu,.tki__G_menu)) {
  --dsw-alias-bg-base:var(--gem-app); --dsw-alias-bg-layer-1:var(--gem-card);
  --dsw-alias-bg-layer-2:var(--gem-card); --dsw-alias-bg-layer-3:var(--gem-card);
  --dsw-alias-label-primary:var(--gem-text); --dsw-alias-label-secondary:var(--gem-muted);
  --dsw-alias-label-tertiary:var(--gem-muted); --dsw-alias-label-caption:var(--gem-muted);
  --dsw-alias-label-primary-bluish:var(--gem-text); --dsw-alias-brand-text:var(--gem-text);
  --dsw-alias-border-l1:var(--gem-line); --dsw-alias-border-l2:var(--gem-line);
  --dsw-alias-border-l3:var(--gem-line); --dsw-alias-border-l4:var(--gem-line);
  --dsw-alias-interactive-bg-hover:color-mix(in srgb,var(--gem-accent) 12%,var(--gem-card));
  --dsw-alias-button-primary-fill:var(--gem-accent);
  --dsw-alias-button-primary-hover:var(--gem-accent);
  --dsw-alias-menu-icon:var(--gem-muted); --dsw-specific-menu:var(--gem-card);
  --dsw-specific-sidebar-nav-item-hover:color-mix(in srgb,var(--gem-accent) 12%,var(--gem-card));
  --dsw-specific-sidebar-nav-item-active:color-mix(in srgb,var(--gem-accent) 18%,var(--gem-card));
  color:var(--gem-text);
}
html[data-dsh-gemini-theme="active"] ${S.heroTitle} {
  box-sizing:border-box; width:100%; max-width:100%; margin:0; padding-inline:0; transform:none;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} {
  --dsw-alias-label-primary:#f9e8b0; --dsw-alias-label-secondary:#ddd2f4;
  --dsw-alias-label-tertiary:#cbbde5; --dsw-alias-label-caption:#cbbde5;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow):is(.hIlkoa_selected,.jJkEga_selected) {
  background:#4a478e; box-shadow:inset 3px 0 #d7ba80;
}
/* Correct only the HARNESS badge; keep the whale and DeepSeek wordmark untouched. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) svg[viewBox="26 0 156 24"] rect {
  fill:#d7ba80 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) svg[viewBox="26 0 156 24"] {
  --dsw-alias-label-primary-inverted:#fff8e5;
  color:#f9e8b0 !important;
}
/* The official mark uses currentColor for the whale and wordmark; set it explicitly on both platforms. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) :is(._2H3hWW_brandMark,._3WPZCG_brandMark),
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) :is(._2H3hWW_brandMark,._3WPZCG_brandMark) svg,
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) svg[viewBox="26 0 156 24"] {
  color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(._2H3hWW_brand,._3WPZCG_brand) :is(._2H3hWW_brandMark,._3WPZCG_brandMark) svg path {
  fill:currentColor !important;
}
/* Keep history text gold over a dark hover surface on Windows and macOS. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow):hover {
  background:linear-gradient(90deg,#514b8d,#3e3b7a) !important;
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow):hover :where(:not(svg):not(path)) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
/* Workspace folder rows use their own projectRow class, separate from history rows. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(.hIlkoa_projectRow,.jJkEga_projectRow,[role="treeitem"]):hover {
  background:linear-gradient(90deg,#514b8d,#3e3b7a) !important;
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} :is(.hIlkoa_projectRow,.jJkEga_projectRow,[role="treeitem"]):hover :where(:not(svg):not(path)) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
/* Hide DSH's drag-position guide while resizing so it cannot paint through message surfaces. */
html[data-dsh-gemini-theme="active"] [class*="_widthHandle"][data-dragging]::after {
  opacity:0 !important;
}
/* Preserve 0.4.7 chat surfaces; strengthen text without altering background layers. */
html[data-dsh-gemini-theme="active"] :is(.Dc7zOa_scrollBody,.ST7X_W_scrollBody) {
  position:relative; z-index:2;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} {
  --gem-chat-body:#f9e8b0;
  --gem-chat-secondary:#f9e5a8;
  --gem-chat-caption:#f4dda0;
  --gem-chat-heading:#ffc1e4;
  --gem-chat-link:#9feaff;
  --gem-chat-link-visited:#9feaff;
  --gem-chat-link-hover:#9feaff;
  --dsw-alias-label-primary:var(--gem-chat-body);
  --dsw-alias-label-secondary:var(--gem-chat-secondary);
  --dsw-alias-label-tertiary:var(--gem-chat-caption);
  --dsw-alias-label-caption:var(--gem-chat-caption);
  --dsw-alias-label-primary-bluish:var(--gem-chat-link);
  --dsw-alias-brand-text:var(--gem-chat-link);
  color:var(--gem-chat-body);
  -webkit-text-stroke:.25px #403350;
  text-shadow:0 1px 2px #2a2045c9,0 0 1px #2a2045f5;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"][data-dsh-gemini-tone="dark"] ${S.conversation} {
  --gem-chat-body:#f9e8b0;
  --gem-chat-secondary:#fae7ac;
  --gem-chat-caption:#f2deaa;
  --gem-chat-heading:#ffc1e4;
  --gem-chat-link:#a7f0f3;
  --gem-chat-link-visited:#a7f0f3;
  --gem-chat-link-hover:#a7f0f3;
  --dsw-alias-label-primary:var(--gem-chat-body);
  --dsw-alias-label-secondary:var(--gem-chat-secondary);
  --dsw-alias-label-tertiary:var(--gem-chat-caption);
  --dsw-alias-label-caption:var(--gem-chat-caption);
  --dsw-alias-label-primary-bluish:var(--gem-chat-link);
  --dsw-alias-brand-text:var(--gem-chat-link);
  color:var(--gem-chat-body);
  -webkit-text-stroke:.22px #241c3d;
  text-shadow:0 1px 2px #110d2dcc,0 0 1px #110d2dcc;
}
/* Match user prompt text to the bright gold-on-violet header treatment. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [class$="_userRow"] [class$="_bubble"] {
  background:linear-gradient(135deg,
    color-mix(in srgb,var(--gem-side) 94%,#282344),
    color-mix(in srgb,var(--gem-side) 76%,var(--gem-accent))) !important;
  border:1px solid color-mix(in srgb,#f5d88f 82%,transparent);
  box-shadow:0 4px 14px #17102d40,inset 0 1px #fff2;
  color:var(--gem-chat-body);
  font-weight:500;
}
/* Keep assistant replies readable on the artwork without covering the full chat lane. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] {
  box-sizing:border-box;
  width:fit-content; max-width:min(100%,72ch); margin-right:auto;
  padding:12px 16px;
  border:1px solid color-mix(in srgb,#f5d88f 72%,transparent);
  border-radius:14px;
  background:linear-gradient(135deg,
    color-mix(in srgb,var(--gem-side) 94%,#282344),
    color-mix(in srgb,var(--gem-side) 76%,var(--gem-accent))) !important;
  box-shadow:0 4px 14px #17102d40,inset 0 1px #fff2;
  color:var(--gem-chat-body);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(h1,h2,h3,h4,strong,b) {
  color:var(--gem-chat-heading);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(p,li,blockquote,dd,dt,td,th) {
  color:var(--gem-chat-body);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(small,time,figcaption) {
  color:var(--gem-chat-caption);
}
html[data-dsh-gemini-theme="active"] :is(a[href],[role="link"],[class*="link" i],[data-link],[class*="_fileMention_" i],[class*="_fileName" i],[class*="_q_name" i]) {
  color:var(--gem-chat-link,#9feaff) !important;
  -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
}
html[data-dsh-gemini-theme="active"] :is(a[href],[role="link"],[class*="link" i],[data-link],[class*="_fileMention_" i],[class*="_fileName" i],[class*="_q_name" i]) :where(:not(svg):not(path)) {
  color:var(--gem-chat-link,#9feaff) !important;
  -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
}
html[data-dsh-gemini-theme="active"] :is(a[href],[role="link"],[class*="link" i],[data-link],[class*="_fileMention_" i],[class*="_fileName" i],[class*="_q_name" i]):is(:link,:visited,:hover,:active,:focus-visible) {
  color:var(--gem-chat-link,#9feaff) !important;
  -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
  text-decoration-color:var(--gem-chat-link,#9feaff);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(a,[role="link"]) {
  text-decoration-line:underline; text-decoration-color:color-mix(in srgb,var(--gem-chat-link) 76%,transparent);
  text-decoration-thickness:1px; text-underline-offset:.16em;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(a,[role="link"]):hover {
  text-decoration-thickness:2px;
}
/* Use one typography treatment for both the hero (new chat) and regular chat composer. */
html[data-dsh-gemini-theme="active"] ${S.composer} [data-composer-input="true"],
html[data-dsh-gemini-theme="active"] ${S.composer} [data-composer-input="true"] * {
  color:#7651a8 !important; -webkit-text-fill-color:#7651a8 !important; caret-color:#7651a8;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif !important;
  font-size:14px !important; font-weight:500 !important; line-height:24px !important; letter-spacing:normal !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] code:not(pre code) {
  display:inline; padding:.08em .36em;
  border:1px solid #9e8aba !important; border-radius:6px;
  background:linear-gradient(135deg,#342e53,#403b67) !important;
  color:#ffe6a4 !important;
  font:500 .92em/1.45 ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:inset 0 1px #ffffff12 !important;
  overflow-wrap:anywhere; box-decoration-break:clone; -webkit-box-decoration-break:clone;
}
/* Fenced code blocks use a dark surface and local Shiki tokens; surrounding message colors stay unchanged. */
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block {
  --dsw-alias-markdown-code-block:#302a4e;
  --dsw-alias-markdown-code-block-banner:#3d365f;
  --dsw-alias-bg-base:#3d365f;
  --dsw-alias-label-primary:#ffe6a4;
  --dsw-alias-label-secondary:#f3d992;
  --dsw-alias-label-tertiary:#cbbbea;
  --dsl-code-block-background:#302a4e;
  --dsl-code-block-banner-background-color:#3d365f;
  --dsl-code-block-border-radius:11px;
  --shiki-foreground:#ffe6a4;
  --shiki-background:#302a4e;
  --shiki-token-constant:#9feaff;
  --shiki-token-string:#bfe7b5;
  --shiki-token-comment:#bfb3d8;
  --shiki-token-keyword:#ffc1e4;
  --shiki-token-parameter:#ffdaa0;
  --shiki-token-function:#dac5ff;
  --shiki-token-string-expression:#c5e6a4;
  --shiki-token-punctuation:#f3d992;
  --shiki-token-link:#9feaff;
  background:var(--dsl-code-block-background) !important;
  color:var(--shiki-foreground);
  border:1px solid #bca36e; border-radius:12px;
  box-shadow:inset 0 1px #ffffff0d;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block :where(*) {
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] {
  background:var(--dsl-code-block-banner-background-color) !important;
  color:#ffe6a4; border-bottom:1px solid #bca36e55;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] :where(:not(svg):not(path)) {
  color:#ffe6a4 !important; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] button,
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] button :where(:not(svg):not(path)) {
  font-size:inherit !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] button:hover {
  background:#625686 !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block pre {
  background:var(--dsl-code-block-background) !important;
  color:var(--shiki-foreground) !important;
}
/* End fenced code blocks. */
/* Keep all file-related surfaces coordinated: message attachments, pending composer files, and Markdown file references. */
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_markdown_"] button[class*="_fileMention_"] {
  color:var(--gem-chat-link,#9feaff) !important; -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
  background:linear-gradient(135deg,#463c64,#363052) !important;
  border:1px solid #b99d70 !important; border-radius:7px;
  box-shadow:inset 0 1px #ffffff12 !important;
  text-decoration:underline; text-decoration-color:color-mix(in srgb,var(--gem-chat-link,#9feaff) 76%,transparent); text-underline-offset:.16em;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_markdown_"] button[class*="_fileMention_"]:hover {
  background:#50466e !important; border-color:#f0d694 !important;
  color:var(--gem-chat-link,#9feaff) !important; -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_markdown_"] button[class*="_fileMention_"] svg {
  color:var(--gem-chat-link,#9feaff) !important; stroke:currentColor;
}
/* Sent attachment cards and pending upload cards use different DSH components. */
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_fileCard"],
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] {
  --dsw-specific-input-major:#383153;
  --dsw-alias-border-l2:#b99d70;
  background:linear-gradient(135deg,#463c64,#363052) !important;
  color:#f9e8b0 !important;
  border:1px solid #b99d70 !important;
  box-shadow:inset 0 1px #ffffff12 !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_fileCard"]:hover,
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"]:hover {
  background:linear-gradient(135deg,#50466e,#3c345a) !important;
  border-color:#f0d694 !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_fileCard"] [class*="_fileName"],
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_name"] {
  color:var(--gem-chat-link,#9feaff) !important; -webkit-text-fill-color:var(--gem-chat-link,#9feaff) !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_fileCard"] [class*="_fileMeta"],
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_meta"] {
  color:#cbbbea !important; -webkit-text-fill-color:#cbbbea !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} [class*="_fileCard"] svg,
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_icon"] {
  color:#f3d992 !important;
}
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_remove"] {
  background:#5e527e !important; color:#fff1c6 !important;
  border:1px solid #b99d70 !important;
}
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_remove"]:hover {
  background:#b99d70 !important; color:#292443 !important;
}
html[data-dsh-gemini-theme="active"] ${S.composer} [class*="_q_card"] [class*="_q_metaFailed"] {
  color:#ffb6c8 !important; -webkit-text-fill-color:#ffb6c8 !important;
}
/* Reset placeholder layers separately; old-chat DSH adds inherited gold stroke/shadow. */
html[data-dsh-gemini-theme="active"] ${S.composer} :is([data-composer-input="true"],[contenteditable="true"],[data-placeholder],[class*="placeholder" i]),
html[data-dsh-gemini-theme="active"] ${S.composer} :is([data-composer-input="true"],[contenteditable="true"],[data-placeholder],[class*="placeholder" i])::before,
html[data-dsh-gemini-theme="active"] ${S.composer} :is([data-composer-input="true"],[contenteditable="true"],[data-placeholder],[class*="placeholder" i])::after,
html[data-dsh-gemini-theme="active"] ${S.composer} :is([data-composer-input="true"],[contenteditable="true"],[data-placeholder],[class*="placeholder" i]) :where(textarea,input)::placeholder {
  color:#7651a8 !important; -webkit-text-fill-color:#7651a8 !important; caret-color:#7651a8; opacity:1 !important;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif !important;
  font-size:14px !important; font-weight:500 !important; line-height:24px !important; letter-spacing:normal !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
/* Keep the conversation title clear of the gold corner fan. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} .ST7X_W_header .ST7X_W_titleRow {
  padding-inline-start:max(0px,calc(var(--dsh-frame-leading-clearance,0px) - 40px)) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} .ST7X_W_header .ST7X_W_crumbCurrent {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-weight:600 !important;
}
/* Use the same bright gold for the preset label; do not touch message content. */
html[data-dsh-gemini-theme="active"] ${S.conversation} .ST7X_W_header :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i]),
html[data-dsh-gemini-theme="active"] ${S.composer} :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i]) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-weight:600 !important;
}
html[data-dsh-gemini-theme="active"] ${S.conversation} .ST7X_W_header :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i]) :where(:not(svg):not(path)),
html[data-dsh-gemini-theme="active"] ${S.composer} :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i]) :where(:not(svg):not(path)) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
}
/* Purple tab labels were too dim against the illustration; keep them bright and distinct. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} .ST7X_W_tabs .ST7X_W_tab {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [role="tab"][aria-selected="true"] {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  border-color:#d8bd7a !important; box-shadow:inset 0 -2px #d8bd7a;
}
/* DSH renders the session preset as a labeled span, and tabs carry an active class. */
html[data-dsh-gemini-theme="active"] .ST7X_W_root ._3li69W_label {
  color:#ffdf73 !important; -webkit-text-fill-color:#ffdf73 !important;
  -webkit-text-stroke:.3px #40304f !important; text-shadow:0 1px 2px #30234f,0 0 4px #3c2d57 !important; font-weight:650 !important;
  opacity:1 !important;
}
html[data-dsh-gemini-theme="active"] .ST7X_W_root ._3li69W_label svg {
  color:#ffdf73 !important; opacity:1 !important;
}
html[data-dsh-gemini-theme="active"] .ST7X_W_root .ST7X_W_tabs .ST7X_W_tab,
html[data-dsh-gemini-theme="active"] .ST7X_W_root .ST7X_W_tabs [role="tab"] {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important;
}
html[data-dsh-gemini-theme="active"] .ST7X_W_root .ST7X_W_tabs .ST7X_W_tabActive,
html[data-dsh-gemini-theme="active"] .ST7X_W_root .ST7X_W_tabs [role="tab"][aria-selected="true"] {
  color:#fff1c6 !important; -webkit-text-fill-color:#fff1c6 !important;
}
html[data-dsh-gemini-theme="active"] .ST7X_W_root .ST7X_W_tabs :is(.ST7X_W_tabActive,[role="tab"][aria-selected="true"])::after {
  background:#d8bd7a !important;
}
/* Status, timestamps and usage counters were inheriting pale gold outlines on the light artwork. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :is(time,[class*="status" i],[class*="meta" i],[class*="usage" i],[class*="token" i],[class*="context" i],[class*="stat" i],[class*="complete" i],[class*="duration" i]),
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :is(time,[class*="status" i],[class*="meta" i],[class*="usage" i],[class*="token" i],[class*="context" i],[class*="stat" i],[class*="complete" i],[class*="duration" i]) :where(:not(svg):not(path)) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-weight:600;
}
/* DSH session statistics and message footer controls sit outside the conversation root. */
html[data-dsh-gemini-theme="active"] :is(.ppByMG_actions,.ppByMG_endInfo,.ppByMG_timeStart,.sZXytW_root,.sZXytW_trigger,.sZXytW_label,.OpZ85W_root,.OpZ85W_anchor,.OpZ85W_pill,.y0jqnG_root,.y0jqnG_trigger) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-size:15px !important; font-weight:600 !important;
}
html[data-dsh-gemini-theme="active"] :is(.ppByMG_actions,.ppByMG_endInfo,.ppByMG_timeStart,.sZXytW_root,.sZXytW_trigger,.sZXytW_label,.OpZ85W_root,.OpZ85W_anchor,.OpZ85W_pill,.y0jqnG_root,.y0jqnG_trigger) :where(:not(svg):not(path)) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-size:15px !important; font-weight:600 !important;
}
/* The completion row wraps assistant output; style only its status button, never the row. */
html[data-dsh-gemini-theme="active"] .icaHSq_flowItem button,
html[data-dsh-gemini-theme="active"] .icaHSq_flowItem button :where(:not(svg):not(path)) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-size:15px !important; font-weight:600 !important;
}
@media (min-width:1100px) and (max-width:1499px) {
  html[data-dsh-gemini-scene="hero"] #${ID.art}.is-original { width:35%; }
  html[data-dsh-gemini-scene="hero"] #${ID.companion} { width:21%; height:50%; }
  /* Keep the hero title and composer centered as one group; leave the art untouched. */
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] ${S.conversation} ${S.heroComposer} {
    transform:translateY(calc(0px - clamp(48px,6.5vh,64px)));
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] ${S.conversation} ${S.heroComposer} {
    width:min(52%,640px); max-width:640px; margin-left:36%; margin-right:auto;
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] ${S.heroTitle} {
    color:#684c17; text-shadow:0 1px 0 #fff8e7,0 0 12px #fff8e788;
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] ${S.heroTitle} * { color:inherit; }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] ${S.heroTitle} :is(.Hqq-bq_headline,.bocITq_headline) {
    justify-content:center; align-items:center; text-align:center;
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="hero"] :is(.Hqq-bq_previewBadge,.bocITq_previewBadge) {
    background:linear-gradient(145deg,#fff9e9,#f3e8cd); color:#795a20; border-color:#c8a669;
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"][data-dsh-gemini-scene="hero"] ${S.heroTitle},
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"][data-dsh-gemini-scene="hero"] ${S.heroTitle} * {
    color:#f1d997; text-shadow:0 1px 2px #17132dcc;
  }
  html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"][data-dsh-gemini-scene="hero"] :is(.Hqq-bq_previewBadge,.bocITq_previewBadge) {
    background:#3a3158; color:#f1d997; border-color:#ae9160;
  }
  html[data-dsh-gemini-theme="active"] ${S.heroComposer} ${S.composer} {
    box-sizing:border-box; width:100%; max-width:100%;
  }
}
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_stack,.bocITq_stack) { max-width:none; }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_headline,.bocITq_headline) { justify-content:center; gap:10px; color:var(--gem-text); }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_titleGroup,.bocITq_titleGroup) { align-items:center; gap:9px; }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_titleGroup,.bocITq_titleGroup) :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i]) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
  -webkit-text-stroke:.25px #47385f !important; text-shadow:0 1px 2px #30234f !important; font-weight:600 !important;
}
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_previewBadge,.bocITq_previewBadge) {
  align-self:center; margin:0; padding:2px 8px; line-height:18px;
  background:var(--gem-card); color:var(--gem-muted); border:1px solid var(--gem-line);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="other"] ${S.main} {
  background:radial-gradient(ellipse at 90% 0%,color-mix(in srgb,var(--gem-accent) 15%,transparent),transparent 55%),
    linear-gradient(135deg,var(--gem-app),var(--gem-card));
  color:var(--gem-text); box-shadow:inset 0 0 0 1px var(--gem-gold);
}
/* Confine the catalog palette to the plugin page; settings use their own coordinated modal palette. */
html[data-dsh-gemini-theme="active"] ${S.main}:has(:is(.fO69Vq_page,.ZVcBiW_page)) {
  --dsw-alias-bg-base:#30305d; --dsw-alias-bg-layer-1:#3b3b70;
  --dsw-alias-bg-layer-2:#3b3b70; --dsw-alias-bg-layer-3:#36315e;
  --dsw-alias-label-primary:#f9e8b0; --dsw-alias-label-secondary:#e6d8b2;
  --dsw-alias-label-tertiary:#d1c29e; --dsw-alias-brand-text:#f9e8b0;
  --dsw-alias-label-primary-foreground:#fff3cd; --dsw-alias-brand-primary:#7461ad;
  --dsw-alias-switch-thumb:#e8d8b6; --dsw-alias-button-primary-fill:#6052b2;
  --dsw-alias-button-primary-hover:#7062c0;
  --dsw-alias-border-l1:#bca46f; --dsw-alias-border-l2:#746b88;
  color:#f5e8c4 !important;
  background:radial-gradient(ellipse at 90% 0%,#7566c533,transparent 52%),
    linear-gradient(135deg,#3d4480,#2b2854 72%,#36315f) !important;
  box-shadow:inset 0 0 0 1px #c8a669;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) {
  --dsw-alias-bg-base:#30305d; --dsw-alias-bg-layer-1:#3b3b70;
  --dsw-alias-bg-layer-2:#43477e; --dsw-alias-bg-layer-3:#36315e;
  --dsw-alias-bg-module-platform:#32315e;
  --dsw-alias-label-primary:#f9e8b0; --dsw-alias-label-secondary:#e6d8b2;
  --dsw-alias-label-tertiary:#d1c29e; --dsw-alias-label-primary-bluish:#62dce7;
  --dsw-alias-brand-text:#f9e8b0; --dsw-alias-border-l1:#bca46f;
  --dsw-alias-border-l2:#746b88; --dsw-alias-interactive-bg-hover:#514b8d;
  --dsw-alias-label-primary-foreground:#fff3cd; --dsw-alias-brand-primary:#7461ad;
  --dsw-alias-switch-thumb:#e8d8b6; --dsw-alias-button-primary-fill:#6052b2;
  --dsw-alias-button-primary-hover:#7062c0;
  background:radial-gradient(ellipse at 90% 0%,#7566c533,transparent 52%),
    linear-gradient(135deg,#3d4480,#2b2854 72%,#36315f) !important;
  color:#f5e8c4;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_pageIntro,.ZVcBiW_pageIntro) { border-bottom:1px solid #bca46f; padding-bottom:18px; }
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_pageIntro,.ZVcBiW_pageIntro) :is(button,[role="button"]) {
  color:#fff3cd !important; -webkit-text-fill-color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) {
  --dsw-alias-label-primary-foreground:#fff3cd !important;
  --dsw-alias-switch-thumb:#e8d8b6 !important;
  background:#5b5284 !important; border:1px solid #bca46f !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) :is(
  .switch[aria-checked="true"],:is(.switch,[class*="_switch_"],[class$="_switch"])[aria-checked="true"],[role="switch"][aria-checked="true"],
  .switch[data-state="checked"],:is(.switch,[class*="_switch_"],[class$="_switch"])[data-state="checked"],[role="switch"][data-state="checked"]
) { background:#7461ad !important; }
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) :is(.thumb,:is(.thumb,[class*="_thumb_"],[class$="_thumb"])) {
  background:#fff3cd !important; border:1px solid #c8a669 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_groupHead,.ZVcBiW_groupHead) { color:#f1d997; }
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) {
  background:linear-gradient(145deg,#41427a,#34315d 76%) !important;
  border:1px solid #bca46f; border-radius:14px;
  box-shadow:0 6px 18px #11102e55,inset 0 0 0 1px #ffffff0a; padding:16px;
  color:#e9dfc4;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) :where(:not(svg):not(path)) {
  color:#e9dfc4 !important; -webkit-text-fill-color:#e9dfc4 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) :is(h1,h2,h3,strong,[class*="title" i]) :where(:not(svg):not(path)) {
  color:#ffe7a5 !important; -webkit-text-fill-color:#ffe7a5 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:#62dce7 !important; -webkit-text-fill-color:#62dce7 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) :is(:is(.badge,[class*="_badge_"],[class$="_badge"]),:is(.tag,[class*="_tag_"],[class$="_tag"]),:is(.pill,[class*="_pill_"],[class$="_pill"])) {
  background:#5a5084 !important; border:1px solid #a99268; border-radius:999px;
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card):hover {
  border-color:#ffe7a5; box-shadow:0 8px 22px #11102e77,inset 0 0 0 1px #d7ba8033;
}
html[data-dsh-gemini-theme="active"] :is(.wCInkW_nav,.Dws9Sa_nav) {
  color:#f9e8b0; background:linear-gradient(160deg,#5b65a4,#42447c 56%,#36315e);
  border-right:1px solid #c8a669;
}
html[data-dsh-gemini-theme="active"] :is(.wCInkW_navCell,.Dws9Sa_navCell) { color:#f9e8b0; }
html[data-dsh-gemini-theme="active"] :is(.wCInkW_navCell,.Dws9Sa_navCell):is(.wCInkW_active,.Dws9Sa_active) {
  background:linear-gradient(90deg,#65569d,#49447e); color:#fff3cd;
  box-shadow:inset 3px 0 #e4c67c,0 3px 10px #17153744;
}
html[data-dsh-gemini-theme="active"] :where(._surface_ri079_1,:is(.Z9Jnlq_menu,.tki__G_menu),[role="menu"]) {
  background:var(--gem-card) !important; color:var(--gem-text); border:1px solid var(--gem-line);
  border-radius:12px; box-shadow:0 10px 32px #21173540; opacity:1;
  backdrop-filter:none;
}
html[data-dsh-gemini-theme="active"] :is(.Z9Jnlq_viewport,.tki__G_viewport) { background:var(--gem-card); }
html[data-dsh-gemini-theme="active"] :where(:is(.Z9Jnlq_item,.tki__G_item),[role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"]) { color:var(--gem-text); }
html[data-dsh-gemini-theme="active"] :where(:is(.Z9Jnlq_item,.tki__G_item),[role="menuitem"]):hover,
html[data-dsh-gemini-theme="active"] :where(:is(.Z9Jnlq_active,.tki__G_active),._selected_4ub78_216) { background:var(--dsw-alias-interactive-bg-hover); }
/* Match sidebar history rows in workspace-folder menus: dark violet with gold text. */
html[data-dsh-gemini-theme="active"] :is([role="menu"],[role="listbox"]) :is([role="menuitem"],[role="option"],._item_4ub78_90):is(:hover,._selected_4ub78_216,[aria-selected="true"],[aria-checked="true"]) {
  background:linear-gradient(90deg,#514b8d,#3e3b7a) !important;
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] :is([role="menu"],[role="listbox"]) :is([role="menuitem"],[role="option"],._item_4ub78_90):is(:hover,._selected_4ub78_216,[aria-selected="true"],[aria-checked="true"]) :where(:not(svg):not(path)) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) :where(input:not([type="checkbox"]):not([type="range"]),textarea,select) {
  background:#38345f !important; color:#f9e8b0 !important; border-color:#bca46f !important;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_page,.ZVcBiW_page) :is(a,[href],[role="link"]) {
  color:#62dce7 !important; -webkit-text-fill-color:#62dce7 !important;
}
`)

// DSH Light selects internal tone="dark". Keep the established tone="light" skin untouched.
// Dedicated light-skin colors and scene; character assets and independent controls stay intact.
const LIGHT_SETTING = 'html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"]'
const CSS_LIGHT_SETTING = withBuildAliases(`
${LIGHT_SETTING} {
  --gem-app:#2b2447; --gem-side:#40365d; --gem-card:#3a3152;
  --gem-text:#f7f2ff; --gem-muted:#c3b9df; --gem-accent:#bba9ff;
  --gem-on-accent:#1c1839; --gem-line:#65568d; --gem-gold:#d5b987; --gem-link:#a7f0f3;
  --gem-control-line:#8a79a8;
  --gem-input-shell:#f3e9fb; --gem-input-bg:#7651a8; --gem-input-text:#fff8e8;
  --gem-input-label:#514078; --gem-input-muted:#655774;
  color-scheme:dark;
}
${LIGHT_SETTING}[data-dsh-gemini-page="conversation"] ${S.frame} { background:var(--gem-app); }
/* White celestial architecture and midnight stars belong exclusively to DSH Light. */
${LIGHT_SETTING} ${S.conversation} {
  background-image:url("${LIGHT_SCENE_DATA_URL}");
}
/* Opaque pale surfaces and navy outlines stay readable even over white architecture. */
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [class$="_userRow"] [class$="_bubble"],
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"],
${LIGHT_SETTING} ${S.composer} {
  border-color:#766185 !important;
  box-shadow:0 0 0 1px #17102d99,0 8px 24px #09071f66,inset 0 1px #fff9 !important;
}

${LIGHT_SETTING} ${S.sidebar} {
  background:linear-gradient(160deg,#685482,#59466f 65%,#4f3e65) !important;
}
${LIGHT_SETTING} ${S.sidebar} ${S.sidebarFade} {
  background-image:linear-gradient(transparent,#59466f) !important;
}
/* Retain the dark scene art; tone-scoped rules below recolor its working surfaces. */
${LIGHT_SETTING} ${S.composer} {
  --dsw-alias-label-primary:var(--gem-input-label);
  --dsw-alias-label-secondary:var(--gem-input-muted);
  --dsw-alias-label-tertiary:var(--gem-input-muted);
  --dsw-alias-label-caption:var(--gem-input-muted);
  background:var(--gem-input-shell); color:var(--gem-input-label);
  border-color:#c9aa74;
  -webkit-text-stroke:0 transparent; text-shadow:none;
}
${LIGHT_SETTING} ${S.composer}::before { background:var(--gem-input-shell); color:#8a651c; }
${LIGHT_SETTING} ${S.composer} :where(textarea,[contenteditable="true"]),
${LIGHT_SETTING} ${S.composer} [data-composer-input="true"] {
  background:var(--gem-input-bg) !important;
  color:var(--gem-input-text) !important; -webkit-text-fill-color:var(--gem-input-text) !important;
  caret-color:var(--gem-input-text);
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING} ${S.composer} [data-composer-input="true"] * {
  color:var(--gem-input-text) !important; -webkit-text-fill-color:var(--gem-input-text) !important;
  caret-color:var(--gem-input-text);
}
${LIGHT_SETTING} ${S.composer} :is(textarea,[data-composer-input="true"])::placeholder,
${LIGHT_SETTING} ${S.composer} [data-composer-input="true"] :where([data-placeholder])::before,
${LIGHT_SETTING} ${S.composer} [data-composer-input="true"][data-placeholder]::before {
  color:var(--gem-input-text) !important; -webkit-text-fill-color:var(--gem-input-text) !important;
}
${LIGHT_SETTING} ${S.composer} :is(button[aria-label^="选择模型"],button[aria-label^="访问模式"]) {
  background:#fff8e8; color:var(--gem-input-label); border-color:var(--gem-control-line);
}
${LIGHT_SETTING} ${S.composer} :is(button[aria-label^="选择模型"],button[aria-label^="访问模式"]) :where(:not(svg):not(path)) {
  color:var(--gem-input-label); -webkit-text-fill-color:var(--gem-input-label);
}
${LIGHT_SETTING} ${S.composer} :is(button[aria-label^="选择模型"],button[aria-label^="访问模式"]):hover {
  background:#e6d9f4; border-color:#7651a8;
}
/* Preset labels sit on the pale composer, unlike gold labels in the transcript/header. */
${LIGHT_SETTING} ${S.composer} :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i],._3li69W_label),
${LIGHT_SETTING} ${S.composer} :is(button[aria-label="标准模式"],[title*="Agent 预设" i],[aria-label*="Agent 预设" i],._3li69W_label) :where(:not(svg):not(path)),
${LIGHT_SETTING} ${S.composer} ._3li69W_label svg {
  color:var(--gem-input-label) !important; -webkit-text-fill-color:var(--gem-input-label) !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING} ${S.composer} :where(button,input,textarea,[contenteditable="true"]):focus-visible {
  outline-color:#6052b2;
}
${LIGHT_SETTING} ${S.composer} :where(textarea,[contenteditable="true"]):focus-visible { outline-color:#fff8e8; }
${LIGHT_SETTING} button[aria-label="发送消息"] { background:#6052b2; color:#fff8e8; }
/* Keep the prior pale settings controls; only their foreground must be dark on the new dark-panel skin. */
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) {
  --gem-settings-control:#e6ddf2;
  --dsw-alias-button-tool-bar-fill:var(--gem-settings-control) !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) button:not(.Dws9Sa_navCell):not(.wCInkW_navCell):not([role="switch"]):not([role="radio"]):not([aria-checked]):not(.FfBBxq_helpButton):not(.FfBBxq_iconButton),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :where(
  input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),textarea,select,[role="combobox"],[role="spinbutton"],
  :is(.input,[class*="_input_"],[class$="_input"]),:is(.fieldControl,[class*="_fieldControl_"],[class$="_fieldControl"])
),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(div,button):has(> input[type="number"]),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(div,button):has(> [role="spinbutton"]),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_stepper {
  color:#302744 !important; -webkit-text-fill-color:#302744 !important;
  background:var(--gem-settings-control) !important; border-color:var(--gem-control-line) !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(input,textarea)::placeholder {
  color:#655774 !important; -webkit-text-fill-color:#655774 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.DwKIAW_value,.DwKIAW_arrow) {
  color:#302744 !important; -webkit-text-fill-color:#302744 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_unit {
  color:#655774 !important; -webkit-text-fill-color:#655774 !important;
}
/* Restore selected/stepper-hover foreground after pale generic button rules; gold-purple switches remain unchanged. */
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) button:not(.Dws9Sa_navCell):not(.wCInkW_navCell):not([role="switch"]):not([role="radio"]):not([aria-checked]):not(.FfBBxq_helpButton):not(.FfBBxq_iconButton):is([aria-pressed="true"],[aria-selected="true"],[aria-current="page"],[data-state="on"],[data-selected="true"],[data-state="checked"]),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(
  button[aria-pressed="true"],button[aria-selected="true"],button[aria-current="page"],button[data-state="on"],
  button[data-selected="true"],[role="radio"][aria-checked="true"],[role="tab"][aria-selected="true"],
  [role="option"][aria-selected="true"],button[aria-checked="true"]:not([role="switch"]),button[data-state="checked"]:not([role="switch"])
),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .DwKIAW_arrow:hover:not(:disabled) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:var(--gem-on-accent) !important;
  background:var(--gem-accent) !important;
}
/* Settings links remain gold; the saturated top-up button needs its contrasting foreground. */
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"],
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) a[href*="top_up"] :where(:not(svg):not(path)) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:var(--gem-on-accent) !important;
}
${LIGHT_SETTING} :where([role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu) {
  background:var(--gem-card) !important; color:var(--gem-text); border-color:var(--gem-control-line);
}
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(a,[href],[role="link"]),
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:var(--gem-link) !important; -webkit-text-fill-color:var(--gem-link) !important;
}

/* DSH system-light skin: dark scene and character art remain behind pale work surfaces. */
${LIGHT_SETTING} {
  --gem-app:#2b2447; --gem-side:#40365d; --gem-card:#f3e9fb;
  --gem-text:#34284a; --gem-muted:#655774; --gem-accent:#7655a5;
  --gem-on-accent:#fff8e8; --gem-line:#c8b6d9; --gem-gold:#99712f;
  --gem-link:#006b78; --gem-chat-link:#006b78; --gem-control-line:#b8a5cc;
  --gem-input-shell:#f3e9fb; --gem-input-bg:#f3e9fb; --gem-input-text:#34284a;
  --gem-input-label:#514078; --gem-input-muted:#655774;
  --dsw-alias-bg-layer-1:#f3e9fb; --dsw-alias-bg-layer-2:#eee4f7; --dsw-alias-bg-layer-3:#e9def3;
  --dsw-alias-label-primary:#34284a; --dsw-alias-label-secondary:#514461;
  --dsw-alias-label-tertiary:#655774; --dsw-alias-label-caption:#655774;
  --dsw-alias-label-primary-bluish:#006b78; --dsw-alias-brand-text:#514078;
  --dsw-alias-border-l1:#c8b6d9; --dsw-alias-border-l2:#c8b6d9;
  --dsw-alias-switch-thumb:#99712f; color-scheme:light;
}
/* User and assistant messages become pale, while the illustrated chat canvas stays dark. */
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} {
  --gem-chat-body:#34284a; --gem-chat-secondary:#514461; --gem-chat-caption:#655774;
  --gem-chat-heading:#79591b; --gem-chat-link:#006b78; --gem-chat-link-visited:#006b78; --gem-chat-link-hover:#00545e;
  --dsw-alias-label-primary:#34284a; --dsw-alias-label-secondary:#514461;
  --dsw-alias-label-tertiary:#655774; --dsw-alias-label-caption:#655774;
  --dsw-alias-label-primary-bluish:#006b78; --dsw-alias-brand-text:#006b78;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [class$="_userRow"] [class$="_bubble"],
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] {
  background:#f3e9fb !important; color:#34284a !important;
  border-color:#766185 !important; box-shadow:0 0 0 1px #17102d99,0 8px 24px #09071f66,inset 0 1px #fff9 !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [class$="_userRow"] [class$="_bubble"] :where(*),
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] :where(p,li,blockquote,dd,dt,td,th,small,time,figcaption,h1,h2,h3,h4,strong,b,em,del,summary) {
  color:#34284a !important; -webkit-text-fill-color:#34284a !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] :where(small,time,figcaption) {
  color:#655774 !important; -webkit-text-fill-color:#655774 !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] :where(h1,h2,h3,h4,strong,b) {
  color:#79591b !important; -webkit-text-fill-color:#79591b !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} :is(a[href],[role="link"],[class*="link" i],[data-link],[class*="_fileMention_" i],[class*="_fileName" i],[class*="_q_name" i]),
${LIGHT_SETTING}[data-dsh-gemini-scene="chat"] ${S.conversation} :is(a[href],[role="link"],[class*="link" i],[data-link],[class*="_fileMention_" i],[class*="_fileName" i],[class*="_q_name" i]) :where(:not(svg):not(path)) {
  color:#006b78 !important; -webkit-text-fill-color:#006b78 !important; text-decoration-color:#006b78 !important;
}
${LIGHT_SETTING} ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] code:not(pre code) {
  background:#e9def3 !important; color:#443354 !important; border-color:#c8b6d9 !important; box-shadow:none !important;
}
${LIGHT_SETTING} ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block {
  --dsw-alias-markdown-code-block:#eee4f7; --dsw-alias-markdown-code-block-banner:#e5d8ef;
  --dsw-alias-bg-base:#e5d8ef; --dsw-alias-label-primary:#34284a;
  --dsw-alias-label-secondary:#514461; --dsw-alias-label-tertiary:#655774;
  --dsl-code-block-background:#eee4f7; --dsl-code-block-banner-background-color:#e5d8ef;
  --shiki-foreground:#34284a; --shiki-background:#eee4f7;
  --shiki-token-constant:#006b78; --shiki-token-string:#386a3e; --shiki-token-comment:#655774;
  --shiki-token-keyword:#7b3d69; --shiki-token-parameter:#79591b; --shiki-token-function:#514078;
  --shiki-token-string-expression:#386a3e; --shiki-token-punctuation:#514461; --shiki-token-link:#006b78;
  background:#eee4f7 !important; color:#34284a !important; border:1px solid #c8b6d9 !important; box-shadow:none !important;
}
${LIGHT_SETTING} ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] {
  background:#e5d8ef !important; color:#514461 !important; border-bottom-color:#c8b6d9 !important;
}
${LIGHT_SETTING} ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] .md-code-block [data-code-block-banner] :where(:not(svg):not(path)) {
  color:#514461 !important; -webkit-text-fill-color:#514461 !important;
}
${LIGHT_SETTING} ${S.conversation} [class*="_fileCard"], ${LIGHT_SETTING} ${S.composer} [class*="_q_card"],
${LIGHT_SETTING} ${S.conversation} [class*="_markdown_"] button[class*="_fileMention_"] {
  --dsw-specific-input-major:#f3e9fb; --dsw-alias-border-l2:#c8b6d9;
  background:#f3e9fb !important; color:#34284a !important; border:1px solid #c8b6d9 !important; box-shadow:none !important;
}
${LIGHT_SETTING} ${S.conversation} [class*="_fileCard"] :where(:not(svg):not(path)),
${LIGHT_SETTING} ${S.composer} [class*="_q_card"] :where(:not(svg):not(path)) {
  color:#514461 !important; -webkit-text-fill-color:#514461 !important;
}
${LIGHT_SETTING} ${S.conversation} [class*="_fileCard"] [class*="_fileName"], ${LIGHT_SETTING} ${S.composer} [class*="_q_card"] [class*="_q_name"],
${LIGHT_SETTING} ${S.conversation} [class*="_markdown_"] button[class*="_fileMention_"] :where(:not(svg):not(path)) {
  color:#006b78 !important; -webkit-text-fill-color:#006b78 !important;
}
/* Sidebar rows turn into pale cards; only their surfaces/text change, not the sidebar art. */
${LIGHT_SETTING} ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow,.hIlkoa_projectRow,.jJkEga_projectRow,[role="treeitem"],._2H3hWW_panelRow,._3WPZCG_panelRow) {
  background:#f3e9fb !important; color:#34284a !important; -webkit-text-fill-color:#34284a !important;
  border:1px solid #c8b6d9 !important; box-shadow:inset 0 1px #fff9 !important;
}
${LIGHT_SETTING} ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow,.hIlkoa_projectRow,.jJkEga_projectRow,[role="treeitem"],._2H3hWW_panelRow,._3WPZCG_panelRow) :where(:not(svg):not(path):not(img)) {
  color:#34284a !important; -webkit-text-fill-color:#34284a !important; text-shadow:none !important;
}
${LIGHT_SETTING} ${S.sidebar} :is(.hIlkoa_sessionRow,.jJkEga_sessionRow,.hIlkoa_projectRow,.jJkEga_projectRow,[role="treeitem"],._2H3hWW_panelRow,._3WPZCG_panelRow):is(:hover,[aria-current="page"],._2H3hWW_panelActive,._3WPZCG_panelActive,.hIlkoa_selected,.jJkEga_selected) {
  background:#e8dcf3 !important; border-color:#ae9568 !important;
  box-shadow:inset 3px 0 #b28b45,0 2px 8px #0f0b2226 !important;
  color:#34284a !important; -webkit-text-fill-color:#34284a !important;
}
/* Modal, menu and plugin-catalog surfaces use the same light palette. */
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) {
  --dsw-alias-bg-base:#f3e9fb !important; --dsw-alias-bg-layer-1:#f3e9fb !important; --dsw-alias-bg-layer-2:#eee4f7 !important; --dsw-alias-bg-layer-3:#e9def3 !important;
  --dsw-alias-bg-module-platform:#e9def3 !important; --dsw-alias-label-primary:#34284a !important; --dsw-alias-label-secondary:#514461 !important;
  --dsw-alias-label-tertiary:#655774 !important; --dsw-alias-label-primary-bluish:#006b78 !important; --dsw-alias-brand-text:#514078 !important;
  --dsw-alias-border-l1:#c8b6d9 !important; --dsw-alias-border-l2:#c8b6d9 !important; background:#f3e9fb !important; color:#34284a !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_nav,.wCInkW_nav) { background:#e9def3 !important; color:#514078 !important; border-color:#c8b6d9 !important; }
${LIGHT_SETTING} :is(.Dws9Sa_nav,.wCInkW_nav) :where(:not(svg):not(path)) {
  color:#514078 !important; -webkit-text-fill-color:#514078 !important; text-shadow:none !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_nav,.wCInkW_nav) button {
  background:transparent !important; color:#514078 !important; -webkit-text-fill-color:#514078 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_navTitle,.wCInkW_navTitle) {
  color:#514078 !important; -webkit-text-fill-color:#514078 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_content,.wCInkW_content) { background:#f3e9fb !important; color:#34284a !important; }
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_card {
  background:#f3e9fb !important; color:#34284a !important; border-color:#c8b6d9 !important; box-shadow:0 3px 12px #20152b18 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) .FfBBxq_card :where(:not(svg):not(path)) {
  color:#514461 !important; -webkit-text-fill-color:#514461 !important; text-shadow:none !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.Dws9Sa_navCell,.wCInkW_navCell) {
  color:#514078 !important; -webkit-text-fill-color:#514078 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.Dws9Sa_navCell,.wCInkW_navCell):is(.Dws9Sa_active,.wCInkW_active) {
  background:#ded0eb !important; color:#34284a !important; -webkit-text-fill-color:#34284a !important; box-shadow:inset 3px 0 #b28b45 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) {
  --dsw-alias-label-primary-foreground:#34284a !important; --dsw-alias-switch-thumb:#99712f !important;
  background:#d8cbe7 !important; border-color:#b8a5cc !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch[aria-checked="true"],:is(.switch,[class*="_switch_"],[class$="_switch"])[aria-checked="true"],[role="switch"][aria-checked="true"],.switch[data-state="checked"],:is(.switch,[class*="_switch_"],[class$="_switch"])[data-state="checked"],[role="switch"][data-state="checked"]) {
  background:#7655a5 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) :is(.thumb,:is(.thumb,[class*="_thumb_"],[class$="_thumb"])) {
  background:#fff8e8 !important; border:1px solid #99712f !important; box-shadow:0 1px 3px #20152b33 !important;
}
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"],button[class*="link" i]),
${LIGHT_SETTING} :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"]) :is(a,[href],[role="link"],button[class*="link" i]) :where(:not(svg):not(path)),
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(a,[href],[role="link"]), ${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:#006b78 !important; -webkit-text-fill-color:#006b78 !important;
}
${LIGHT_SETTING} :where([role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu) {
  background:#f3e9fb !important; color:#34284a !important; -webkit-text-fill-color:#34284a !important; border-color:#c8b6d9 !important;
}
${LIGHT_SETTING} :where([role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu) :where(:not(svg):not(path)) {
  color:#34284a !important; -webkit-text-fill-color:#34284a !important; text-shadow:none !important;
}
${LIGHT_SETTING} :where([role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu) :is(a,[href],[role="link"]) :where(:not(svg):not(path)) {
  color:#006b78 !important; -webkit-text-fill-color:#006b78 !important;
}
${LIGHT_SETTING} :where([role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"],[role="option"],.Z9Jnlq_item,.tki__G_item) {
  color:#34284a !important; -webkit-text-fill-color:#34284a !important;
}
${LIGHT_SETTING} :where([role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"],[role="option"],.Z9Jnlq_item,.tki__G_item):is(:hover,[aria-selected="true"],[aria-checked="true"],._selected_4ub78_216) {
  background:#e8dcf3 !important; color:#34284a !important; -webkit-text-fill-color:#34284a !important;
}
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) {
  --dsw-alias-bg-base:#352e54; --dsw-alias-bg-layer-1:#f3e9fb; --dsw-alias-bg-layer-2:#eee4f7; --dsw-alias-bg-layer-3:#e9def3;
  --dsw-alias-label-primary:#34284a; --dsw-alias-label-secondary:#514461; --dsw-alias-label-tertiary:#655774;
  --dsw-alias-label-primary-bluish:#006b78; --dsw-alias-brand-text:#514078;
}
${LIGHT_SETTING} :is(.fO69Vq_card,.ZVcBiW_card) {
  background:#f3e9fb !important; color:#34284a !important; border-color:#c8b6d9 !important; box-shadow:0 5px 16px #0c0a2338,inset 0 1px #fff9 !important;
}
${LIGHT_SETTING} :is(.fO69Vq_card,.ZVcBiW_card) :where(:not(svg):not(path)) {
  color:#514461 !important; -webkit-text-fill-color:#514461 !important; text-shadow:none !important;
}
${LIGHT_SETTING} :is(.fO69Vq_card,.ZVcBiW_card) :is(h1,h2,h3,strong,[class*="title" i]) :where(:not(svg):not(path)) {
  color:#79591b !important; -webkit-text-fill-color:#79591b !important;
}
${LIGHT_SETTING} :is(.fO69Vq_card,.ZVcBiW_card) :is(a,[href],[role="link"],[class*="link" i]) :where(:not(svg):not(path)) {
  color:#006b78 !important; -webkit-text-fill-color:#006b78 !important;
}
${LIGHT_SETTING} :is(.fO69Vq_card,.ZVcBiW_card) :is(:is(.badge,[class*="_badge_"],[class$="_badge"]),:is(.tag,[class*="_tag_"],[class$="_tag"]),:is(.pill,[class*="_pill_"],[class$="_pill"])) {
  background:#e8dcf3 !important; border-color:#c8b6d9 !important; color:#514078 !important; -webkit-text-fill-color:#514078 !important;
}
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :where(input:not([type="checkbox"]):not([type="range"]),textarea,select) {
  background:#f3e9fb !important; color:#34284a !important; border-color:#b8a5cc !important;
}
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) {
  background:#d8cbe7 !important; border-color:#b8a5cc !important; --dsw-alias-switch-thumb:#99712f !important;
}
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(.switch[aria-checked="true"],:is(.switch,[class*="_switch_"],[class$="_switch"])[aria-checked="true"],[role="switch"][aria-checked="true"],.switch[data-state="checked"],:is(.switch,[class*="_switch_"],[class$="_switch"])[data-state="checked"],[role="switch"][data-state="checked"]) { background:#7655a5 !important; }
${LIGHT_SETTING} :is(.fO69Vq_page,.ZVcBiW_page) :is(.switch,:is(.switch,[class*="_switch_"],[class$="_switch"]),[role="switch"]) :is(.thumb,:is(.thumb,[class*="_thumb_"],[class$="_thumb"])) {
  background:#f3e9fb !important; border-color:#99712f !important;
}

`)


// Surface-bound palettes for native DSH task UI, independent of chat colors.
const QUESTION = ':is([data-question-key],[data-plan-review-key]) > [class$="_card"]'
// Native task/trajectory surfaces use stable data hooks plus the installed build's module roots.
const WORK_SURFACES = ':is([data-goal-bar],[data-approval-key] > [class*="_card"],[data-workflow-run],[data-sidebar-chat],.CxUija_page,.rcAy0q_bubble,.Ay96pa_card,.rkta1W_split,._0rqS-a_root,._33HxeW_root,.leLPTq_root,.yj_sLW_root,.Q2dzhW_ioCard,.-gRAhq_ioCard,.eOKmrq_instructionsCard,.HZhGha_card)'
const FLOAT_SURFACES = ':is([role="tooltip"],[class*="_bubble_"][data-side],[class*="_toast_"],._card_38jqx_9,[class*="_card_"]:has(:is(.jJkEga_hoverContent,.hIlkoa_hoverContent)),.Fw9vfq_menu,.cJtk3a_menu,.Z0Zh9q_menu,.xRgRca_card,.qISTrW_card,.kbRY4W_dialog)'
const DSH_TOOLTIP_CANDIDATES = ':is([role="tooltip"],[class*="_bubble_"][data-side],[class*="_toast_"],.jJkEga_hoverContent,.hIlkoa_hoverContent)'
const UPDATE_TOOLTIP = '[data-dsh-gemini-update-tooltip="true"]'
const READABLE_SURFACES = `:is(${QUESTION},${WORK_SURFACES},[data-changes-review],[data-changed-files],[data-presented-file],.T1tA0G_panel)`
const CSS_READABILITY = withBuildAliases(`
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] ${READABLE_SURFACES} {
  --gem-reader-bg:#342c4c; --gem-reader-ink:#f8edce; --gem-reader-muted:#d1c4df;
  --gem-reader-hover:#544a6b; --gem-reader-line:#aa9061;
  --gem-reader-link:#9feaff; --gem-reader-warning:#ffdf9e; --gem-reader-warning-bg:#4e3c2d;
  --gem-reader-selection:#605371; --gem-reader-selection-ink:#fff7e8;
  --gem-diff-add:#233f39; --gem-diff-del:#4b2e41; --gem-diff-plus:#bce8bd; --gem-diff-minus:#ffc7d3;
  --shiki-token-constant:#9feaff; --shiki-token-string:#bfe7b5; --shiki-token-comment:#c9bdd8;
  --shiki-token-keyword:#ffc1e4; --shiki-token-function:#dac5ff; --shiki-token-parameter:#ffdaa0;
  --shiki-token-string-expression:#bfe7b5; --shiki-token-punctuation:#f8edce; --shiki-token-link:#9feaff;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${READABLE_SURFACES} {
  --gem-reader-bg:#f3e9fb; --gem-reader-ink:#34284a; --gem-reader-muted:#655774;
  --gem-reader-hover:#e4d8ee; --gem-reader-line:#b9a3cb;
  --gem-reader-link:#006b78; --gem-reader-warning:#71501c; --gem-reader-warning-bg:#f6e8cd;
  --gem-reader-selection:#d9c5e9; --gem-reader-selection-ink:#34284a;
  --gem-diff-add:#e0eee4; --gem-diff-del:#f5dfe6; --gem-diff-plus:#275b38; --gem-diff-minus:#85344d;
  --shiki-token-constant:#006b78; --shiki-token-string:#386a3e; --shiki-token-comment:#655774;
  --shiki-token-keyword:#7b3d69; --shiki-token-function:#514078; --shiki-token-parameter:#79591b;
  --shiki-token-string-expression:#386a3e; --shiki-token-punctuation:#514461; --shiki-token-link:#006b78;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${READABLE_SURFACES} {
  background:var(--gem-reader-bg) !important; color:var(--gem-reader-ink) !important;
  --dsw-specific-input-major:var(--gem-reader-bg);
  --dsw-alias-label-primary:var(--gem-reader-ink);
  --dsw-alias-label-secondary:var(--gem-reader-muted);
  --dsw-alias-label-tertiary:var(--gem-reader-muted);
  --dsw-alias-label-caption:var(--gem-reader-muted);
  --dsw-alias-interactive-bg-hover:var(--gem-reader-hover);
  --dsw-alias-bg-layer-2:var(--gem-reader-hover);
  --dsw-alias-bg-base:var(--gem-reader-bg); --dsw-alias-bg-layer-1:var(--gem-reader-bg);
  --dsw-alias-file-diff-added-bg:var(--gem-diff-add); --dsw-alias-file-diff-added-gutter:var(--gem-diff-add);
  --dsw-alias-file-diff-deleted-bg:var(--gem-diff-del); --dsw-alias-file-diff-deleted-gutter:var(--gem-diff-del);
  --dsw-alias-file-diff-added-marker:var(--gem-diff-plus); --dsw-alias-file-diff-deleted-marker:var(--gem-diff-minus);
  --dsw-alias-state-success-primary:var(--gem-diff-plus); --dsw-alias-state-error-primary:var(--gem-diff-minus);
  --deliverable-fill:var(--gem-reader-bg); --deliverable-hover:var(--gem-reader-hover);
  --changes-fill:var(--gem-reader-bg); --changes-hover:var(--gem-reader-hover);
  --dsw-alias-border-l2:var(--gem-reader-line);
  --dsw-alias-border-l3:var(--gem-reader-line);
  --dsw-alias-button-primary-fill:#6b5488;
  --dsw-alias-label-primary-foreground:#fff8ec;
  --dsl-code-block-background:var(--gem-reader-bg);
  --shiki-background:var(--gem-reader-bg); --shiki-foreground:var(--gem-reader-ink);
  border:1px solid var(--gem-reader-line);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${READABLE_SURFACES} :where(*) {
  -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${QUESTION} :is([class$="_customRow"],[class$="_customBlock"]) {
  background:var(--gem-reader-hover) !important; color:var(--gem-reader-ink) !important;
  border:1px solid var(--gem-reader-line) !important;
  --dsw-alias-label-primary:var(--gem-reader-ink); --dsw-alias-label-caption:var(--gem-reader-muted);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${QUESTION} :is(textarea,input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),[contenteditable="true"]) {
  background:var(--gem-reader-hover) !important; color:var(--gem-reader-ink) !important;
  -webkit-text-fill-color:currentColor !important; caret-color:var(--gem-reader-ink);
  border-color:var(--gem-reader-line) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${QUESTION} :is(textarea,input)::placeholder {
  color:var(--gem-reader-muted) !important; opacity:1; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${QUESTION} button {
  -webkit-text-fill-color:currentColor !important;
}
`)

// Theme only DSH-owned sidebar chrome; documents, web pages, terminal output and image pixels keep their own presentation.
const SIDEBAR_SCOPE = 'html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is([data-dockkit-pane],[data-dockkit-float])'
const SIDEBAR_CHROME = `${SIDEBAR_SCOPE} :is([data-dockkit-strip],[data-dockkit-float-grip],[data-dockkit-tab],[data-sidebar-right-tab],.AhTMVW_header,.AhTMVW_changed,.AhTMVW_empty,.AhTMVW_statusLine,.AhTMVW_status,.AhTMVW_action,.AhTMVW_more,.AhTMVW_tool,.AhTMVW_viewerTool,.iGvAsW_toolbar,.iGvAsW_start,.iGvAsW_restore,.iGvAsW_failure,.iGvAsW_sandboxWarning,.iGvAsW_limit,[data-document-zoom-controls],[data-code-block-banner])`
const CSS_SIDEBARS = withBuildAliases(`
/* DSH-owned chrome uses its own palette. Tokens are attached to chrome nodes only,
   so author-controlled web pages, documents, images and terminal output inherit nothing. */
${SIDEBAR_CHROME.replace('[data-dsh-gemini-tone]', '[data-dsh-gemini-tone="light"]')},
${SIDEBAR_SCOPE.replace('[data-dsh-gemini-tone]', '[data-dsh-gemini-tone="light"]')} [data-files-root] {
  --gem-chrome-bg:#514b8d; --gem-chrome-ink:#fff3cd; --gem-chrome-muted:#e5dcf5;
  --gem-chrome-hover:#65569d; --gem-chrome-line:#d7ba80; --gem-chrome-link:#f1d997;
}
${SIDEBAR_CHROME.replace('[data-dsh-gemini-tone]', '[data-dsh-gemini-tone="dark"]')},
${SIDEBAR_SCOPE.replace('[data-dsh-gemini-tone]', '[data-dsh-gemini-tone="dark"]')} [data-files-root] {
  --gem-chrome-bg:#eee9f8; --gem-chrome-ink:#392766; --gem-chrome-muted:#715b99;
  --gem-chrome-hover:#ded5ed; --gem-chrome-line:#b8a6dc; --gem-chrome-link:#79591b;
}
${SIDEBAR_CHROME} {
  --dsw-alias-bg-layer-1:var(--gem-chrome-bg); --dsw-alias-bg-layer-2:var(--gem-chrome-hover);
  --dsw-alias-bg-layer-3:var(--gem-chrome-hover); --dsw-alias-bg-module-platform:var(--gem-chrome-hover);
  --dsw-alias-label-primary:var(--gem-chrome-ink); --dsw-alias-label-secondary:var(--gem-chrome-muted);
  --dsw-alias-label-tertiary:var(--gem-chrome-muted); --dsw-alias-label-caption:var(--gem-chrome-muted);
  --dsw-alias-label-quaternary:var(--gem-chrome-muted); --dsw-alias-label-dimmed:var(--gem-chrome-muted);
  --dsw-alias-link:var(--gem-chrome-link); --dsw-alias-label-primary-bluish:var(--gem-chrome-link);
  --dsw-alias-border-l1:var(--gem-chrome-line); --dsw-alias-border-l2:var(--gem-chrome-line);
  --dsw-alias-border-l3:var(--gem-chrome-line); --dsw-alias-border-l4:var(--gem-chrome-line);
  --dsw-alias-state-business-primary:var(--gem-chrome-link);
  --dsw-alias-button-tool-bar-fill:var(--gem-chrome-bg);
  --dsw-alias-button-tool-bar-hover:var(--gem-chrome-hover);
  --dsw-alias-scrollbar-bg-l2:var(--gem-chrome-line);
  --dsw-alias-scrollbar-hover-l2:var(--gem-chrome-muted);
  --dsh-scrollbar-thumb:var(--gem-chrome-line); --dsh-scrollbar-thumb-hover:var(--gem-chrome-muted);
  background:var(--gem-chrome-bg); color:var(--gem-chrome-ink); border-color:var(--gem-chrome-line);
}
${SIDEBAR_SCOPE} :is(.AhTMVW_header,.AhTMVW_changed,.iGvAsW_toolbar,[data-document-zoom-controls],[data-code-block-banner]) {
  background:var(--gem-chrome-bg) !important; color:var(--gem-chrome-ink) !important;
  border-color:var(--gem-chrome-line) !important;
}
${SIDEBAR_SCOPE} :is(.AhTMVW_header,.AhTMVW_changed,.iGvAsW_toolbar,[data-document-zoom-controls],[data-code-block-banner]) :where(button,span) {
  color:inherit; -webkit-text-fill-color:currentColor !important;
}
/* The workspace file tree is DSH interface; files opened inside the preview remain untouched. */
${SIDEBAR_SCOPE} [data-files-root] { background:var(--gem-chrome-bg) !important; color:var(--gem-chrome-ink) !important; }
${SIDEBAR_SCOPE} [data-files-row] { color:var(--gem-chrome-ink) !important; }
${SIDEBAR_SCOPE} [data-files-row]:is(:hover,:focus-visible,[aria-selected="true"]) {
  background:var(--gem-chrome-hover) !important; color:var(--gem-chrome-ink) !important;
}
${SIDEBAR_SCOPE} .iGvAsW_address {
  background:var(--gem-chrome-bg) !important; color:var(--gem-chrome-ink) !important;
  caret-color:var(--gem-chrome-ink); border-color:var(--gem-chrome-line) !important;
  -webkit-text-fill-color:currentColor !important;
}
${SIDEBAR_SCOPE} .iGvAsW_address::placeholder {
  color:var(--gem-chrome-muted) !important; -webkit-text-fill-color:currentColor !important; opacity:1;
}
${SIDEBAR_CHROME} :is(button,input,[tabindex]):focus-visible,
${SIDEBAR_SCOPE} [data-files-root] :is(button,input,[tabindex]):focus-visible {
  outline:2px solid var(--gem-chrome-link); outline-offset:-2px;
}
${SIDEBAR_SCOPE} :is([data-textpreview-failed],[data-textpreview-meta-failed],.iGvAsW_failure) {
  background:var(--gem-diff-del) !important; color:var(--gem-diff-minus) !important;
}
${SIDEBAR_SCOPE} :is(.iGvAsW_sandboxWarning,[data-office-font-warning]) {
  background:var(--gem-reader-warning-bg) !important; color:var(--gem-reader-warning) !important;
}
`)

const CSS_FILE_FINISH = withBuildAliases(`
/* Native caption bridge reads a direct-body probe. Its colors must match the painted title strip. */
html[data-dsh-gemini-theme="active"][data-windows-titlebar] body {
  --dsw-specific-sidebar-fill:#eee9f8 !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar][data-dsh-gemini-tone="light"] body {
  --dsw-specific-sidebar-fill:#514b8d !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar] ${S.frame}::before {
  background:var(--dsw-specific-sidebar-fill) !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar] body > span[style*="--dsw-specific-sidebar-fill"] {
  background-color:var(--dsw-specific-sidebar-fill) !important; color:#392766 !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar][data-dsh-gemini-tone="light"] body > span[style*="--dsw-specific-sidebar-fill"] {
  color:#fff3cd !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar] [data-windows-menu] {
  --dsw-alias-label-primary:#392766; --dsw-alias-label-secondary:#514078;
  --dsw-alias-interactive-bg-hover:#ded5ed;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar][data-dsh-gemini-tone="light"] [data-windows-menu] {
  --dsw-alias-label-primary:#fff3cd; --dsw-alias-label-secondary:#e5dcf5;
  --dsw-alias-interactive-bg-hover:#65569d;
}
/* Keep the complete file workspace on one palette, including tab strips and review headers. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is([data-dockkit-pane],[data-dockkit-float]) :is([data-dockkit-strip],[data-dockkit-float-grip],[data-dockkit-tab]) {
  background:var(--gem-chrome-bg) !important; color:var(--gem-chrome-ink) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] [data-dockkit-tab][aria-selected="true"] {
  background:var(--gem-chrome-hover) !important; color:var(--gem-chrome-ink) !important;
  box-shadow:inset 0 -2px var(--gem-chrome-line);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is([data-changed-files],[data-presented-file]) {
  background:var(--gem-reader-bg) !important; color:var(--gem-reader-ink) !important;
  --deliverable-fill:var(--gem-reader-bg) !important; --deliverable-hover:var(--gem-reader-hover) !important;
  --changes-fill:var(--gem-reader-bg) !important; --changes-hover:var(--gem-reader-hover) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.conversation} :is([data-changed-files],[data-presented-file]) :is([class$="_title"],[class$="_fileName"],[class$="_description"],[data-presented-description]) {
  color:var(--gem-reader-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.conversation} [data-presented-file] [class$="_fileName"] {
  font-weight:600; color:var(--gem-reader-ink) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is([data-changes-review],[data-changed-files]) :is([data-diff-note],[data-diff-hunk-header],[data-changes-preview-path]) {
  color:var(--gem-reader-muted) !important; -webkit-text-fill-color:currentColor !important;
}
`)

// Fill semantic-token gaps instead of painting every descendant: text keeps its status/ANSI/syntax meaning.
const COMPLETION_SCOPE = `html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(${S.frame},${READABLE_SURFACES},${FLOAT_SURFACES},[role="dialog"],[role="alertdialog"],[role="menu"],[role="listbox"])`
const CSS_COMPLETION = withBuildAliases(`
html[data-dsh-gemini-theme="off"] #${ID.panel} {
  --gem-card:#342c4c; --gem-text:#f8edce; --gem-muted:#d1c4df;
  --gem-accent:#6b5488; --gem-on-accent:#fff4df; --gem-line:#aa9061;
  background:#342c4c; color:#f8edce;
}
html[data-dsh-gemini-theme="active"] body {
  --dsw-alias-bg-mask-1:#170f2b66; --dsw-alias-bg-mask-drop:#170f2b99;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES} {
  --gem-reader-bg:#f3edf8; --gem-reader-ink:#3e2c55; --gem-reader-muted:#675673;
  --gem-reader-hover:#e4d9ee; --gem-reader-line:#bca5cf; --gem-reader-link:#79591b;
  --dsw-static-deepseek-400:var(--gem-reader-link); --dsw-static-neutral-bluish-00:var(--gem-reader-ink);
  --dsw-hovercard-bg:var(--gem-reader-bg);
  --gem-diff-plus:#275b38; --gem-diff-minus:#85344d; --gem-diff-add:#e0eee4; --gem-diff-del:#f5dfe6;
  --dsw-alias-bg-base:var(--gem-reader-bg); --dsw-alias-bg-layer-1:var(--gem-reader-bg);
  --dsw-alias-bg-layer-2:var(--gem-reader-hover); --dsw-alias-bg-layer-3:var(--gem-reader-hover);
  --dsw-alias-label-primary:var(--gem-reader-ink); --dsw-alias-label-secondary:var(--gem-reader-muted);
  --dsw-alias-label-tertiary:var(--gem-reader-muted); --dsw-alias-label-caption:var(--gem-reader-muted);
  --dsw-alias-border-l1:var(--gem-reader-line); --dsw-alias-border-l2:var(--gem-reader-line);
  --dsw-alias-border-l3:var(--gem-reader-line); --dsw-alias-border-l4:var(--gem-reader-line);
  --dsw-alias-interactive-bg-hover:var(--gem-reader-hover);
  --dsw-specific-input-major:var(--gem-reader-bg); --dsw-specific-menu:var(--gem-reader-bg);
  background:var(--gem-reader-bg) !important; color:var(--gem-reader-ink) !important;
  border:1px solid var(--gem-reader-line); backdrop-filter:none;
}
${COMPLETION_SCOPE} {
  --dsw-alias-bg-overlay:var(--gem-reader-hover,var(--gem-settings-control,var(--gem-card)));
  --dsw-alias-bg-skeleton:color-mix(in srgb,var(--dsw-alias-label-primary) 14%,transparent);
  --dsw-alias-fill-l1:color-mix(in srgb,var(--dsw-alias-label-primary) 8%,transparent);
  --dsw-alias-fill-l2:color-mix(in srgb,var(--dsw-alias-label-primary) 12%,transparent);
  --dsw-alias-fill-tertiary:color-mix(in srgb,var(--dsw-alias-label-primary) 16%,transparent);
  --dsw-alias-fill-tsp-secondary:color-mix(in srgb,var(--dsw-alias-label-primary) 12%,transparent);
  --dsw-alias-button-elevated-fill:var(--dsw-alias-bg-layer-1);
  --dsw-alias-button-floating-fill:var(--dsw-alias-bg-layer-1);
  --dsw-alias-button-floating-hover:var(--dsw-alias-interactive-bg-hover);
  --dsw-alias-button-info-fill:#6b5488; --dsw-alias-button-info-hover:#584171;
  --dsw-alias-button-contrast-fill:#5a476f;
  --dsw-alias-label-primary-inverted:#fff4df;
  --dsw-alias-button-ghost-active-fill:var(--dsw-alias-interactive-bg-hover);
  --dsw-alias-button-ghost-active-border:var(--dsw-alias-border-l2);
  --dsw-alias-interactive-bg-hover-solid:var(--dsw-alias-bg-layer-2);
  --dsw-alias-interactive-bg-hover-danger:var(--gem-diff-del,#f5dfe6);
  --dsw-alias-label-primary-dimmed:var(--dsw-alias-label-secondary);
  --dsw-alias-label-dimmed:var(--dsw-alias-label-tertiary);
  --dsw-alias-label-quaternary:var(--dsw-alias-label-tertiary);
  --dsw-alias-label-shimmer:var(--dsw-alias-label-secondary);
  --dsw-alias-label-deep-diving:var(--gem-reader-link,var(--gem-link));
  --dsw-alias-label-deep-diving-shimmer:var(--dsw-alias-label-secondary);
  --dsw-alias-brand-primary-new-colorprimary-new-color:var(--gem-reader-link,var(--gem-link));
  --dsw-alias-markdown-citation:var(--gem-reader-hover,var(--gem-card));
  --dsw-alias-scrollbar-bg-l1:var(--dsw-alias-border-l2);
  --dsw-alias-separator-primary:var(--dsw-alias-border-l2);
  --dsw-alias-border-inverted:var(--dsw-alias-label-primary-inverted);
  --dsw-alias-code-diff-added:var(--gem-diff-add,#e0eee4);
  --dsw-alias-code-diff-deleted:var(--gem-diff-del,#f5dfe6);
  --dsw-alias-label-error:var(--dsw-alias-state-error-primary);
  --dsw-alias-markdown-inline-code:var(--gem-reader-hover,var(--dsw-alias-bg-layer-2));
  --dsw-alias-markdown-tag:var(--gem-reader-hover,var(--dsw-alias-bg-layer-2));
  --dsw-alias-menu-group-header-fill:var(--dsw-alias-bg-layer-2);
  --dsw-alias-state-idle-primary:var(--dsw-alias-label-secondary);
  --dsw-alias-tooltip-key-bg:#e4d9ee;
  --dsw-alias-turn-trigger-bg:var(--dsw-alias-bg-layer-1);
  --dsw-alias-turn-trigger-bg-hover:var(--dsw-alias-interactive-bg-hover);
  --dsw-specific-selector:var(--dsw-alias-bg-layer-1);
  --dsw-specific-sidebar-nav-item-active-accent:var(--dsw-alias-interactive-bg-hover);
  --dsw-alias-state-business-tertiary:var(--gem-reader-hover,var(--gem-card));
  --dsw-alias-state-error-primary:var(--gem-diff-minus,#85344d);
  --dsw-alias-state-error-secondary:var(--gem-diff-minus,#85344d);
  --dsw-alias-state-success-primary:var(--gem-diff-plus,#275b38);
  --dsw-alias-state-success-secondary:var(--gem-diff-plus,#275b38);
  --dsw-alias-state-success-tertiary:var(--gem-diff-add,#e0eee4);
  --dsw-alias-state-warn-primary:var(--gem-reader-warning,#71501c);
  --dsw-alias-state-warn-label:var(--gem-reader-warning,#71501c);
  --dsw-alias-state-warn-secondary:var(--gem-reader-warning,#71501c);
  --dsw-alias-state-warn-tertiary:var(--gem-reader-warning-bg,#f6e8cd);
  --dsw-alias-onboarding-accent:var(--gem-reader-link,var(--gem-link));
  --dsw-alias-onboarding-card-fill:var(--dsw-alias-bg-layer-1);
  --dsw-alias-onboarding-secondary-fill:var(--dsw-alias-bg-layer-2);
  --dsw-alias-onboarding-checkbox-border:var(--dsw-alias-border-l2);
  --dsw-gradient-onboarding-blue-stops:#9c80bf,#d8c4e6;
  --dsw-gradient-onboarding-cyan-stops:#6a9b9a,#d2e2d8;
  --dsw-gradient-onboarding-violet-stops:#80649e,#d8c4e6;
  --dsw-focus-ring-color:var(--gem-reader-link,var(--gem-link));
  --dsw-menu-backdrop-filter:none;
  --dsw-alias-tooltip-bg:#f3edf8; --dsw-alias-toast-bg:#f3edf8; --dsw-alias-toast-label:#3e2c55;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES} [class*="_copied_"] {
  color:var(--gem-reader-ink) !important;
}
/* Plugin catalog chrome sits on dark violet while its light cards own a separate palette. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.ZVcBiW_page,.fO69Vq_page) :is(.ZVcBiW_pageIntro,.fO69Vq_pageIntro,.ZVcBiW_count,.fO69Vq_count,.ZVcBiW_groupInfo,.fO69Vq_groupInfo,.ZVcBiW_status,.fO69Vq_status,.ZVcBiW_empty,.fO69Vq_empty) {
  color:#e7dbf5 !important; -webkit-text-fill-color:currentColor !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.ZVcBiW_toolbar,.fO69Vq_toolbar) {
  --dsw-alias-label-primary:#f9e8b0; --dsw-alias-label-secondary:#e7dbf5; --dsw-alias-label-caption:#e7dbf5;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.ZVcBiW_pageIntro,.fO69Vq_pageIntro) :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.rkta1W_split,._33HxeW_root) {
  --dsw-static-blue-450:var(--gem-reader-link); --dsw-static-blue-500:var(--gem-reader-link);
  --dsw-static-neutral-bluish-400:var(--gem-reader-muted);
}
/* New task and trajectory surfaces get paired foreground/background tokens, including detached children. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${WORK_SURFACES} {
  --dsw-specific-menu:var(--gem-reader-bg); --dsw-specific-bubble:var(--gem-reader-bg);
  --dsw-alias-markdown-code-block:var(--gem-reader-bg);
  --dsw-alias-markdown-code-block-banner:var(--gem-reader-hover);
  --dsl-code-block-banner-background-color:var(--gem-reader-hover);
  --dsw-alias-link:var(--gem-reader-link);
  --card-fill:var(--gem-reader-bg); --card-hover:var(--gem-reader-hover);
  --dsw-alias-button-primary-fill:#6b5488; --dsw-alias-label-primary-foreground:#fff4df;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(${WORK_SURFACES},${FLOAT_SURFACES}) :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),textarea) {
  color:var(--gem-reader-ink) !important; background:var(--gem-reader-bg) !important;
  -webkit-text-fill-color:currentColor !important; caret-color:var(--gem-reader-ink);
  border-color:var(--gem-reader-line) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(${WORK_SURFACES},${FLOAT_SURFACES}) :is(input,textarea)::placeholder {
  color:var(--gem-reader-muted) !important; -webkit-text-fill-color:currentColor !important; opacity:1;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES} :where(*) {
  -webkit-text-fill-color:currentColor !important; -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
/* Theme only the DSH version-update hint; all other tips and author preview contents keep their own design. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] ${FLOAT_SURFACES}${UPDATE_TOOLTIP} {
  --gem-reader-bg:#514b8d; --gem-reader-ink:#fff6dc; --gem-reader-muted:#e5dcf5;
  --gem-reader-hover:#65569d; --gem-reader-line:#d7ba80; --gem-reader-link:#fff0b8;
  --dsw-alias-bg-base:#514b8d; --dsw-alias-bg-layer-1:#514b8d; --dsw-alias-bg-layer-2:#65569d;
  --dsw-alias-label-primary:#fff6dc; --dsw-alias-label-secondary:#e5dcf5;
  --dsw-alias-label-tertiary:#e5dcf5; --dsw-alias-label-caption:#e5dcf5;
  --dsw-alias-tooltip-bg:#514b8d; --dsw-alias-toast-bg:#514b8d; --dsw-alias-toast-label:#fff6dc;
  background:#514b8d !important; color:#fff6dc !important; border:1px solid #d7ba80 !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${FLOAT_SURFACES}${UPDATE_TOOLTIP} {
  --gem-reader-bg:#f3e9fb; --gem-reader-ink:#34284a; --gem-reader-muted:#655774;
  --gem-reader-hover:#e8dcf3; --gem-reader-line:#c8b6d9; --gem-reader-link:#006b78;
  --dsw-alias-bg-base:#f3e9fb; --dsw-alias-bg-layer-1:#f3e9fb; --dsw-alias-bg-layer-2:#e8dcf3;
  --dsw-alias-label-primary:#34284a; --dsw-alias-label-secondary:#514461;
  --dsw-alias-label-tertiary:#655774; --dsw-alias-label-caption:#655774;
  --dsw-alias-tooltip-bg:#f3e9fb; --dsw-alias-toast-bg:#f3e9fb; --dsw-alias-toast-label:#34284a;
  background:#f3e9fb !important; color:#34284a !important; border:1px solid #c8b6d9 !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES}${UPDATE_TOOLTIP} {
  -webkit-text-fill-color:currentColor !important; -webkit-text-stroke:0 transparent !important;
  text-shadow:none !important; box-shadow:0 4px 14px #17102d38 !important;
  /* Keep the version hint above the adjacent right content pane. */
  z-index:2147483000 !important;
}
/* The tooltip is rendered inside the sidebar; raise that stacking context only while this hint exists. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.sidebar}:has(${FLOAT_SURFACES}${UPDATE_TOOLTIP}) {
  z-index:2147482999 !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES}${UPDATE_TOOLTIP} :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.GY4FdW_taskName,.GY4FdW_taskIcon,.GY4FdW_taskTiming,.GY4FdW_taskRelative,.GY4FdW_omitted) {
  color:var(--dsw-alias-label-primary) !important; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${FLOAT_SURFACES} :is(a[href],[role="link"]) {
  color:var(--gem-reader-link) !important; -webkit-text-fill-color:currentColor !important;
}

/* Crisp link labels: inherited gold outlines blur cyan text on pale message cards. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.conversation} :is(a[href],[role="link"],[class*="_fileMention_" i]),
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.conversation} :is(a[href],[role="link"],[class*="_fileMention_" i]) :where(*) {
  text-shadow:none !important; -webkit-text-stroke:0 transparent !important;
  -webkit-text-fill-color:currentColor !important;
}
/* Pale sidebar rows and composer controls need dark icons, independently of the gold scene ornaments. */
${LIGHT_SETTING} ${S.sidebar} :is([class$="_panelRow"],[class$="_panelGlyph"]) svg,
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.composer} :is([class$="_chevron"],[class$="_cellChevron"],button:not(:disabled):not([aria-label="发送消息"]) svg) {
  color:#514078 !important;
}

`)

// Shared control-integrity fixes read each skin's own tokens; no palette is copied across modes.
const PALE_UI_REGIONS = ':is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"],[role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu,:where(#dsh-gemini-theme-panel))'
const UI_SCOPE = 'html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.Dws9Sa_panel,[role="dialog"],[role="alertdialog"],.fO69Vq_page,.ZVcBiW_page,[role="menu"],[role="listbox"],._surface_ri079_1,.Z9Jnlq_menu,.tki__G_menu,:where(#dsh-gemini-theme-panel))'
const CSS_CONTROL_INTEGRITY = withBuildAliases(`
/* Keep accents local to the surrounding surface, independently for each system mode. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] ${PALE_UI_REGIONS} {
  --gem-accent:#e5daef; --gem-on-accent:#49355f;
  --gem-ui-line:#b39bca; --gem-ui-track:#dfd5e9; --gem-ui-track-active:#bfa8d2;
  --gem-ui-thumb:#fff8ed; --gem-ui-mark:#85612d;
  --gem-ui-tooltip:#f5eef9; --gem-ui-tooltip-ink:#49355f;
  --dsw-alias-bg-module-platform:#ede4f4 !important;
  --dsw-alias-button-primary-fill:var(--gem-accent) !important;
  --dsw-alias-label-primary-foreground:var(--gem-on-accent) !important;
  --dsw-alias-state-business-primary:var(--gem-ui-mark) !important;
  --dsw-alias-brand-primary:var(--gem-ui-mark) !important;
}
${LIGHT_SETTING} :is(${PALE_UI_REGIONS},.fO69Vq_page,.ZVcBiW_page) {
  --gem-accent:#e8dff0; --gem-on-accent:#493b59;
  --gem-ui-line:#baa7cb; --gem-ui-track:#e2d8ec; --gem-ui-track-active:#c2add3;
  --gem-ui-thumb:#fff9ef; --gem-ui-mark:#85612d;
  --gem-ui-tooltip:#f7f0fb; --gem-ui-tooltip-ink:#493b59;
  --dsw-alias-bg-module-platform:#eee6f5 !important;
  --dsw-alias-button-primary-fill:var(--gem-accent) !important;
  --dsw-alias-label-primary-foreground:var(--gem-on-accent) !important;
  --dsw-alias-state-business-primary:var(--gem-ui-mark) !important;
  --dsw-alias-brand-primary:var(--gem-ui-mark) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] :is(.fO69Vq_page,.ZVcBiW_page) {
  --gem-accent:#61577b; --gem-on-accent:#fff0d1;
  --gem-ui-line:#a99268; --gem-ui-track:#514967; --gem-ui-track-active:#9583ae;
  --gem-ui-thumb:#fff0d1; --gem-ui-mark:#d2b77d;
  --gem-ui-tooltip:#46405e; --gem-ui-tooltip-ink:#fff0d1;
}
${LIGHT_SETTING} #${ID.panel} {
  background:linear-gradient(160deg,#faf6fd,#f1e9f8) !important;
  color:#34284a !important; border-color:#c5ad7d;
}
/* Keep the top-up action's foreground paired with its softened local button fill. */
${UI_SCOPE} a[href*="top_up"] { background:var(--gem-accent) !important; }
${UI_SCOPE} a[href*="top_up"], ${UI_SCOPE} a[href*="top_up"] :where(:not(svg):not(path)) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:currentColor !important;
}
/* Text fill is inherited independently of color in WebKit; keep the two synchronized. */
${UI_SCOPE} :is(button,input,textarea,select,[role="combobox"],[role="spinbutton"]),
${UI_SCOPE} button::before, ${UI_SCOPE} button::after {
  -webkit-text-fill-color:currentColor !important;
}
${UI_SCOPE} :is(button[aria-pressed="true"],button[aria-selected="true"],button[data-selected="true"],[role="radio"][aria-checked="true"],[role="tab"][aria-selected="true"]) {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:currentColor !important;
  background:var(--gem-accent) !important;
}
${UI_SCOPE} :is(button[aria-pressed="true"],button[aria-selected="true"],button[data-selected="true"],[role="radio"][aria-checked="true"],[role="tab"][aria-selected="true"]) > :where(span:not([data-tone]),svg) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
}
/* Solid Tag uses a paired fill/foreground, not the surrounding card's body text. */
${UI_SCOPE} :is(.tag,[class*="_tag_"],[class$="_tag"])[data-tone="solid"],
${UI_SCOPE} .FfBBxq_cardActive .FfBBxq_cardIdentity > :is(.tag,[class*="_tag_"],[class$="_tag"])[data-tone="solid"] {
  color:var(--gem-on-accent) !important; -webkit-text-fill-color:currentColor !important;
  background:var(--gem-accent) !important; border:1px solid var(--gem-ui-line,var(--gem-line)) !important;
}
${UI_SCOPE} :is(.tag,[class*="_tag_"],[class$="_tag"])[data-tone="solid"] :where(:not(svg):not(path)) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
}
${UI_SCOPE} .FfBBxq_cardMain { background:transparent !important; }
${UI_SCOPE} :is(.switch,[role="switch"],[class*="_switch_"],[class$="_switch"]) > :is(.thumb,[class*="_thumb_"],[class$="_thumb"]) {
  box-sizing:border-box;
}

/* Switches and hints use the same surface family instead of retaining hard-coded dark fills. */
${UI_SCOPE} :is(.switch,[role="switch"],[class*="_switch_"],[class$="_switch"]) {
  --dsw-alias-label-primary-foreground:var(--gem-ui-thumb) !important;
  --dsw-alias-switch-thumb:var(--gem-ui-thumb) !important;
  background:var(--gem-ui-track) !important; border-color:var(--gem-ui-line) !important;
}
${UI_SCOPE} :is(.switch,[role="switch"],[class*="_switch_"],[class$="_switch"]):is([aria-checked="true"],[data-state="checked"]) {
  background:var(--gem-ui-track-active) !important; border-color:var(--gem-gold) !important;
}
${UI_SCOPE} :is(.switch,[role="switch"],[class*="_switch_"],[class$="_switch"]) > :is(.thumb,[class*="_thumb_"],[class$="_thumb"]) {
  background:var(--gem-ui-thumb) !important; border-color:var(--gem-ui-line) !important;
}
${UI_SCOPE} :is(input[type="checkbox"],input[type="radio"],input[type="range"]) {
  accent-color:var(--gem-ui-mark) !important;
}
${UI_SCOPE} .FfBBxq_iconButton::after, ${UI_SCOPE} .FfBBxq_brokenTip {
  background:var(--gem-ui-tooltip) !important; color:var(--gem-ui-tooltip-ink) !important;
  -webkit-text-fill-color:currentColor !important; border:1px solid var(--gem-ui-line) !important;
}
${UI_SCOPE} :is([role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"],[role="option"],.Z9Jnlq_item,.tki__G_item,._item_4ub78_90):is(:hover,[aria-selected="true"],[aria-checked="true"],._selected_4ub78_216),
${UI_SCOPE} :is(.Z9Jnlq_active,.tki__G_active) {
  background:var(--gem-accent) !important; color:var(--gem-on-accent) !important;
  -webkit-text-fill-color:currentColor !important;
}
${UI_SCOPE} :is([role="menuitem"],[role="menuitemradio"],[role="menuitemcheckbox"],[role="option"],.Z9Jnlq_item,.tki__G_item,._item_4ub78_90):is(:hover,[aria-selected="true"],[aria-checked="true"],._selected_4ub78_216) :where(:not(svg):not(path)) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
}

`)

// Native secondary type sits on restrained reading surfaces; metadata remains visible at rest.
// Tone names follow pluginTone(): host Dark = light, host Light = dark.
// Use real DSH component roots rather than matching every span/status-like class.
const BACKPLATE_SCOPE = `html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame}`
const BACKPLATE_PARTS = ':is(.HiSsxa_root,[data-variant="think"],.YS3v9W_root,.Bpi2Dq_root,[data-step-process] > div:first-child > button,button[data-turn-process],.icaHSq_runningContent,.icaHSq_hint,.gKv1-q_stopped,.ppByMG_actions,.sZXytW_trigger:not(.ppByMG_actions *),.OpZ85W_pill:not(.ppByMG_actions *),.y0jqnG_trigger,.Hqq-bq_headline,.bocITq_headline,.IzP3Va_retrySummary,.IzP3Va_retryDetails)'
const BACKPLATE_NATIVE = `:not(:where(${S.conversation} [data-dockkit-pane] *,${S.conversation} [data-dockkit-float] *))`
const COMPOSER_STAT_PARTS = ':is([data-composer-stat] > :is(button,span):first-child,button[aria-label^="上下文已用 "],button[aria-label$="of context used"])'
const EMPTY_MODEL_CONTROL = 'button[aria-haspopup="menu"]:is([aria-label="请选择模型"],[aria-label="Select model"],[aria-label="正在加载模型…"],[aria-label="Loading models…"])'
const COMPOSER_STATS_SCOPE = `html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene]:root ${S.frame} [data-composer-dock]`
const CSS_BACKPLATES = withBuildAliases(`
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] {
  --gem-backplate-bg:#4b476f; --gem-backplate-ink:#fff3d8; --gem-backplate-muted:#ddd4e9;
  --gem-backplate-hover:#58527e; --gem-backplate-line:#8d80a5;
  --gem-backplate-shadow:#211a361f;
  --gem-backplate-link:#a9f0f5; --gem-backplate-heading:#fff1c9;
  --gem-backplate-error:#ffd0da;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-backplate-bg:#f3edf8; --gem-backplate-ink:#40314f; --gem-backplate-muted:#6c5b7b;
  --gem-backplate-hover:#e9e0f1; --gem-backplate-line:#d0c2de;
  --gem-backplate-shadow:#30204412;
  --gem-backplate-link:#006b78; --gem-backplate-heading:#765522;
  --gem-backplate-error:#85344d;
}
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} {
  --dsw-alias-label-primary:var(--gem-backplate-ink);
  --dsw-alias-label-secondary:var(--gem-backplate-muted);
  --dsw-alias-label-tertiary:var(--gem-backplate-muted);
  --dsw-alias-label-caption:var(--gem-backplate-muted);
  --dsw-alias-label-deep-diving:var(--gem-backplate-ink);
  --dsw-alias-label-deep-diving-shimmer:var(--gem-backplate-muted);
  --dsw-alias-state-error-primary:var(--gem-backplate-error);
  --dsw-alias-bg-base:var(--gem-backplate-bg);
  --dsw-alias-markdown-code-block:var(--gem-backplate-hover);
  --dsw-alias-interactive-bg-hover:var(--gem-backplate-hover);
  --gem-chat-body:var(--gem-backplate-ink); --gem-chat-secondary:var(--gem-backplate-muted);
  --gem-chat-caption:var(--gem-backplate-muted); --gem-chat-heading:var(--gem-backplate-heading);
  color:var(--gem-backplate-ink) !important;
  box-shadow:none;
  border-radius:8px;
  transition-property:box-shadow,outline-color !important;
}
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE}:not(.ppByMG_actions) {
  background:var(--gem-backplate-bg) !important;
}
/* Preserve small native typography; group related process rows on one reading surface. */
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE},
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :where(:not(svg):not(path)) {
  font-size:var(--dsh-content-font-size-secondary,13px) !important;
  font-weight:400 !important;
}
/* DSH keeps process containers mounted after hiding both children. Never pad/paint
   that outer animation box: padding would leave a blank bar even at height:0. */
${BACKPLATE_SCOPE} [data-step-process]${BACKPLATE_NATIVE} {
  background:transparent !important; padding:0; border:0; box-shadow:none;
}
${BACKPLATE_SCOPE} [data-step-process-content]${BACKPLATE_NATIVE}:has(> :not([hidden]):not(:empty)) {
  background:var(--gem-backplate-bg) !important;
  border-radius:10px; padding:8px 10px; box-sizing:border-box;
}
${BACKPLATE_SCOPE} [data-step-process] > div:first-child > button${BACKPLATE_NATIVE} {
  width:fit-content; max-width:100%; border-radius:8px; padding:2px 8px;
}
${BACKPLATE_SCOPE} [data-step-process-content] ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} {
  background:transparent !important; box-shadow:none; border-radius:0;
}
/* Preserve native hidden/collapsing states instead of styling placeholder geometry. */
${BACKPLATE_SCOPE} :is([data-step-process],[data-step-process-body],[data-step-process-content],.HiSsxa_root,.YS3v9W_root,.Bpi2Dq_root,.ppByMG_actions)[hidden]${BACKPLATE_NATIVE} {
  display:none !important;
}
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE}:empty {
  background:transparent !important; padding:0; min-height:0; border:0; box-shadow:none;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"],.YS3v9W_root,.Bpi2Dq_root)${BACKPLATE_NATIVE} {
  border-radius:10px;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"])${BACKPLATE_NATIVE} [class$="_thinkBody"] {
  padding:4px 12px 8px calc(22px + var(--dsh-content-font-delta,0px));
}
${BACKPLATE_SCOPE} :is(.YS3v9W_root,.Bpi2Dq_root)${BACKPLATE_NATIVE} [data-disclosure-header] {
  padding-inline:6px;
}
${BACKPLATE_SCOPE} :is(button[data-turn-process],.icaHSq_runningContent,.icaHSq_hint,.gKv1-q_stopped,.ppByMG_actions,.sZXytW_trigger,.OpZ85W_pill,.y0jqnG_trigger)${BACKPLATE_NATIVE} {
  width:fit-content; max-width:100%; box-sizing:border-box; border-radius:8px;
  padding-inline:8px; border:0; box-shadow:none;
}
${BACKPLATE_SCOPE} button[data-turn-process]${BACKPLATE_NATIVE} {
  height:auto; min-height:28px; padding-block:3px;
}
${BACKPLATE_SCOPE} :is(.icaHSq_runningContent,.icaHSq_hint)${BACKPLATE_NATIVE} { padding-block:2px; }
/* Native DSH hides older action/time rows on pointer exit. Keep these labels readable at rest.
   Do not reveal hidden disclosures, tooltips, or unavailable/disabled controls. */
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} {
  opacity:1 !important; transition:none !important;
}
/* Clear inherited gold strokes without flattening syntax colors or status semantics. */
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE},
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :where(*) {
  -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :is([data-disclosure-header],.HiSsxa_title,.HiSsxa_summaryText,.YS3v9W_title,.YS3v9W_summary:not([data-error]),.Bpi2Dq_source,.Bpi2Dq_summary,.TXqvFW_label,._PaunW_label,._PaunW_durationNumber,.icaHSq_runningText,.ppByMG_action,.ppByMG_timeStart,.ppByMG_timeEnd,.ppByMG_endInfo,.sZXytW_label,.OpZ85W_label),
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :is([data-disclosure-header],.ppByMG_endInfo) :where(span,button) {
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :is(._PaunW_label,.TXqvFW_label,.icaHSq_runningText) :where(span),
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} :is(button,svg),
${BACKPLATE_SCOPE} :is(.sZXytW_trigger,.OpZ85W_pill,.y0jqnG_trigger)${BACKPLATE_NATIVE} :where(span,svg) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"])${BACKPLATE_NATIVE} :is([class$="_thinkBody"],[data-disclosure-header]) {
  background:transparent !important; color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"])${BACKPLATE_NATIVE} > [class$="_row"] { border-radius:inherit; }
${BACKPLATE_SCOPE} ${BACKPLATE_PARTS}${BACKPLATE_NATIVE} :is(.YS3v9W_summary,.YS3v9W_body)[data-error] {
  color:var(--gem-backplate-error) !important;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"]) [class$="_thinkBody"]${BACKPLATE_NATIVE} :where(p,li,blockquote,dd,dt,td,th,small) {
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"]) [class$="_thinkBody"]${BACKPLATE_NATIVE} :where(h1,h2,h3,h4,strong,b) {
  color:var(--gem-backplate-heading) !important;
}
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"]) [class$="_thinkBody"]${BACKPLATE_NATIVE} :is(a[href],[role="link"]),
${BACKPLATE_SCOPE} :is(.HiSsxa_root,[data-variant="think"]) [class$="_thinkBody"]${BACKPLATE_NATIVE} :is(a[href],[role="link"]) :where(*) {
  color:var(--gem-backplate-link) !important;
}
${BACKPLATE_SCOPE} :is([data-step-process] > div:first-child > button,button[data-turn-process],.sZXytW_trigger,.OpZ85W_pill,.y0jqnG_trigger)${BACKPLATE_NATIVE}:hover:not(:disabled) {
  background:var(--gem-backplate-hover) !important;
}
${BACKPLATE_SCOPE} :is([data-step-process] > div:first-child > button,button[data-turn-process],.sZXytW_trigger,.OpZ85W_pill,.y0jqnG_trigger)${BACKPLATE_NATIVE}:focus-visible {
  outline:2px solid var(--gem-backplate-line); outline-offset:2px;
}

/* The existing answer-bubble rule also matches Markdown inside reasoning. Keep one
   reading surface there instead of a second bordered/shadowed bubble inside it. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} :is(.HiSsxa_root,[data-variant="think"]) [class$="_thinkBody"] [class*="_markdown_"]${BACKPLATE_NATIVE} {
  background:transparent !important; border:0 !important; box-shadow:none !important;
  margin:0 !important; padding:0 !important; border-radius:0 !important;
  max-width:100%;
}

/* Separate small controls and timestamps; never paint a footer-wide ribbon. */
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} {
  background:transparent !important; padding:0; gap:6px;
}
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} :is(button,.ppByMG_timeStart,.ppByMG_endInfo,.sZXytW_trigger,.OpZ85W_pill) {
  background:var(--gem-backplate-bg) !important; border-radius:7px;
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} :is(.ppByMG_timeStart,.ppByMG_endInfo) {
  padding-inline:6px; margin-left:0;
}
${BACKPLATE_SCOPE} .ppByMG_actions${BACKPLATE_NATIVE} button:hover:not(:disabled):not([data-unavailable]) {
  background:var(--gem-backplate-hover) !important;
}

/* Native outlines contain rects/circles as well as paths. Some older scene rules
   color those descendants gold; restore a single readable ink only in host Light. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.frame} .ppByMG_actions${BACKPLATE_NATIVE} button svg,
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] ${S.frame} .ppByMG_actions${BACKPLATE_NATIVE} button svg :where(*) {
  color:var(--gem-backplate-ink) !important;
}
/* DSH tooltips are portalled outside the conversation; style label and keycaps
   together so neither palette inherits the scene's gold text on a pale surface. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone]:root :is([role="tooltip"],._bubble_12mhf_1)${BACKPLATE_NATIVE} {
  --dsw-alias-label-primary:var(--gem-backplate-ink);
  --dsw-alias-label-secondary:var(--gem-backplate-ink);
  --dsw-alias-label-tertiary:var(--gem-backplate-muted);
  --dsw-alias-tooltip-bg:var(--gem-backplate-bg);
  background:var(--gem-backplate-bg) !important; color:var(--gem-backplate-ink) !important;
  border:1px solid var(--gem-backplate-line) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone]:root :is([role="tooltip"],._bubble_12mhf_1)${BACKPLATE_NATIVE},
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone]:root :is([role="tooltip"],._bubble_12mhf_1)${BACKPLATE_NATIVE} :where(*) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}


/* Compact header accents stay on text and tabs, never on the full header row. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] {
  --gem-header-title-a:#405e78; --gem-header-title-b:#53527d; --gem-header-ink:#fff5e2;
  --gem-header-preset-a:#685469; --gem-header-preset-b:#535a7c; --gem-header-preset-ink:#e7ffff;
  --gem-header-tab-a:#465d72; --gem-header-tab-b:#505b78; --gem-header-line:#c7b5df66;
  --gem-header-glint:#f4eaff24; --gem-header-shadow:#211a3626;
  --gem-header-active-a:#416775; --gem-header-active-b:#555d7c; --gem-header-accent:#f2d99e;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-header-title-a:#e3f1f7; --gem-header-title-b:#e6eafa; --gem-header-ink:#40314f;
  --gem-header-preset-a:#f5e8ec; --gem-header-preset-b:#e9edf9; --gem-header-preset-ink:#294b52;
  --gem-header-tab-a:#e4eef5; --gem-header-tab-b:#e7eafa; --gem-header-line:#b4a0c477;
  --gem-header-glint:#ffffffcc; --gem-header-shadow:#38245118;
  --gem-header-active-a:#dcefeb; --gem-header-active-b:#e1eaf7; --gem-header-accent:#815c25;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} :is(.ST7X_W_header .ST7X_W_crumbCurrent,.ST7X_W_header ._3li69W_label,.ST7X_W_tabs .ST7X_W_tab)${BACKPLATE_NATIVE} {
  background-color:var(--gem-header-title-a) !important;
  background-image:linear-gradient(115deg,var(--gem-header-title-a),var(--gem-header-title-b)) !important;
  color:var(--gem-header-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:inset 0 0 0 1px var(--gem-header-line),0 1px 3px var(--gem-header-shadow) !important;
  border-radius:10px; opacity:1 !important;
  background-origin:border-box;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header :is(.ST7X_W_crumbCurrent,._3li69W_label)${BACKPLATE_NATIVE} {
  padding:2px 9px; border-inline-start:0 solid var(--gem-header-accent); align-self:center; box-decoration-break:clone; -webkit-box-decoration-break:clone;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header ._3li69W_label${BACKPLATE_NATIVE} {
  background-color:var(--gem-header-preset-a) !important;
  background-image:linear-gradient(115deg,var(--gem-header-preset-a),var(--gem-header-preset-b)) !important;
  color:var(--gem-header-preset-ink) !important; border-radius:999px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tab${BACKPLATE_NATIVE} {
  padding:3px 10px 7px; border-radius:8px 8px 3px 3px;
  background-color:var(--gem-header-tab-a) !important;
  background-image:linear-gradient(115deg,var(--gem-header-tab-a),var(--gem-header-tab-b)) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tabActive${BACKPLATE_NATIVE} {
  background-color:var(--gem-header-active-a) !important;
  background-image:linear-gradient(115deg,var(--gem-header-active-a),var(--gem-header-active-b)) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tabActive${BACKPLATE_NATIVE}::after {
  background:var(--gem-header-accent) !important; left:10px; right:10px; width:auto; height:2px; bottom:0; border-radius:2px; transform:none;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header :is(.ST7X_W_crumbCurrent,._3li69W_label)${BACKPLATE_NATIVE} :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}

html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tab${BACKPLATE_NATIVE}:hover {
  box-shadow:inset 0 0 0 1px var(--gem-header-line),inset 0 2px 0 var(--gem-header-glint),0 3px 8px var(--gem-header-shadow) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tab${BACKPLATE_NATIVE}:focus-visible {
  outline:2px solid var(--gem-header-accent); outline-offset:2px;
}

/* In trajectory view reserve a gutter inside the ornamental frame, not over ledger rows. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame} ${S.conversation} ._0rqS-a_root${BACKPLATE_NATIVE} {
  box-sizing:border-box; width:calc(100% - 44px); min-width:0;
  margin:6px 22px 20px; flex:1; min-height:0;
  border:1px solid var(--gem-reader-line); border-radius:8px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.conversation}:has(._0rqS-a_root) #${ID.frame} :is(.bottom-left,.bottom-right) {
  width:16px; height:16px;
}

/* Match the native two-row header while clearing the reduced star corners. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header:not(.ST7X_W_headerBlank)${BACKPLATE_NATIVE} {
  min-height:76px; padding:18px 28px 0 40px !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header .ST7X_W_crumbs${BACKPLATE_NATIVE} {
  padding:3px 2px; margin:-3px -2px;
}

/* Shallow title and mode labels keep native type metrics and a shared left axis. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header .ST7X_W_crumbCurrent${BACKPLATE_NATIVE} {
  position:relative; padding-inline-end:10px;
  box-shadow:inset 0 0 0 1px var(--gem-header-line),0 1px 3px var(--gem-header-shadow) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_header .ST7X_W_crumbCurrent${BACKPLATE_NATIVE}::after {
  content:none; position:absolute; pointer-events:none; right:9px; top:calc(50% - 3px);
  width:4px; height:4px; border:1px solid var(--gem-header-accent); transform:rotate(45deg);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs .ST7X_W_tabActive${BACKPLATE_NATIVE} {
  box-shadow:inset 0 0 0 1px var(--gem-header-line) !important;
}

/* Light mode: plugin detail fields must share their page's pale reading surface. */
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_page,.ZVcBiW_page) {
  --dsw-alias-bg-base:#f3e9fb !important; --dsw-alias-bg-layer-1:#f3e9fb !important;
  --dsw-alias-bg-layer-2:#e9def3 !important; --dsw-alias-bg-layer-3:#e4d8ee !important;
  --dsw-alias-label-primary:#34284a !important; --dsw-alias-label-secondary:#514461 !important;
  --dsw-alias-label-tertiary:#655774 !important; --dsw-alias-brand-text:#514078 !important;
  background:linear-gradient(135deg,#f5eefb,#ece5f5) !important; color:#34284a !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_detail,.ZVcBiW_detail) {
  color:#34284a !important; -webkit-text-fill-color:currentColor !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_detail,.ZVcBiW_detail) :where(p,label,legend,small,summary,dt,dd,[class$="_label"],[class$="_description"],[class$="_hint"],[class$="_help"],[class$="_desc"],[class$="_detailDesc"],[class$="_sectionTitle"]) {
  color:#514461 !important; -webkit-text-fill-color:currentColor !important; text-shadow:none !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_detail,.ZVcBiW_detail) :is(h1,h2,h3,[class$="_detailName"],[class$="_detailTitle"]) {
  color:#514078 !important; -webkit-text-fill-color:currentColor !important; text-shadow:none !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_detail,.ZVcBiW_detail) button:not([role="switch"]):not([role="checkbox"]):not([role="radio"]):not(.fO69Vq_crumb):not(.ZVcBiW_crumb) {
  color:#40314f !important; -webkit-text-fill-color:currentColor !important;
  background:#e8dcf3 !important; border-color:#bba6ce !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_detail,.ZVcBiW_detail) :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]),textarea,select) {
  color:#34284a !important; -webkit-text-fill-color:currentColor !important;
  background:#faf6ff !important; border-color:#bba6ce !important;
}
/* The hero headline acquired a pale backplate, so pair it with dark ink. */
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.heroTitle} :is(.Hqq-bq_headline,.bocITq_headline),
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.heroTitle} :is(.Hqq-bq_headline,.bocITq_headline) :where(*) {
  color:#514078 !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.heroTitle} :is(.Hqq-bq_previewBadge,.bocITq_previewBadge) {
  background:#e5d8f0 !important; color:#514078 !important; border-color:#bba6ce !important;
}
${LIGHT_SETTING} ${S.frame} ${S.composer} button[aria-haspopup] svg,
${LIGHT_SETTING} ${S.frame} ${S.composer} button[aria-haspopup] svg :where(*) {
  color:#514078 !important;
}

/* The light catalog and its detail page share one pale surface, including back navigation. */
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_page,.ZVcBiW_page) :is(.fO69Vq_pageIntro,.ZVcBiW_pageIntro,.fO69Vq_pageTitle,.ZVcBiW_pageTitle,.fO69Vq_groupHead,.ZVcBiW_groupHead,.fO69Vq_sectionTitle,.ZVcBiW_sectionTitle) {
  color:#514078 !important; -webkit-text-fill-color:currentColor !important; text-shadow:none !important;
  border-color:#c8b6d9 !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_pageIntro,.ZVcBiW_pageIntro) :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_page,.ZVcBiW_page) :is(button.fO69Vq_crumb,button.ZVcBiW_crumb) {
  background:transparent !important; border-color:transparent !important;
  box-shadow:none !important; color:#514078 !important; -webkit-text-fill-color:currentColor !important;
  align-self:flex-start;
}
${LIGHT_SETTING} ${S.frame} :is(.fO69Vq_page,.ZVcBiW_page) :is(button.fO69Vq_crumb,button.ZVcBiW_crumb):hover {
  color:#34284a !important; text-decoration:underline; text-underline-offset:3px;
}

/* Match the welcome backplate to its contents in both appearances. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="hero"] ${S.frame} ${S.heroTitle} :is(.Hqq-bq_headline,.bocITq_headline)${BACKPLATE_NATIVE} {
  box-sizing:border-box; width:fit-content !important; max-width:100%;
  margin-inline:auto !important; padding:6px 18px !important;
}

/* Retry disclosures retain their small native type and only paint visible content. */
${BACKPLATE_SCOPE} .IzP3Va_retrySummary${BACKPLATE_NATIVE} {
  padding:2px 8px; width:fit-content; max-width:100%;
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} .IzP3Va_retrySummary${BACKPLATE_NATIVE} :where(*),
${BACKPLATE_SCOPE} .IzP3Va_retryDetails${BACKPLATE_NATIVE} :where(*) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${BACKPLATE_SCOPE} .IzP3Va_retrySummary${BACKPLATE_NATIVE}:hover {
  background:var(--gem-backplate-hover) !important;
}
/* Changed-file paths are interface links, with semantic green/red counts. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-changed-files] :is(.ztjrea_path,.ztjrea_previewHint,.ztjrea_previewPath,.PSXfDq_itemPath) {
  color:var(--gem-reader-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-changed-files] :is(.ztjrea_counts,.ztjrea_statCounts,.PSXfDq_counts,.PSXfDq_itemCounts) {
  color:var(--gem-reader-ink) !important; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-changed-files] :is(.ztjrea_added,.PSXfDq_added) {
  color:var(--gem-diff-plus) !important; -webkit-text-fill-color:currentColor !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-changed-files] :is(.ztjrea_deleted,.PSXfDq_deleted) {
  color:var(--gem-diff-minus) !important; -webkit-text-fill-color:currentColor !important;
}
/* Source/plain-text viewers are DSH-owned. Leave iframe documents and web pages alone. */
${LIGHT_SETTING} :is([data-dockkit-pane],[data-dockkit-float]) :is(.UgCwSW_renderer,.AhTMVW_wrap:has(.AhTMVW_textDocument)) {
  --dsw-alias-bg-base:#fffcff !important; --dsw-alias-bg-layer-1:#fffcff !important;
  --dsw-alias-bg-layer-2:#eae1f3 !important;
  --dsw-alias-label-primary:#34284a !important; --dsw-alias-label-secondary:#514461 !important;
  --dsw-alias-label-tertiary:#655774 !important; --dsw-alias-label-caption:#655774 !important;
  background:#fffcff !important; color:#34284a !important;
}
${LIGHT_SETTING} :is([data-dockkit-pane],[data-dockkit-float]) :is(.UgCwSW_code,.AhTMVW_textDocument) {
  --dsl-code-block-background:#fffcff; --dsl-code-block-foreground:#34284a;
  background:#fffcff !important; color:#34284a !important; -webkit-text-fill-color:currentColor !important;
}
${LIGHT_SETTING} :is([data-dockkit-pane],[data-dockkit-float]) :is(.UgCwSW_code,.AhTMVW_textDocument) :where(pre,code,.AhTMVW_line) {
  background:transparent !important; color:inherit; -webkit-text-fill-color:currentColor !important;
}
/* Reserve space below the native composer, including running and wrapped status rows. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} [data-composer-seat] {
  box-sizing:border-box; padding-bottom:14px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} :is(.yhfFVG_dock,.RlGAzG_dock) {
  flex-wrap:wrap; row-gap:4px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.conversation}:has([data-composer-seat]) #${ID.frame} :is(.bottom-left,.bottom-right) {
  width:18px; height:18px;
}
/* Keep the accepted dark Windows caption; soften only the light appearance. */
html[data-dsh-gemini-theme="active"][data-windows-titlebar][data-dsh-gemini-tone="dark"] body {
  --dsw-specific-sidebar-fill:#e5dced !important;
}
html[data-dsh-gemini-theme="active"][data-windows-titlebar][data-dsh-gemini-tone="dark"] [data-windows-menu] {
  --dsw-alias-label-primary:#40314f; --dsw-alias-label-secondary:#514078;
  --dsw-alias-interactive-bg-hover:#d9cce8;
}


/* Keep the last transcript line clear of the boundary without changing the scroll owner. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .icaHSq_scroll {
  padding-bottom:34px;
}
/* The native scrollport ends above the composer. Its fixed descendant uses the
   conversation body as containing block, so neither is moved or reparented. */
html[data-dsh-gemini-theme="active"] :is(
  .ST7X_W_root[data-phase="active"] .ST7X_W_body,
  .ST7X_W_embeddedBody[data-content-phase="active"],
  .Dc7zOa_root[data-phase="active"] .Dc7zOa_body,
  .Dc7zOa_embeddedBody[data-content-phase="active"]
):not(:has([data-conversation-composer-overlay])) {
  transform:translateZ(0);
  position:relative; z-index:2;
  --gem-separated-composer:1;
}
html[data-dsh-gemini-theme="active"] :is(
  .ST7X_W_root[data-phase="active"] .ST7X_W_body,
  .ST7X_W_embeddedBody[data-content-phase="active"],
  .Dc7zOa_root[data-phase="active"] .Dc7zOa_body,
  .Dc7zOa_embeddedBody[data-content-phase="active"]
):not(:has([data-conversation-composer-overlay])) > [data-conversation-scroll] {
  margin-bottom:calc(var(--dsh-composer-height,152px) + 8px) !important;
}
html[data-dsh-gemini-theme="active"] :is(
  .ST7X_W_root[data-phase="active"] .ST7X_W_body,
  .ST7X_W_embeddedBody[data-content-phase="active"],
  .Dc7zOa_root[data-phase="active"] .Dc7zOa_body,
  .Dc7zOa_embeddedBody[data-content-phase="active"]
):not(:has([data-conversation-composer-overlay])) > [data-conversation-scroll] > [data-composer-seat] {
  position:fixed !important; inset:auto 2px 0 0 !important;
}
html[data-dsh-gemini-theme="active"] [data-conversation-scroll]:has(> [data-composer-seat]):not(:has([data-conversation-composer-overlay])) .JXrxFq_frame {
  --dsh-composer-height:0px;
}
html[data-dsh-gemini-theme="active"] [data-conversation-scroll]:has(> [data-composer-seat]):not(:has([data-conversation-composer-overlay])) .icaHSq_toBottomSlot {
  bottom:16px;
}

/* Workspace hover cards have hard-coded white/gray labels in DSH. Pair their
   own surface and labels instead of inheriting sidebar or scene colors. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is([class*="_card_"],[role="tooltip"]):has(:is(.jJkEga_hoverContent,.hIlkoa_hoverContent)),
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.jJkEga_hoverContent,.hIlkoa_hoverContent) {
  --dsw-hovercard-bg:var(--gem-backplate-bg);
  --dsw-alias-label-primary:var(--gem-backplate-ink);
  --dsw-alias-label-secondary:var(--gem-backplate-muted);
  --dsw-alias-label-tertiary:var(--gem-backplate-muted);
  background:var(--gem-backplate-bg) !important;
  color:var(--gem-backplate-ink) !important;
  border-color:var(--gem-backplate-line) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(.jJkEga_hoverContent,.hIlkoa_hoverContent) :where(*) {
  color:var(--gem-backplate-ink) !important;
  -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] :is(
  .jJkEga_hoverPath,.jJkEga_hoverTime,.jJkEga_hoverStatus,
  .hIlkoa_hoverPath,.hIlkoa_hoverTime,.hIlkoa_hoverStatus
) {
  color:var(--gem-backplate-muted) !important;
  -webkit-text-fill-color:currentColor !important;
}

/* Compact native-like header: one left-aligned reading axis and shallow tabs. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.conversation} .ST7X_W_tabs {
  gap:20px; margin-top:6px; padding-left:0;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.conversation} #${ID.frame} :is(.top-left,.top-right) {
  width:22px; height:22px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.conversation} #${ID.frame} :is(.top-left,.top-right)::after {
  font-size:15px;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.composer} {
  border-radius:20px;
  box-shadow:0 3px 12px #25205426,inset 0 0 0 1px #fffefa40;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene="chat"] ${S.frame} ${S.composer}::before {
  content:"✦ ────── ✧ ────── ✦"; top:-9px;
  padding:0 12px; font:11px/14px Georgia,serif;
  box-shadow:0 1px 3px #24235020;
}

/* Header background-job trigger sits directly on the scene, outside message
   backplates. Keep its native small type and pair it with the mode label. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame} ${S.conversation} :is(.ST7X_W_header,.Dc7zOa_header) .Fw9vfq_trigger {
  box-sizing:border-box; padding:3px 8px; border:1px solid var(--gem-header-line);
  border-radius:999px; background:linear-gradient(115deg,var(--gem-header-preset-a),var(--gem-header-preset-b)) !important;
  color:var(--gem-header-preset-ink) !important;
  -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:0 1px 3px var(--gem-header-shadow);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame} ${S.conversation} :is(.ST7X_W_header,.Dc7zOa_header) .Fw9vfq_trigger :is(.Fw9vfq_count,svg) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame} ${S.conversation} :is(.ST7X_W_header,.Dc7zOa_header) .Fw9vfq_trigger:is(:hover,:focus-visible,[aria-expanded="true"]) {
  background:linear-gradient(115deg,var(--gem-header-active-a),var(--gem-header-active-b)) !important;
  color:var(--gem-header-preset-ink) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ${S.frame} ${S.conversation} :is(.ST7X_W_header,.Dc7zOa_header) .Fw9vfq_trigger:focus-visible {
  outline:2px solid var(--gem-header-accent); outline-offset:2px;
}


/* Light Windows caption controls sit above the violet sidebar, on a pale strip. */
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar} :is(._3WPZCG_toggle,._2H3hWW_toggle),
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar}:is(._3WPZCG_collapsed,._2H3hWW_collapsed) :is(._3WPZCG_newSession,._2H3hWW_newSession) {
  color:#40314f !important; -webkit-text-fill-color:currentColor !important;
  background:transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar} :is(._3WPZCG_toggle,._2H3hWW_toggle) svg,
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar}:is(._3WPZCG_collapsed,._2H3hWW_collapsed) :is(._3WPZCG_newSession,._2H3hWW_newSession) svg,
${LIGHT_SETTING}[data-windows-titlebar] [data-windows-menu] svg {
  color:#40314f !important;
}
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar} :is(._3WPZCG_toggle,._2H3hWW_toggle):is(:hover,:focus-visible),
${LIGHT_SETTING}[data-windows-titlebar] ${S.sidebar}:is(._3WPZCG_collapsed,._2H3hWW_collapsed) :is(._3WPZCG_newSession,._2H3hWW_newSession):is(:hover,:focus-visible) {
  background:#d9cce8 !important;
}
/* Welcome-page selectors need their own paired surface, outside the chat header.
   Scope to native buttons so portalled menus and author documents stay independent. */
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat) {
  box-sizing:border-box; border:1px solid #b4a0c477; border-radius:10px;
  background:linear-gradient(115deg,#e3f1f7,#e6eafa) !important;
  color:#40314f !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:0 1px 3px #38245118;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) .m0vb0q_seat {
  background:linear-gradient(115deg,#f5e8ec,#e9edf9) !important; color:#294b52 !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat) :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat):is(:hover,:focus-visible,[aria-expanded="true"]) {
  background:linear-gradient(115deg,#dcefeb,#e1eaf7) !important;
}
${LIGHT_SETTING}[data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat):focus-visible {
  outline:2px solid #815c25; outline-offset:2px;
}


/* Restore the welcome controls in the host dark appearance. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"][data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat) {
  box-sizing:border-box; border:0; border-radius:10px;
  background:linear-gradient(115deg,#eee8f8,#e4ddf2) !important;
  color:#40315d !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:inset 0 0 0 1px #ad99c8,0 1px 3px #38245126;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"][data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat) :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"][data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat):is(:hover,:focus-visible,[aria-expanded="true"]) {
  background:linear-gradient(115deg,#ddd3ed,#d5c9e9) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"][data-dsh-gemini-scene="hero"] ${S.frame} ${S.conversation} :is(.ST7X_W_heroWorkspaceRow,.Dc7zOa_heroWorkspaceRow) :is(.bocITq_workspace,.Hqq-bq_workspace,.m0vb0q_seat):focus-visible {
  outline:2px solid #765a9a; outline-offset:2px;
}

/* MessageIconActions exposes data-clock on both platforms. Use that native
   contract as a fallback when a DSH build has different CSS-module hashes. */
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} {
  opacity:1 !important; transition:none !important; background:transparent !important;
  --dsw-alias-label-primary:var(--gem-backplate-ink);
  --dsw-alias-label-secondary:var(--gem-backplate-muted);
  --dsw-alias-label-tertiary:var(--gem-backplate-muted);
  --dsw-alias-interactive-bg-hover:var(--gem-backplate-hover);
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} :is(button,[class$="_timeStart"],[class$="_endInfo"]) {
  background:var(--gem-backplate-bg) !important; color:var(--gem-backplate-ink) !important;
  border-radius:7px;
}
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} :is([class$="_timeStart"],[class$="_endInfo"]) {
  padding-inline:6px; margin-left:0;
}
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE},
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} :where(*) {
  -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} :is(span,button,svg),
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} svg :where(*) {
  color:var(--gem-backplate-ink) !important;
}
${BACKPLATE_SCOPE} ${S.conversation} div:is([data-clock="start"],[data-clock="end"])${BACKPLATE_NATIVE} button:is(:hover,:focus-visible):not(:disabled):not([data-unavailable]) {
  background:var(--gem-backplate-hover) !important;
}


/* Structure-identified preset labels are independent of CSS-module hashes. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-dsh-gemini-preset-label="true"] {
  display:inline-flex; align-items:center; gap:4px; box-sizing:border-box;
  max-width:240px; min-width:0; padding:2px 9px; border:0;
  border-radius:999px; background:linear-gradient(115deg,var(--gem-header-preset-a),var(--gem-header-preset-b)) !important;
  color:var(--gem-header-preset-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:inset 0 0 0 1px var(--gem-header-line),0 1px 3px var(--gem-header-shadow) !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone][data-dsh-gemini-scene] ${S.frame} ${S.conversation} [data-dsh-gemini-preset-label="true"] :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}

/* Native material children own menu fill on Windows; paint that material, not
   only the outer surface used by macOS backing layers. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ._surface_ri079_1 {
  --dsw-menu-surface-fill:#f4effa; --dsw-menu-backdrop-filter:none;
  --dsw-alias-label-primary:#40314f; --dsw-alias-label-secondary:#625172;
  --dsw-alias-label-tertiary:#625172; --dsw-alias-interactive-bg-hover:#e7dcf1;
  background:#f4effa !important; color:#40314f !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone] ._surface_ri079_1 :where(*) {
  color:inherit !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${BACKPLATE_SCOPE} ${S.conversation} ._0TPaqG_panel${BACKPLATE_NATIVE} {
  --dsw-specific-menu:var(--gem-backplate-bg); --dsw-menu-backdrop-filter:none;
  --dsw-alias-label-primary:var(--gem-backplate-ink);
  --dsw-alias-label-primary-dimmed:var(--gem-backplate-ink);
  --dsw-alias-label-tertiary:var(--gem-backplate-muted);
  background:var(--gem-backplate-bg) !important;
}
${BACKPLATE_SCOPE} ${S.conversation} ._0TPaqG_panel${BACKPLATE_NATIVE} :where(*) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] { --gem-primary-circle:#d7c8ef; --gem-primary-circle-hover:#c8b4e5; --gem-primary-circle-ink:#40285e; }
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="light"] { --gem-primary-circle:#bfa9df; --gem-primary-circle-hover:#d0bde9; --gem-primary-circle-ink:#302044; }
${BACKPLATE_SCOPE} ${S.conversation} ${S.composer} .yhfFVG_primary {
  background:var(--gem-primary-circle) !important; color:var(--gem-primary-circle-ink) !important;
}
${BACKPLATE_SCOPE} ${S.conversation} ${S.composer} .yhfFVG_primary:hover:not(:disabled) { background:var(--gem-primary-circle-hover) !important; }
${BACKPLATE_SCOPE} ${S.conversation} ${S.composer} .yhfFVG_primary :where(*) {
  color:var(--gem-primary-circle-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}

/* Native semantic contracts also cover builds whose module hashes differ.
   Paint each statistic, never the transparent dock or its scene background. */
${COMPOSER_STATS_SCOPE} ${COMPOSER_STAT_PARTS}${BACKPLATE_NATIVE} {
  background:var(--gem-backplate-bg) !important; color:var(--gem-backplate-ink) !important;
  border-radius:8px; box-shadow:none !important;
  --dsw-alias-label-tertiary:var(--gem-backplate-ink);
  --dsw-alias-label-secondary:var(--gem-backplate-ink);
}
${COMPOSER_STATS_SCOPE} ${COMPOSER_STAT_PARTS}${BACKPLATE_NATIVE},
${COMPOSER_STATS_SCOPE} ${COMPOSER_STAT_PARTS}${BACKPLATE_NATIVE} :where(*) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${COMPOSER_STATS_SCOPE} ${COMPOSER_STAT_PARTS}${BACKPLATE_NATIVE}:is(:hover,:focus-visible,[aria-expanded="true"]):not(:disabled) {
  background:var(--gem-backplate-hover) !important;
}
/* The unselected trigger has a distinct native accessible name. Once a model
   is selected this rule stops matching, leaving its accepted appearance intact. */
${BACKPLATE_SCOPE} ${S.composer} ${EMPTY_MODEL_CONTROL} {
  background:var(--gem-backplate-bg) !important; color:var(--gem-backplate-ink) !important;
  border-radius:10px; box-shadow:inset 0 0 0 1px var(--gem-backplate-line) !important;
}
${BACKPLATE_SCOPE} ${S.composer} ${EMPTY_MODEL_CONTROL},
${BACKPLATE_SCOPE} ${S.composer} ${EMPTY_MODEL_CONTROL} :where(*) {
  color:var(--gem-backplate-ink) !important; -webkit-text-fill-color:currentColor !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
${BACKPLATE_SCOPE} ${S.composer} ${EMPTY_MODEL_CONTROL}:is(:hover,:focus-visible,[aria-expanded="true"]):not(:disabled) {
  background:var(--gem-backplate-hover) !important;
}

`)

// Identify DSH's own CSS module by its published style tag. Class hashes can
// change between operating systems and every host release.
const RUNTIME_MODULES = Object.freeze([
  [
    "BynINW",
    "@deepseek-ai/dsh-client-ui-layout/AppFrame.module.css",
    "frame"
  ],
  [
    "ST7X_W",
    "@deepseek-ai/dsh-client-ui-conversation/ConversationRoot.module.css",
    "root"
  ],
  [
    "_3WPZCG",
    "@deepseek-ai/dsh-client-ui-sidebar/SidebarRoot.module.css",
    "root"
  ],
  [
    "yhfFVG",
    "@deepseek-ai/dsh-client-ui-conversation/InputBar.module.css",
    "root"
  ],
  [
    "bocITq",
    "@deepseek-ai/dsh-client-ui-conversation/HeroShell.module.css",
    "root"
  ],
  [
    "_7514NG",
    "@deepseek-ai/dsh-client-ui-workspace/WorkspaceBrowser.module.css",
    "root"
  ],
  [
    "jJkEga",
    "@deepseek-ai/dsh-client-ui-workspace/Rows.module.css",
    "hoverContent"
  ],
  [
    "ZVcBiW",
    "@deepseek-ai/dsh-client-ui-plugin-manager/PluginManagerPage.module.css",
    "card"
  ],
  [
    "wCInkW",
    "@deepseek-ai/dsh-client-ui-settings-general/SettingsRoot.module.css",
    "nav"
  ],
  [
    "Z9Jnlq",
    "@deepseek-ai/dsh-client-ui-input-trigger/MenuView.module.css",
    "menu"
  ],
  [
    "icaHSq",
    "@deepseek-ai/dsh-client-ui-chat/ChatView.module.css",
    "frame"
  ],
  [
    "IzP3Va",
    "@deepseek-ai/dsh-client-ui-chat/MessageItem.module.css",
    "retryDetails"
  ],
  [
    "HiSsxa",
    "@deepseek-ai/dsh-client-ui-chat/ReasoningRow.module.css",
    "root"
  ],
  [
    "_PaunW",
    "@deepseek-ai/dsh-client-ui-chat/TurnProcessNodeView.module.css",
    "root"
  ],
  [
    "sZXytW",
    "@deepseek-ai/dsh-client-ui-chat/TurnUsagePanel.module.css",
    "root"
  ],
  [
    "ppByMG",
    "@deepseek-ai/dsh-client-ui-chat/MessageIconActions.module.css",
    "action"
  ],
  [
    "YS3v9W",
    "@deepseek-ai/dsh-client-ui-chat/GenericCommandCard.module.css",
    "root"
  ],
  [
    "gKv1-q",
    "@deepseek-ai/dsh-client-ui-chat/AssistantMarkdown.module.css",
    "root"
  ],
  [
    "OpZ85W",
    "@deepseek-ai/dsh-client-ui-chat/StatsPills.module.css",
    "anchor"
  ],
  [
    "JXrxFq",
    "@deepseek-ai/dsh-client-ui-chat/TurnNavigator.module.css",
    "frame"
  ],
  [
    "Bpi2Dq",
    "@deepseek-ai/dsh-client-ui-chat/ContextInjectionRow.module.css",
    "root"
  ],
  [
    "TXqvFW",
    "@deepseek-ai/dsh-client-ui-chat/ChatGroupSeat.module.css",
    "root"
  ],
  [
    "y0jqnG",
    "@deepseek-ai/dsh-client-ui-conversation/ContextMeter.module.css",
    "root"
  ],
  [
    "Q2dzhW",
    "@deepseek-ai/dsh-client-ui-tool/ToolRow.module.css",
    "root"
  ],
  [
    "-gRAhq",
    "@deepseek-ai/dsh-client-ui-tool/bash-sample.module.css",
    "root"
  ],
  [
    "yj_sLW",
    "@deepseek-ai/dsh-client-ui-tool/ToolDetails.module.css",
    "root"
  ],
  [
    "_33HxeW",
    "@deepseek-ai/dsh-client-ui-trajectory/TrajectoryTimeline.module.css",
    "root"
  ],
  [
    "rkta1W",
    "@deepseek-ai/dsh-client-ui-trajectory/TrajectoryTable.module.css",
    "split"
  ],
  [
    "_0rqS-a",
    "@deepseek-ai/dsh-client-ui-trajectory/views.module.css",
    "root"
  ],
  [
    "leLPTq",
    "@deepseek-ai/dsh-client-ui-trajectory/TrajectoryToolbar.module.css",
    "root"
  ],
  [
    "_3li69W",
    "@deepseek-ai/dsh-client-ui-agent-preset/AgentPresetLabel.module.css",
    "icon"
  ],
  [
    "FfBBxq",
    "@deepseek-ai/dsh-client-ui-agent-preset/AgentPresetSection.module.css",
    "card"
  ],
  [
    "m0vb0q",
    "@deepseek-ai/dsh-client-ui-agent-preset/AgentPresetSeat.module.css",
    "seat"
  ],
  [
    "Fw9vfq",
    "@deepseek-ai/dsh-client-ui-jobs/JobListAction.module.css",
    "menu"
  ],
  [
    "iGvAsW",
    "@deepseek-ai/dsh-client-ui-sidebar-browser/Browser.module.css",
    "frame"
  ],
  [
    "AhTMVW",
    "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/TextPreview.module.css",
    "action"
  ],
  [
    "UgCwSW",
    "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/CodeBody.module.css",
    "code"
  ],
  [
    "_0TPaqG",
    "@deepseek-ai/dsh-client-ui-conversation/QueueDock.module.css",
    "panel"
  ],
  [
    "HZhGha",
    "@deepseek-ai/dsh-client-ui-tool/AskQuestionCard.module.css",
    "card"
  ],
  [
    "kbRY4W",
    "@deepseek-ai/dsh-client-ui-message-feedback/FeedbackDialog.module.css",
    "dialog"
  ],
  [
    "ztjrea",
    "@deepseek-ai/dsh-client-ui-deliverables/ChangedFiles.module.css",
    "card"
  ],
  [
    "PSXfDq",
    "@deepseek-ai/dsh-client-ui-deliverables/ReviewTab.module.css",
    "root"
  ],
  [
    "T1tA0G",
    "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/FontNotice.module.css",
    "panel"
  ]
])
function discoverRuntimeAliases() {
  const sheets = new Map([...document.querySelectorAll('style[data-plugin-css]')].map(style => [style.getAttribute('data-plugin-css'), style.textContent || '']))
  const aliases = new Map()
  for (const [canonical, tag, role] of RUNTIME_MODULES) {
    const source = sheets.get(tag)
    if (!source) continue
    const pattern = new RegExp(`\\.([\\w-]+)_${role}(?![\\w-])`, 'g')
    const candidates = new Set([...source.matchAll(pattern)].map(match => match[1]))
    if (candidates.size !== 1) continue
    const [prefix] = candidates
    const known = BUILD_CLASS_GROUPS.find(group => group[0] === canonical)
    if (known && !known.includes(prefix)) aliases.set(canonical, prefix)
  }
  return aliases
}
function withRuntimeAliases(css, aliases) {
  if (!aliases.size) return css
  const names = [...aliases.keys()].map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`\\.(${names.join('|')})_([\\w-]+)`, 'g')
  return css.replace(pattern, (token, canonical, role) => `:is(${token},.${aliases.get(canonical)}_${role})`)
}

const PLUGIN_VERSION = '0.5.13'
function markHeaderPresetLabels(conversation) {
  if (!conversation) return []
  const labels = new Set()
  const modeName = /^(?:标准模式|代码模式|极简模式|最简模式|创作模式|创造模式|Standard mode|Code mode|Minimal mode|Creator mode)$/iu
  const headers = conversation.querySelectorAll('header,[data-conversation-header]')
  for (const header of headers) {
    if (header.closest('[data-chat-flow],article,[data-step-process-content]')) continue
    if ([...conversation.querySelectorAll('[data-dockkit-pane],[data-dockkit-float]')].some(pane => pane.contains(header))) continue
    for (const element of header.querySelectorAll('span,button,div,[role="button"]')) {
      if (element.closest('[class$="_crumbs"],[class$="_crumbCurrent"],[data-conversation-header-corner]')) continue
      if (element.matches('div:not([role="button"])') && !element.querySelector(':scope > svg')) continue
      const text = (element.textContent || '').replace(/\s+/gu, ' ').trim()
      const presetSlot = element.closest('[class$="_headerActions"]')
      const describedLabel = presetSlot && element.matches('span[title]') && element.querySelector(':scope > svg')
      if (!modeName.test(text) && !describedLabel) continue
      let label = element
      // Some builds put the icon and text in separate children of a button.
      for (let depth = 0; depth < 2 && label.parentElement !== header; depth++) {
        const parent = label.parentElement
        if (!parent || (parent.textContent || '').replace(/\s+/gu, ' ').trim() !== text) break
        if (parent.matches('button,[role="button"]') || (!label.querySelector('svg') && parent.querySelector(':scope > svg'))) label = parent
        else break
      }
      if ([...conversation.querySelectorAll('[data-dockkit-pane],[data-dockkit-float]')].some(pane => pane.contains(label))) continue
      labels.add(label)
    }
  }
  // Paint the control once, never both the text child and its button.
  const outer = [...labels].filter(label => ![...labels].some(other => other !== label && other.contains(label)))
  const wanted = new Set(outer)
  for (const previous of conversation.querySelectorAll('[data-dsh-gemini-preset-label]')) {
    if (!wanted.has(previous)) previous.removeAttribute('data-dsh-gemini-preset-label')
  }
  for (const label of outer) {
    if (label.getAttribute('data-dsh-gemini-preset-label') !== 'true') label.setAttribute('data-dsh-gemini-preset-label', 'true')
  }
  return outer
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}')
    return {
      enabled: typeof saved.enabled === 'boolean' ? saved.enabled : DEFAULT.enabled,
      showArt: typeof saved.showArt === 'boolean' ? saved.showArt : DEFAULT.showArt,
      intensity: Number.isFinite(saved.intensity) ? Math.max(0, Math.min(MAX_INTENSITY, saved.intensity)) : DEFAULT.intensity,
    }
  } catch { return { ...DEFAULT } }
}
function saveSettings(settings) {
  try { localStorage.setItem(KEY, JSON.stringify(settings)) } catch { /* Storage can be unavailable. */ }
}
function hostTone() {
  const value = getComputedStyle(document.body).getPropertyValue('--dsw-alias-bg-base').trim()
  const match = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/iu)
  if (match) {
    const full = match[1].length === 3 ? [...match[1]].map(x => x + x).join('') : match[1]
    const channels = [0, 2, 4].map(i => parseInt(full.slice(i, i + 2), 16))
    return channels.reduce((sum, channel) => sum + channel, 0) / 3 < 128 ? 'dark' : 'light'
  }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
// DSH Dark keeps the established palette; DSH Light maps to the dedicated dark-canvas/light-surface palette.
function pluginTone() { return hostTone() === 'dark' ? 'light' : 'dark' }

exports.apply = function apply(ctx) {
  ctx.effect(() => {
    let disposeMounted
    let runtimeAliases = new Map()
    let runtimeSelectors = S
    const refreshRuntimeAliases = () => {
      const next = discoverRuntimeAliases()
      if (JSON.stringify([...runtimeAliases]) === JSON.stringify([...next])) return false
      runtimeAliases = next
      runtimeSelectors = Object.fromEntries(Object.entries(S).map(([name, selector]) => [name, withRuntimeAliases(selector, next)]))
      return true
    }
    const pending = new MutationObserver(() => {
      if (disposeMounted) return
      refreshRuntimeAliases()
      disposeMounted = mount()
      if (disposeMounted) pending.disconnect()
    })
    const mount = () => {
    const frame = document.querySelector(runtimeSelectors.frame)
    const sidebar = document.querySelector(runtimeSelectors.sidebar)
    const footer = document.querySelector(runtimeSelectors.footer)
    const main = document.querySelector(runtimeSelectors.main)
    const conversation = document.querySelector(runtimeSelectors.conversation)
    if (!frame || !sidebar) return null
    const root = document.documentElement
    const priorTheme = root.getAttribute('data-dsh-gemini-theme')
    const priorArt = root.getAttribute('data-dsh-gemini-art')
    const priorTone = root.getAttribute('data-dsh-gemini-tone')
    const priorWide = root.getAttribute('data-dsh-gemini-wide')
    const priorPage = root.getAttribute('data-dsh-gemini-page')
    const priorScene = root.getAttribute('data-dsh-gemini-scene')
    for (const id of Object.values(ID)) document.getElementById(id)?.remove()
    const style = document.createElement('style')
    style.id = ID.style
    const baseStyles = CSS + CSS_V2 + CSS_V3 + CSS_LIGHT_SETTING + CSS_CONTROL_INTEGRITY + CSS_READABILITY + CSS_FILE_FINISH + CSS_SIDEBARS + CSS_COMPLETION + CSS_BACKPLATES
    style.textContent = withRuntimeAliases(baseStyles, runtimeAliases)
    document.head.append(style)

    let updateTooltipScan = null
    const scanUpdateTooltips = () => {
      if (updateTooltipScan !== null) return
      updateTooltipScan = requestAnimationFrame(() => {
        updateTooltipScan = null
        for (const tooltip of document.querySelectorAll(DSH_TOOLTIP_CANDIDATES)) {
          const text = (tooltip.textContent || '').replace(/\s+/gu, ' ').trim()
          const isUpdateNotice = /(?:新版本|new\s+version)\s*[:：]\s*v?\d/iu.test(text)
          const isAuthorPreview = !!tooltip.closest('[data-dockkit-pane],[data-dockkit-float]')
          if (isUpdateNotice && !isAuthorPreview) tooltip.setAttribute('data-dsh-gemini-update-tooltip', 'true')
          else tooltip.removeAttribute('data-dsh-gemini-update-tooltip')
        }
      })
    }
    const updateTooltipObserver = new MutationObserver(scanUpdateTooltips)
    updateTooltipObserver.observe(document.body, { childList: true, subtree: true, characterData: true })
    scanUpdateTooltips()

    const trigger = document.createElement('button')
    trigger.id = ID.trigger
    trigger.type = 'button'
    trigger.setAttribute('aria-label', '打开 Gemini 紫夜主题设置')
    trigger.setAttribute('aria-controls', ID.panel)
    trigger.setAttribute('aria-expanded', 'false')
    trigger.innerHTML = '<span class="gem-dot" aria-hidden="true"></span><span>Gemini 紫夜</span>'
    const mascot = document.createElement('div')
    mascot.id = ID.mascot
    mascot.setAttribute('aria-hidden', 'true')
    const mascotImage = document.createElement('img')
    mascotImage.src = '__GEMINI_MASCOT_DATA_URL__'
    mascotImage.alt = ''
    mascotImage.decoding = 'sync'
    mascot.append(mascotImage)
    footer?.prepend(mascot, trigger)

    const panel = document.createElement('section')
    panel.id = ID.panel
    panel.hidden = true
    panel.setAttribute('aria-label', 'Gemini 紫夜主题设置')
    panel.innerHTML = '<h2>Gemini 紫夜</h2><div class="gem-tone-setting"><span class="gem-tone-label">系统外观</span><div class="gem-tone-control" role="group" aria-label="系统外观"><button type="button" data-theme-preference="system" aria-pressed="false">跟随系统</button><button type="button" data-theme-preference="light" aria-pressed="false">浅色</button><button type="button" data-theme-preference="dark" aria-pressed="false">深色</button></div></div><label>启用星象主题 <input data-setting="enabled" type="checkbox"></label><label>显示角色装饰 <input data-setting="showArt" type="checkbox"></label><label for="dsh-gemini-intensity">角色强度（最高 250%） <output for="dsh-gemini-intensity">82%</output></label><input id="dsh-gemini-intensity" data-setting="intensity" type="range" min="0" max="250" step="1"><button type="button" data-action="reset">恢复默认设置</button><p>主题与角色可分别开启。</p><details><summary>版本与兼容诊断</summary><p data-theme-diagnostic></p></details>'
    document.body.append(panel)

    const art = document.createElement('div')
    art.id = ID.art
    art.setAttribute('aria-hidden', 'true')
    art.classList.add('is-original')
    const portrait = document.createElement('img')
    portrait.src = CUTOUT_DATA_URL
    portrait.alt = ''
    portrait.decoding = 'sync'
    art.append(portrait)
    conversation?.append(art)

    const companion = document.createElement('div')
    companion.id = ID.companion
    companion.setAttribute('aria-hidden', 'true')
    const companionImage = document.createElement('img')
    companionImage.src = CHIBI_DATA_URL
    companionImage.alt = ''
    companionImage.decoding = 'sync'
    companion.append(companionImage)
    conversation?.append(companion)

    const themeFrame = document.createElement('div')
    themeFrame.id = ID.frame
    themeFrame.setAttribute('aria-hidden', 'true')
    themeFrame.innerHTML = '<span class="corner top-left"></span><span class="corner top-right"></span><span class="corner bottom-left"></span><span class="corner bottom-right"></span><span class="seal">✦</span>'
    conversation?.append(themeFrame)

    let settings = loadSettings()
    let transitionTimer
    let syncFrame = null
    const enabled = panel.querySelector('[data-setting="enabled"]')
    const showArt = panel.querySelector('[data-setting="showArt"]')
    const intensity = panel.querySelector('[data-setting="intensity"]')
    const output = panel.querySelector('output')
    const themePreferenceButtons = [...panel.querySelectorAll('[data-theme-preference]')]
    const getThemePreference = () => {
      try {
        const preference = ctx.theme.getTheme().preference
        return ['system', 'light', 'dark'].includes(preference) ? preference : 'system'
      } catch { return 'system' }
    }
    // DSH's Windows caption bridge observes head mutations, not plugin tone attributes.
    const captionSignal = document.createTextNode('/* Gemini caption */')
    style.append(captionSignal)
    const setRoot = (name, value) => {
      if (root.getAttribute(name) === value) return
      root.setAttribute(name, value)
      if (root.hasAttribute('data-windows-titlebar') && ['data-dsh-gemini-theme', 'data-dsh-gemini-tone'].includes(name)) {
        captionSignal.data = `/* Gemini caption ${settings.enabled ? 'on' : 'off'} ${root.getAttribute('data-dsh-gemini-tone')} */`
      }
    }
    const sync = () => {
      setRoot('data-dsh-gemini-theme', settings.enabled ? 'active' : 'off')
      setRoot('data-dsh-gemini-art', settings.showArt ? 'on' : 'off')
      setRoot('data-dsh-gemini-tone', pluginTone())
      enabled.checked = settings.enabled
      showArt.checked = settings.showArt
      const preference = getThemePreference()
      for (const button of themePreferenceButtons) button.setAttribute('aria-pressed', String(button.dataset.themePreference === preference))
      intensity.value = String(settings.intensity)
      output.value = `${settings.intensity}%`
      const mainRect = (document.querySelector(runtimeSelectors.main) || main || frame).getBoundingClientRect()
      const wide = mainRect.width >= 1260
      const currentConversation = document.querySelector(runtimeSelectors.conversation)
      const presetLabels = markHeaderPresetLabels(currentConversation)
      const diagnostic = panel.querySelector('[data-theme-diagnostic]')
      if (diagnostic) {
        const status = presetLabels.length ? `顶部模式标签：已适配 ${presetLabels.length} 个` : '顶部模式标签：当前页面未检测到'
        const message = `${PLUGIN_VERSION} · ${status}`
        if (diagnostic.textContent !== message) diagnostic.textContent = message
      }
      const phaseOwner = currentConversation?.closest('[data-phase],[data-content-phase]')
      const phase = phaseOwner?.getAttribute('data-phase') || phaseOwner?.getAttribute('data-content-phase')
      const hero = phase ? phase === 'hero' : !!currentConversation?.querySelector(runtimeSelectors.heroComposer)
      const artOpacity = Math.min(1, Math.max(0, settings.intensity / 100 * (hero ? 1 : .4)))
      setRoot('data-dsh-gemini-page', currentConversation ? 'conversation' : 'other')
      setRoot('data-dsh-gemini-scene', currentConversation ? (hero ? 'hero' : 'chat') : 'other')
      setRoot('data-dsh-gemini-wide', (settings.enabled || settings.showArt) && wide ? 'yes' : 'no')
      art.hidden = !settings.showArt || !currentConversation || mainRect.width < 850
      companion.hidden = !settings.showArt || !currentConversation || mainRect.width < 850
      mascot.hidden = !settings.showArt
      themeFrame.hidden = !settings.enabled
      art.style.setProperty('--gem-art-opacity', String(artOpacity))
      companion.style.setProperty('--gem-art-opacity', String(artOpacity))
    }
    // Batch host layout/route notifications; setting changes still update immediately.
    const scheduleSync = () => {
      if (syncFrame !== null) return
      syncFrame = requestAnimationFrame(() => { syncFrame = null; sync() })
    }
    const update = () => { saveSettings(settings); sync() }
    const toggle = () => { panel.hidden = !panel.hidden; trigger.setAttribute('aria-expanded', String(!panel.hidden)); if (!panel.hidden) (themePreferenceButtons[0] || enabled).focus() }
    const change = event => {
      if (event.target === enabled) settings.enabled = enabled.checked
      if (event.target === showArt) settings.showArt = showArt.checked
      update()
    }
    const chooseThemePreference = event => {
      const button = event.target.closest('[data-theme-preference]')
      if (!button || !panel.contains(button)) return
      const preference = button.dataset.themePreference
      const dark = preference === 'dark' || (preference === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
      // Terminal renderers sample CSS synchronously during the host theme change.
      setRoot('data-dsh-gemini-tone', dark ? 'light' : 'dark')
      ctx.theme.setTheme(preference)
    }
    const input = () => { settings.intensity = Number(intensity.value); update() }
    const reset = () => { settings = { ...DEFAULT }; update() }
    const escape = event => {
      if (event.key === 'Escape' && !panel.hidden) { panel.hidden = true; trigger.setAttribute('aria-expanded', 'false'); trigger.focus() }
    }
    const outside = event => {
      if (!panel.hidden && !panel.contains(event.target) && !trigger.contains(event.target)) { panel.hidden = true; trigger.setAttribute('aria-expanded', 'false') }
    }
    const switchSession = event => {
      if (!settings.enabled || !event.target.closest('button[aria-label="新建会话"],[role="treeitem"],[class*="sessionRow"]')) return
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        clearTimeout(transitionTimer)
        root.removeAttribute('data-dsh-gemini-transition')
        return
      }
      root.removeAttribute('data-dsh-gemini-transition')
      void root.offsetWidth
      root.setAttribute('data-dsh-gemini-transition', 'on')
      clearTimeout(transitionTimer)
      transitionTimer = setTimeout(() => root.removeAttribute('data-dsh-gemini-transition'), 500)
    }
    trigger.addEventListener('click', toggle)
    panel.addEventListener('change', change)
    panel.addEventListener('click', chooseThemePreference)
    intensity.addEventListener('input', input)
    panel.querySelector('[data-action="reset"]').addEventListener('click', reset)
    document.addEventListener('keydown', escape)
    document.addEventListener('pointerdown', outside)
    sidebar.addEventListener('click', switchSession, true)
    window.addEventListener('resize', scheduleSync)
    const observer = new ResizeObserver(scheduleSync)
    observer.observe(main || frame)
    const stopThemeSync = ctx.on('theme/change', snapshot => {
      const scheme = snapshot?.active?.colorScheme
      if (scheme === 'light' || scheme === 'dark') setRoot('data-dsh-gemini-tone', scheme === 'dark' ? 'light' : 'dark')
      scheduleSync()
    })
    const toneTimer = setInterval(() => {
      const tone = pluginTone()
      if (root.getAttribute('data-dsh-gemini-tone') !== tone) setRoot('data-dsh-gemini-tone', tone)
    }, 1000)
    const routeObserver = new MutationObserver(records => {
      if (records.every(record => record.target.closest?.('[data-chat-flow],[contenteditable="true"]'))) return
      const currentFooter = document.querySelector(runtimeSelectors.footer)
      const currentConversation = document.querySelector(runtimeSelectors.conversation)
      // A previous route can remain connected while its replacement mounts.
      if (currentFooter && (trigger.parentElement !== currentFooter || mascot.parentElement !== currentFooter)) currentFooter.prepend(mascot, trigger)
      if (currentConversation && (art.parentElement !== currentConversation || companion.parentElement !== currentConversation || themeFrame.parentElement !== currentConversation)) currentConversation.append(art, companion, themeFrame)
      scheduleSync()
    })
    routeObserver.observe(frame, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['data-phase', 'data-content-phase'] })
    // Some host components load after the first frame. Refresh only when DSH
    // adds or removes its own component style tags, never on chat mutations.
    let aliasUpdateFrame = null
    const headObserver = new MutationObserver(records => {
      const changed = records.some(record => [...record.addedNodes, ...record.removedNodes].some(node => node.nodeType === 1 && node.matches?.('style[data-plugin-css]')))
      if (!changed || aliasUpdateFrame !== null) return
      aliasUpdateFrame = requestAnimationFrame(() => {
        aliasUpdateFrame = null
        if (!refreshRuntimeAliases()) return
        style.textContent = withRuntimeAliases(baseStyles, runtimeAliases)
        style.append(captionSignal)
        scheduleSync()
      })
    })
    headObserver.observe(document.head, { childList: true })
    sync()
    return () => {
      clearTimeout(transitionTimer); clearInterval(toneTimer)
      if (syncFrame !== null) cancelAnimationFrame(syncFrame)
      if (updateTooltipScan !== null) cancelAnimationFrame(updateTooltipScan)
      updateTooltipObserver.disconnect()
      document.querySelectorAll('[data-dsh-gemini-update-tooltip="true"]').forEach(tooltip => tooltip.removeAttribute('data-dsh-gemini-update-tooltip'))
      observer.disconnect(); routeObserver.disconnect(); headObserver.disconnect()
      if (aliasUpdateFrame !== null) cancelAnimationFrame(aliasUpdateFrame)
      frame.querySelectorAll('[data-dsh-gemini-preset-label]').forEach(label => label.removeAttribute('data-dsh-gemini-preset-label'))
      trigger.removeEventListener('click', toggle)
      panel.removeEventListener('change', change)
      panel.removeEventListener('click', chooseThemePreference)
      intensity.removeEventListener('input', input)
      document.removeEventListener('keydown', escape)
      document.removeEventListener('pointerdown', outside)
      sidebar.removeEventListener('click', switchSession, true)
      window.removeEventListener('resize', scheduleSync)
      stopThemeSync?.()
      art.remove(); companion.remove(); mascot.remove(); themeFrame.remove(); panel.remove(); trigger.remove(); style.remove()
      if (priorTheme === null) root.removeAttribute('data-dsh-gemini-theme')
      else root.setAttribute('data-dsh-gemini-theme', priorTheme)
      if (priorArt === null) root.removeAttribute('data-dsh-gemini-art')
      else root.setAttribute('data-dsh-gemini-art', priorArt)
      if (priorTone === null) root.removeAttribute('data-dsh-gemini-tone')
      else root.setAttribute('data-dsh-gemini-tone', priorTone)
      if (priorWide === null) root.removeAttribute('data-dsh-gemini-wide')
      else root.setAttribute('data-dsh-gemini-wide', priorWide)
      if (priorPage === null) root.removeAttribute('data-dsh-gemini-page')
      else root.setAttribute('data-dsh-gemini-page', priorPage)
      if (priorScene === null) root.removeAttribute('data-dsh-gemini-scene')
      else root.setAttribute('data-dsh-gemini-scene', priorScene)
      root.removeAttribute('data-dsh-gemini-transition')
    }
    }
    refreshRuntimeAliases()
    disposeMounted = mount()
    if (!disposeMounted) pending.observe(document.documentElement, { childList: true, subtree: true })
    return () => { pending.disconnect(); disposeMounted?.() }
  })
}
