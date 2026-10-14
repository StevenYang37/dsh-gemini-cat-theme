exports.name = 'dsh-gemini-cat-theme'

// DSH Desktop 0.2.0-rc.2 selector aliases for Windows and macOS builds.
const S = Object.freeze({
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

const CSS = `
html[data-dsh-gemini-theme="active"] {
  --gem-app:#fbf9ff; --gem-side:#f0eaf8; --gem-card:#fff; --gem-text:#30243f;
  --gem-muted:#695777; --gem-accent:#70509f; --gem-on-accent:#fff; --gem-line:#d9cde8;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-app:#181321; --gem-side:#241d32; --gem-card:#2b2339; --gem-text:#f4f0ff;
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
`

const CSS_V2 = `
html[data-dsh-gemini-theme="active"] {
  --gem-app:#e8e3fb; --gem-side:#333a70; --gem-card:#fbf9ff;
  --gem-text:#392766; --gem-muted:#715b99; --gem-accent:#6052b2;
  --gem-on-accent:#fff; --gem-line:#b8a6dc; --gem-gold:#c8a669;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-tone="dark"] {
  --gem-app:#151328; --gem-side:#10102c; --gem-card:#272140;
  --gem-text:#f7f2ff; --gem-muted:#c3b9df; --gem-accent:#bba9ff;
  --gem-on-accent:#1c1839; --gem-line:#65568d; --gem-gold:#d5b987;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="conversation"] ${S.frame} {
  --dsw-alias-bg-base:var(--gem-app); --dsw-alias-bg-layer-1:var(--gem-card);
  --dsw-alias-bg-layer-2:var(--gem-card); --dsw-alias-bg-layer-3:var(--gem-card);
  --dsw-alias-bg-module-platform:var(--gem-side);
  --dsw-alias-button-primary-fill:var(--gem-accent);
  --dsw-alias-button-primary-hover:var(--gem-accent);
  --dsw-alias-border-l1:var(--gem-line); --dsw-alias-border-l2:var(--gem-line);
  background:#141736;
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
  background:radial-gradient(circle,#5b5291,#20224f); text-align:center; font:22px/23px Georgia,serif;
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
  background:color-mix(in srgb,var(--gem-card) 94%,transparent);
  border:1px solid #c9aa74; border-radius:18px;
  box-shadow:0 18px 46px #25205440,0 0 0 3px #f4e8c9b5,inset 0 0 0 1px #fffefa;
  backdrop-filter:blur(12px);
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
  background:#30284b; color:#f4efff; border-color:#7d6ea4;
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
  border-radius:9px; color:#f9edcf; background:linear-gradient(90deg,#252b62,#454687,#252b62);
  box-shadow:inset 0 0 0 2px #1c2050,inset 0 0 0 3px #c8ae77aa;
}
${S.footer} > #${ID.trigger}:hover { background:linear-gradient(90deg,#404b98,#7462ab,#404b98); }
#${ID.trigger} .gem-dot { background:#b8a1ff; box-shadow:0 0 0 2px #dacaa3,0 0 9px #b8a1ff; }
#${ID.panel} {
  border:1px solid #d2b77d; border-radius:15px;
  background:linear-gradient(160deg,#fffefd,#f1ecff); color:#292249;
  box-shadow:0 18px 52px #15143577,0 0 0 3px #534b8c;
}
html[data-dsh-gemini-tone="dark"] #${ID.panel} { background:linear-gradient(160deg,#2d274a,#19172e); color:#f7f2ff; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} :not(svg):not(path) {
  color:#f9e8b0 !important; -webkit-text-fill-color:#f9e8b0 !important;
}
/* Keep the pale new-session action legible against its light surface. */
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"]:not(svg):not(path),
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"] :not(svg):not(path) {
  color:#211b48 !important; -webkit-text-fill-color:#211b48 !important;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button:is(._2H3hWW_brand,._3WPZCG_brand) {
  min-height:29px; padding:3px 5px; border:1px solid #dbcaed !important; border-radius:7px;
  background:linear-gradient(90deg,#fcfaff,#e9e2fa) !important;
  box-shadow:0 0 0 2px #2a3266,inset 0 0 0 1px #fff,0 3px 8px #1c225255;
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button:is(._2H3hWW_brand,._3WPZCG_brand) :where(svg,img) {
  max-height:22px; filter:drop-shadow(0 1px 1px #9387c466);
}
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"] {
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
html[data-dsh-gemini-theme="active"] ${S.sidebar} button[aria-label="新建会话"] * { color:#211b48 !important; }
html[data-dsh-gemini-theme="active"] ${S.footer} { background:transparent !important; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar { width:7px; height:7px; background:#303866; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar-track { background:#303866; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} *::-webkit-scrollbar-thumb { background:#9c8fc6; border-radius:8px; }
html[data-dsh-gemini-theme="active"] ${S.sidebar} ${S.sidebarFade} {
  background-image:linear-gradient(transparent,#293162) !important;
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
`

// Shared opaque surfaces cover both in-frame views and body-level portals.
const CSS_V3 = `
html[data-dsh-gemini-theme="active"] :where(${S.frame},[role="dialog"],[role="alertdialog"],[role="menu"],[role="listbox"],._surface_ri079_1,:is(.Z9Jnlq_menu,.tki__G_menu)) {
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
  --gem-chat-link-visited:#d6c1ff;
  --gem-chat-link-hover:#e8fbff;
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
  --gem-chat-link-visited:#d6c1ff;
  --gem-chat-link-hover:#edffff;
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
    color-mix(in srgb,var(--gem-side) 94%,#17122b),
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
    color-mix(in srgb,var(--gem-side) 94%,#17122b),
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
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(a,[role="link"]) {
  color:var(--gem-chat-link);
  text-decoration-line:underline; text-decoration-color:color-mix(in srgb,var(--gem-chat-link) 76%,transparent);
  text-decoration-thickness:1px; text-underline-offset:.16em;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(a,[role="link"]):visited {
  color:var(--gem-chat-link-visited);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :where(a,[role="link"]):hover {
  color:var(--gem-chat-link-hover); text-decoration-thickness:2px;
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
  background:linear-gradient(135deg,#292445,#363054) !important;
  color:#ffe6a4 !important;
  font:500 .92em/1.45 ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
  box-shadow:inset 0 1px #ffffff12 !important;
  overflow-wrap:anywhere; box-decoration-break:clone; -webkit-box-decoration-break:clone;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] button[class*="_fileMention_"] {
  color:#d9c1ff !important; -webkit-text-fill-color:#d9c1ff !important;
  text-decoration:underline; text-decoration-color:#d9c1ff99; text-underline-offset:.16em;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [data-chat-anchor-key*="assistant"] [class*="_markdown_"] button[class*="_fileMention_"] svg {
  color:#d9c1ff !important; stroke:currentColor;
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
/* Scope chrome color to actual tabs; headings inside messages keep their rose accent. */
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} :is([role="tab"],.ST7X_W_tab) {
  color:#392766 !important; -webkit-text-fill-color:#392766 !important;
  -webkit-text-stroke:0 transparent !important; text-shadow:none !important;
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-scene="chat"] ${S.conversation} [role="tab"][aria-selected="true"] {
  color:#392766 !important; border-color:#8b6ab7 !important; box-shadow:inset 0 -2px #8b6ab7;
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
    background:#302843; color:#f1d997; border-color:#ae9160;
  }
  html[data-dsh-gemini-theme="active"] ${S.heroComposer} ${S.composer} {
    box-sizing:border-box; width:100%; max-width:100%;
  }
}
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_stack,.bocITq_stack) { max-width:none; }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_headline,.bocITq_headline) { justify-content:center; gap:10px; color:var(--gem-text); }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_titleGroup,.bocITq_titleGroup) { align-items:center; gap:9px; }
html[data-dsh-gemini-theme="active"] :is(.Hqq-bq_previewBadge,.bocITq_previewBadge) {
  align-self:center; margin:0; padding:2px 8px; line-height:18px;
  background:var(--gem-card); color:var(--gem-muted); border:1px solid var(--gem-line);
}
html[data-dsh-gemini-theme="active"][data-dsh-gemini-page="other"] ${S.main} {
  background:radial-gradient(ellipse at 90% 0%,color-mix(in srgb,var(--gem-accent) 15%,transparent),transparent 55%),
    linear-gradient(135deg,var(--gem-app),var(--gem-card));
  color:var(--gem-text); box-shadow:inset 0 0 0 1px var(--gem-gold);
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_pageIntro,.ZVcBiW_pageIntro) { border-bottom:1px solid var(--gem-line); padding-bottom:18px; }
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_groupHead,.ZVcBiW_groupHead) { color:var(--gem-muted); }
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card) {
  background:var(--gem-card); border:1px solid var(--gem-line); border-radius:14px;
  box-shadow:0 3px 12px #24193b0d; padding:16px;
}
html[data-dsh-gemini-theme="active"] :is(.fO69Vq_card,.ZVcBiW_card):hover { border-color:var(--gem-gold); }
html[data-dsh-gemini-theme="active"] :where([role="dialog"],[role="alertdialog"]) {
  background:var(--gem-card); color:var(--gem-text); border:1px solid var(--gem-gold);
  box-shadow:0 18px 64px #18102e55,inset 0 0 0 1px var(--gem-line);
}
html[data-dsh-gemini-theme="active"] :is(.wCInkW_nav,.Dws9Sa_nav) {
  background:linear-gradient(160deg,var(--gem-app),var(--gem-card)); border-right:1px solid var(--gem-line);
}
html[data-dsh-gemini-theme="active"] :is(.wCInkW_navCell,.Dws9Sa_navCell):is(.wCInkW_active,.Dws9Sa_active) {
  background:var(--gem-accent); color:var(--gem-on-accent); box-shadow:0 3px 10px #32205722;
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
html[data-dsh-gemini-theme="active"] :where([role="dialog"],[role="alertdialog"],:is(.fO69Vq_page,.ZVcBiW_page)) :where(input:not([type="checkbox"]):not([type="range"]),textarea,select) {
  background:var(--gem-app); color:var(--gem-text); border-color:var(--gem-line);
}
`

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

exports.apply = function apply(ctx) {
  ctx.effect(() => {
    let disposeMounted
    const pending = new MutationObserver(() => {
      if (disposeMounted) return
      disposeMounted = mount()
      if (disposeMounted) pending.disconnect()
    })
    const mount = () => {
    const frame = document.querySelector(S.frame)
    const sidebar = document.querySelector(S.sidebar)
    const footer = document.querySelector(S.footer)
    const main = document.querySelector(S.main)
    const conversation = document.querySelector(S.conversation)
    if (!frame || !sidebar) return null
    const root = document.documentElement
    const priorTheme = root.getAttribute('data-dsh-gemini-theme')
    const priorTone = root.getAttribute('data-dsh-gemini-tone')
    const priorWide = root.getAttribute('data-dsh-gemini-wide')
    const priorPage = root.getAttribute('data-dsh-gemini-page')
    const priorScene = root.getAttribute('data-dsh-gemini-scene')
    for (const id of Object.values(ID)) document.getElementById(id)?.remove()
    const style = document.createElement('style')
    style.id = ID.style
    style.textContent = CSS + CSS_V2 + CSS_V3
    document.head.append(style)

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
    panel.innerHTML = '<h2>Gemini 紫夜</h2><label>启用星象主题 <input data-setting="enabled" type="checkbox"></label><label>显示角色装饰 <input data-setting="showArt" type="checkbox"></label><label for="dsh-gemini-intensity">角色强度（最高 250%） <output for="dsh-gemini-intensity">82%</output></label><input id="dsh-gemini-intensity" data-setting="intensity" type="range" min="0" max="250" step="1"><button type="button" data-action="reset">恢复默认设置</button>'
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
    const enabled = panel.querySelector('[data-setting="enabled"]')
    const showArt = panel.querySelector('[data-setting="showArt"]')
    const intensity = panel.querySelector('[data-setting="intensity"]')
    const output = panel.querySelector('output')
    const setRoot = (name, value) => { if (root.getAttribute(name) !== value) root.setAttribute(name, value) }
    const sync = () => {
      setRoot('data-dsh-gemini-theme', settings.enabled ? 'active' : 'off')
      setRoot('data-dsh-gemini-tone', hostTone())
      enabled.checked = settings.enabled
      showArt.checked = settings.showArt
      intensity.value = String(settings.intensity)
      output.value = `${settings.intensity}%`
      const mainRect = (document.querySelector(S.main) || main || frame).getBoundingClientRect()
      const wide = mainRect.width >= 1260
      const currentConversation = document.querySelector(S.conversation)
      const phase = currentConversation?.getAttribute('data-phase') || currentConversation?.closest('[data-phase]')?.getAttribute('data-phase')
      const hero = phase ? phase === 'hero' : !!document.querySelector(S.heroComposer)
      const artOpacity = Math.min(1, Math.max(0, settings.intensity / 100 * (hero ? 1 : .4)))
      setRoot('data-dsh-gemini-page', currentConversation ? 'conversation' : 'other')
      setRoot('data-dsh-gemini-scene', currentConversation ? (hero ? 'hero' : 'chat') : 'other')
      setRoot('data-dsh-gemini-wide', settings.enabled && wide ? 'yes' : 'no')
      art.hidden = !settings.enabled || !settings.showArt || !currentConversation || mainRect.width < 850
      companion.hidden = !settings.enabled || !settings.showArt || !currentConversation || mainRect.width < 850
      mascot.hidden = !settings.enabled || !settings.showArt
      themeFrame.hidden = !settings.enabled
      art.style.setProperty('--gem-art-opacity', String(artOpacity))
      companion.style.setProperty('--gem-art-opacity', String(artOpacity))
    }
    const update = () => { saveSettings(settings); sync() }
    const toggle = () => { panel.hidden = !panel.hidden; trigger.setAttribute('aria-expanded', String(!panel.hidden)); if (!panel.hidden) enabled.focus() }
    const change = event => {
      if (event.target === enabled) settings.enabled = enabled.checked
      if (event.target === showArt) settings.showArt = showArt.checked
      update()
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
    intensity.addEventListener('input', input)
    panel.querySelector('[data-action="reset"]').addEventListener('click', reset)
    document.addEventListener('keydown', escape)
    document.addEventListener('pointerdown', outside)
    sidebar.addEventListener('click', switchSession, true)
    window.addEventListener('resize', sync)
    const observer = new ResizeObserver(sync)
    observer.observe(main || frame)
    const routeObserver = new MutationObserver(records => {
      if (records.every(record => record.target.closest?.('[data-chat-flow],[contenteditable="true"]'))) return
      const currentFooter = document.querySelector(S.footer)
      const currentConversation = document.querySelector(S.conversation)
      if (currentFooter && (!trigger.isConnected || !mascot.isConnected)) currentFooter.prepend(mascot, trigger)
      if (currentConversation && (!art.isConnected || !companion.isConnected || !themeFrame.isConnected)) currentConversation.append(art, companion, themeFrame)
      sync()
    })
    routeObserver.observe(frame, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-phase'] })
    const timer = setInterval(() => {
      const tone = hostTone()
      if (root.getAttribute('data-dsh-gemini-tone') !== tone) root.setAttribute('data-dsh-gemini-tone', tone)
    }, 2500)
    sync()
    return () => {
      clearInterval(timer); clearTimeout(transitionTimer); observer.disconnect(); routeObserver.disconnect()
      trigger.removeEventListener('click', toggle)
      panel.removeEventListener('change', change)
      intensity.removeEventListener('input', input)
      document.removeEventListener('keydown', escape)
      document.removeEventListener('pointerdown', outside)
      sidebar.removeEventListener('click', switchSession, true)
      window.removeEventListener('resize', sync)
      art.remove(); companion.remove(); mascot.remove(); themeFrame.remove(); panel.remove(); trigger.remove(); style.remove()
      if (priorTheme === null) root.removeAttribute('data-dsh-gemini-theme')
      else root.setAttribute('data-dsh-gemini-theme', priorTheme)
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
    disposeMounted = mount()
    if (!disposeMounted) pending.observe(document.documentElement, { childList: true, subtree: true })
    return () => { pending.disconnect(); disposeMounted?.() }
  })
}
