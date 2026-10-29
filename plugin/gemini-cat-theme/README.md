# Gemini 紫夜 · DSH Desktop 主题

**版本 0.5.14** · 面向 **DeepSeek Harness (DSH) Desktop 0.2.0-rc.2 / 0.2.1-rc.3** 的非官方社区主题插件，适配 Windows 与 macOS。

星象主题和角色装饰可独立开关，支持浅色、深色、跟随系统三种外观。插件包内置背景与角色素材，无需外部图床。样式只处理 DSH 自有界面，侧栏网页、文件预览及文档中的作者内容保持原样。

## 0.5.14 更新

- 调整新会话页面选择按钮与输入框装饰的间距，避免相互遮挡。

## 0.5.13 更新

- 补回深色模式下新会话页面工作区和模式选择按钮的背景，保持文字、图标及交互状态清晰。

## 0.5.12 更新

- 适配 DSH Desktop 0.2.1-rc.3 更新后的主界面与组件标识，修复插件显示运行中但主题没有加载的问题。
- 根据 DSH 自带的组件样式识别不同平台构建，覆盖聊天、输入框、侧栏、插件页和设置等界面。

## 0.5.11 更新

- 未选择模型时的占位按钮补齐深浅色文字、箭头及衬底；选择具体模型后的样式保持原样。
- 底部轮次、速度、用量、缓存命中及上下文统计按原生语义标记适配，常驻显示与 Mac 配套的文字和小块衬底。

## 0.5.10 更新

- 修正会话位于面板时被误判为文件预览的排除条件，恢复顶部模式标签、运行过程及底部信息的适配。
- 提升队列卡片图标与文字的对比度，修正 Windows 菜单实际材质层的底色。
- 发送／停止圆形按钮采用更浅的紫色与深色图标，保留原生尺寸和禁用状态。

## 0.5.9 更新

- DOM 查询与样式共用完整构建映射，修复已适配 CSS 但页面状态识别仍遗漏部分根节点的问题。

- 顶部模式控件按 DSH 顶栏结构及模式信息识别，摆脱对构建类名的依赖；深浅色均使用模式标签的配套衬底和文字。
- 支持图标与文字分开嵌套的控件，避免重复衬底；不扫描聊天正文或侧栏作者内容。
- 主题设置新增“版本与兼容诊断”，可确认运行版本及顶部模式标签匹配状态。

## 0.5.8 更新

- 根据官方组件发布包补齐模式标签与新对话模式按钮的真实类名，修复 Windows“标准模式”缺少衬底的问题。
- 重新按组件模块和导出角色比对聊天、工具、侧栏、插件、文件及后台任务组件，扩充构建适配；构建检查覆盖所有已核实的映射成员。

## 0.5.7 更新

- 统一十组已知构建的组件选择器，补齐 Windows 标题、模式标签、对话与轨迹选项卡的衬底及紧凑布局。
- 同步检查侧栏、输入区、新对话页、插件详情、设置导航、菜单与会话悬停卡片的双构建规则，避免后续样式只覆盖一个构建。
- 保留深浅色各自配色与原生字号，网页及文档正文不参与兼容替换。

## 0.5.6 更新

- 消息操作与用量、时间信息通过原生语义属性适配不同构建，深浅色均常驻显示衬底，不再依赖悬停。

- 修复 Windows 浅色顶栏的侧栏开关图标对比度，保留深色模式配色。
- 新对话页浅色工作区、模式选择采用配套淡彩底与深色字，覆盖图标和悬停、聚焦、展开状态，保留原生字号。

## 0.5.5 更新

- 顶部后台任务计数补上与模式标签协调的衬底，保留原生小字；分别适配深浅色、悬停、键盘聚焦和展开状态。

## 0.5.4 更新

- 参照原生两行布局收紧顶部，标题与模式左对齐；缩小星角与输入框饰条，减少底栏留白，保留原字号并增加对话可视高度。

- 会话悬停卡片分别采用深浅色配套背景和文字，覆盖原生固定白字与灰字，改善标题、路径、时间和状态的清晰度。

- 为独立底栏布局补齐正文图层层级，角色保持在消息卡片下方，防止文字与角色叠印。

- 消息滚动视口在输入区上方结束，输入框与底栏独立定位；保留背景图和原生滚动节点，不增加实色遮挡，不依赖滚动事件或动画更新裁剪。

## 0.5.3 更新

- 为模型重试提示增加配对衬底，修复改动文件卡片的文件名和增删统计颜色。
- 修复浅色源码预览与侧栏顶栏配色，保留网页、文档和图片内容的原始呈现。
- 为底部运行状态和统计留出边框内安全间距，窄窗口下允许换行。
- 调柔 Windows 浅色顶栏紫色，深色顶栏保持原样。

- 新建对话页欢迎标题的背景随内容收紧并居中，深浅色采用相同尺寸规则。

- 浅色插件列表与详情页统一为奶紫背景、深紫文字，修复说明和字段标签对比不足。
- 返回“插件”的导航保持透明，避免整行出现不同色块；深色配色保持独立。
- 修复新建对话页浅底金字及模型下拉图标不清晰的问题；深色模式保持不变。

## 0.5.2 更新

- 顶部采用星象书签设计：圆弧星标标题、圆润模式印章与书签标签；保留原有字号，分别适配深浅色。
- 标题、预设与选中标签采用不同的协调配色，保留原有顶部栏结构。
- 轨迹视图为列表保留边框内侧间距，避免左右装饰线覆盖内容。
- 调整原生顶部栏留白，完整显示标题与模式标签的圆弧边缘。

## 0.5.1 更新

- 为思考过程、工具调用、用时和用量信息添加协调的阅读衬底，保留辅助小字。
- 修复折叠过程留下空白长条、部分操作信息需要悬停才显示的问题。
- 改善浅色模式的复制与分支图标，以及深浅色模式的悬停提示对比度。
- 保留角色素材、原有顶部栏和侧栏网页、文件中的作者内容。

## 安装

在 DSH 插件页面搜索 `dsh-gemini-cat-theme`，或运行：

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

包名为 `dsh-gemini-cat-theme`，当前版本为 **0.5.5**。安装后重启 DSH Desktop。macOS 找不到 `dsh` 命令时，可使用：

```sh
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dsh-gemini-cat-theme
```

也可克隆 GitHub 仓库并从源码目录安装。Windows PowerShell：

```powershell
git clone https://github.com/StevenYang37/dsh-gemini-cat-theme.git
cd dsh-gemini-cat-theme
dsh plugin --profile desktop add "file:$((Resolve-Path .\plugin\gemini-cat-theme).Path)"
```

macOS：

```sh
git clone https://github.com/StevenYang37/dsh-gemini-cat-theme.git
cd dsh-gemini-cat-theme
dsh plugin --profile desktop add "file:$PWD/plugin/gemini-cat-theme"
```

如果使用自定义 `DSH_HOME`，请沿用相同的数据目录。

## 使用

- **启用星象主题**：控制星象背景、紫金配色与边框。
- **显示角色装饰**：独立控制角色形象。
- **外观模式**：浅色、深色或跟随系统。
- **角色强度**：默认 82%，最高 250%。
- **文字衬底**：思考过程（含展开内容）、工具调用、思考用时、运行状态和用量信息恢复原版辅助小字，使用柔和的分组阅读底板，时间与状态使用紧凑衬底，操作与时间信息无需悬停即可显示；深浅色分别配色。

更新：`dsh plugin --profile desktop update dsh-gemini-cat-theme`。卸载：`dsh plugin --profile desktop remove dsh-gemini-cat-theme`。更新或卸载后按需重启 DSH。

## 反馈与贡献

欢迎使用、fork 和提出改进建议：[Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions)。可复现问题请提交到 [Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues)。代码贡献请从 fork 发起 Pull Request；上游仓库仅维护者可直接写入。欢迎在讨论区贴出补丁或说明修改方案。

## 授权

原创代码采用 [MIT License](LICENSE)。图片素材有独立授权限制：Gemini 形象由 [ZipZipPipe](https://www.bilibili.com/opus/1233069202138464289) 创作，项目获得非商业 DSH 主题插件用途授权，不含商业用途或无限制再许可。侧栏坐姿形象参考 ApprenTice 的 Gemini 二创作品，按 CC BY-NC-SA 4.0 保留署名、来源与许可。使用或再分发素材前，请阅读 [ASSETS.md](ASSETS.md) 及 assets 中的 NOTICE/LICENSE。

该形象是社区同人创作，不是 Google 官方角色，也不代表 Google 背书。Deep Whale 仅作插件设计参考，其鲸鱼娘素材和授权不适用于本项目。

## English

An unofficial community theme for **DeepSeek Harness Desktop 0.2.0-rc.2 / 0.2.1-rc.3** (Windows and macOS). The starry theme and character decoration can be toggled independently. Light, dark, and system appearance are supported. DSH-owned chrome is themed; authored webpage, document, and file-preview content remains unchanged.

Install by searching for `dsh-gemini-cat-theme` in DSH Plugins or run:

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

The npm package is `dsh-gemini-cat-theme` (version `0.5.5`). Restart DSH Desktop after installation. Update with `dsh plugin --profile desktop update dsh-gemini-cat-theme`; remove with `dsh plugin --profile desktop remove dsh-gemini-cat-theme`.

Questions and ideas: [Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions). Bug reports: [Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues). Contributions are welcome via pull requests from forks; only maintainers can push to the upstream repository.

The plugin code is MIT-licensed. Image assets use separate terms, including non-commercial and attribution requirements. See [ASSETS.md](ASSETS.md) before reusing artwork.
