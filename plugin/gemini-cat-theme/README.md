# Gemini 紫夜 · DSH Desktop 主题

**版本 0.5.1** · 面向 **DeepSeek Harness (DSH) Desktop 0.2.0-rc.2** 的非官方社区主题插件，适配 Windows 与 macOS。

星象主题和角色装饰可独立开关，支持浅色、深色、跟随系统三种外观。插件包内置背景与角色素材，无需外部图床。样式只处理 DSH 自有界面，侧栏网页、文件预览及文档中的作者内容保持原样。

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

包名为 `dsh-gemini-cat-theme`，当前版本为 **0.5.1**。安装后重启 DSH Desktop。macOS 找不到 `dsh` 命令时，可使用：

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

An unofficial community theme for **DeepSeek Harness Desktop 0.2.0-rc.2** (Windows and macOS). The starry theme and character decoration can be toggled independently. Light, dark, and system appearance are supported. DSH-owned chrome is themed; authored webpage, document, and file-preview content remains unchanged.

Install by searching for `dsh-gemini-cat-theme` in DSH Plugins or run:

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

The npm package is `dsh-gemini-cat-theme` (version `0.5.1`). Restart DSH Desktop after installation. Update with `dsh plugin --profile desktop update dsh-gemini-cat-theme`; remove with `dsh plugin --profile desktop remove dsh-gemini-cat-theme`.

Questions and ideas: [Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions). Bug reports: [Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues). Contributions are welcome via pull requests from forks; only maintainers can push to the upstream repository.

The plugin code is MIT-licensed. Image assets use separate terms, including non-commercial and attribution requirements. See [ASSETS.md](ASSETS.md) before reusing artwork.
