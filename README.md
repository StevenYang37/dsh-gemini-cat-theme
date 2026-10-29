# Gemini 紫夜 · DSH Desktop 主题

面向 **DeepSeek Harness（DSH）Desktop 0.2.0-rc.2 / 0.2.1-rc.3** 的非官方社区主题插件，适配 Windows 与 macOS。当前版本：**0.5.13**。本项目由社区制作，与 Google 或 DeepSeek 官方无关。

提供星象图书馆背景、紫金界面、浅色/深色皮肤切换，以及可独立开关的角色装饰。主题图像和角色素材随插件内置；作者创作的网页、文件和预览正文保持原样。设置保存在当前 DSH 用户数据中。

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

- 顶部模式控件根据顶栏结构与模式信息识别，不再仅依赖特定组件类名；覆盖未知类名、嵌套按钮和自定义模式，分别配对深浅色衬底与文字。
- DOM 查询与 CSS 共用完整构建映射，补齐页面根节点识别，避免只适配样式却遗漏页面状态。
- 主题设置增加“版本与兼容诊断”，显示运行版本和顶部模式标签匹配状态。

## 0.5.8 更新

- 对照官方组件发布包，补齐 Windows 标准模式标签与新对话模式按钮的真实组件类名，分别适配深浅色衬底和文字。
- 重新核对聊天、思考、工具、用量、后台任务、侧栏和插件组件，适配 37 组已核实的组件类名。
- 构建加入 115 个独立记录的官方组件角色样本，防止映射表之外的已知组件再次漏改。

## 0.5.7 更新

- 统一十组已知构建、65 个组件样式角色的适配，修复 Windows 顶部标题、模式、对话与轨迹标签缺少衬底的问题。
- 同步侧栏、输入区、设置、插件详情、菜单与悬停卡片的样式覆盖，保留深浅色各自配色、原生字号与布局。
- 构建时自动检查双构建选择器配对，避免新增规则只作用于一端；网页和文档正文保持原样。

## 0.5.6 更新

- 用量、时间和消息操作增加原生语义属性适配，深浅色下均常驻显示阅读衬底，移开鼠标后仍清晰可读。
- 修正 Windows 浅色顶栏侧栏开关图标对比度；新对话页的工作区与模式选择使用协调的淡彩底与深色文字，保留深色配色和原生字号。

## 0.5.5 更新

- 顶部后台任务计数新增与模式标签协调的阅读衬底，保留原生小字和高度。
- 分别优化深浅色下的普通、悬停、键盘聚焦及展开状态，提升文字与背景对比度。

## 0.5.4 更新

- 参照原生两行布局收紧顶部，标题与模式左对齐，保留原字号与星象风格。
- 消息滚动区在输入框上方结束；背景图保持完整，底栏不再与滚动正文重叠。
- 修正角色与正文的图层顺序，防止角色覆盖消息文字。
- 会话悬停卡片、辅助小字、文件卡片与插件详情分别适配深浅色，改善文字对比度。
- 网页、文档和文件预览中的作者内容保留原样；角色素材保持不变。

## 安装

在 DSH 插件页面搜索包名，或运行：

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

包名：`dsh-gemini-cat-theme`。当前版本为 **0.5.13**。安装完成后重启 DSH Desktop。


也可从 GitHub 下载源码并从本地安装。Windows PowerShell：

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

也可以在 DSH 的“插件”页面选择添加插件并输入同一包名。若命令行找不到 `dsh`，请使用 DSH Desktop 自带的 CLI；macOS 默认路径为：

```sh
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add dsh-gemini-cat-theme
```

使用自定义 `DSH_HOME` 启动 DSH 时，安装命令也应使用同一个数据目录；不要为主题新建数据目录或迁移会话。

## 功能

- **星象主题**：控制背景、紫金配色和边框。
- **角色装饰**：独立控制角色立绘，可不启用星象主题。
- **外观模式**：选择浅色、深色或跟随系统，主题随 DSH 外观切换。
- **角色强度**：默认 82%，最高 250%。
- **界面适配**：调整 DSH 自有界面元素；网页、文档及文件预览中的作者正文保留原样。

使用其他皮肤前先关闭 Gemini 星象主题。换回本主题时，先在原皮肤管理器中选择“官方默认”，再启用 Gemini。

## 更新与卸载

更新：

```sh
dsh plugin --profile desktop update dsh-gemini-cat-theme
```

卸载：

```sh
dsh plugin --profile desktop remove dsh-gemini-cat-theme
```

更新或卸载后请检查 DSH 插件页面中的启用状态，并按需重启应用。

## 反馈与贡献

欢迎下载、使用、fork，并通过 [GitHub Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions) 交流想法、提问或提交外观建议；请用 [GitHub Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues) 报告可复现的问题。

想提交代码修改，请 fork 本仓库、在自己的分支提交改动，再向 `main` 发起 Pull Request。公开仓库允许阅读、下载、fork 和提交 PR；只有维护者能直接写入上游分支，外部改动会先经过审阅。也欢迎在 Discussions 说明修改方案或贴出补丁。

## 兼容性

当前针对 **DSH Desktop 0.2.0-rc.2 / 0.2.1-rc.3** 的 Windows 与 macOS 版本适配；其他 DSH 版本尚未验证。DSH 更新后，宿主界面标识可能变化，届时需要更新适配。

## 许可与素材

原创插件代码使用 [MIT License](plugin/gemini-cat-theme/LICENSE)。**图片素材不包含在代码 MIT 许可内**：Gemini 形象由 [ZipZipPipe](https://www.bilibili.com/opus/1233069202138464289) 创作，本项目获得其用于非商业 DSH 主题插件的授权；授权不包含商业用途或无限制再许可。侧栏坐姿形象参考 ApprenTice 的 Gemini 二创作品，并按 CC BY-NC-SA 4.0 保留署名、来源及许可要求。下载、修改或再分发图片时，请遵守对应素材声明。

更多来源与授权细节见 [素材说明](plugin/gemini-cat-theme/ASSETS.md) 和插件目录中的 NOTICE、LICENSE 文件。Gemini 娘为社区同人创作，不是 Google 官方角色，也不代表 Google 背书；Deep Whale 仅作插件设计参考，其鲸鱼娘素材及许可没有套用于本项目。

## English

An unofficial community-made theme plugin for **DeepSeek Harness (DSH) Desktop 0.2.0-rc.2 / 0.2.1-rc.3**, for Windows and macOS. It includes independent starry-theme and character toggles, light/dark/system appearance, and bundled artwork. Authored webpage, document, and file-preview content is left unchanged.

**npm package:** `dsh-gemini-cat-theme` (version `0.5.4`). Install it in DSH by searching for the package name or running:

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

Restart DSH Desktop after installation. For updates, use `dsh plugin --profile desktop update dsh-gemini-cat-theme`; to remove it, use `dsh plugin --profile desktop remove dsh-gemini-cat-theme`.

Feedback and questions are welcome in [Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions); report reproducible bugs in [Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues). To contribute code, fork the repository, make changes on your branch, and open a Pull Request. Only maintainers can push directly to the upstream repository. Code is MIT-licensed; image assets have separate terms. See [ASSETS.md](plugin/gemini-cat-theme/ASSETS.md) before reusing or redistributing artwork.
