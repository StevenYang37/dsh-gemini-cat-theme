# Gemini 紫夜 · DSH Desktop 主题

面向 **DeepSeek Harness（DSH）Desktop 0.2.0-rc.2** 的非官方社区主题插件，适配 Windows 与 macOS。当前版本：**0.5.2**。本项目由社区制作，与 Google 或 DeepSeek 官方无关。

提供星象图书馆背景、紫金界面、浅色/深色皮肤切换，以及可独立开关的角色装饰。主题图像和角色素材随插件内置；作者创作的网页、文件和预览正文保持原样。设置保存在当前 DSH 用户数据中。

## 0.5.2 更新

- 顶部采用星象书签设计，保留原有字号，深浅色分别配色。
- 为标题与模式标签保留顶部留白，完整显示圆弧和星标。
- 轨迹视图增加边框内侧间距，避免装饰线覆盖列表。
- 包含 0.5.1 的辅助文字衬底、复制/分支图标和悬停提示对比度修正。
- 角色素材与侧栏中的作者内容保持原样。

## 安装

在 DSH 插件页面搜索包名，或运行：

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

包名：`dsh-gemini-cat-theme`。当前版本为 **0.5.2**。安装完成后重启 DSH Desktop。


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

当前针对 **DSH Desktop 0.2.0-rc.2** 的 Windows 与 macOS 版本适配；其他 DSH 版本尚未验证。DSH 更新后，宿主界面标识可能变化，届时需要更新适配。

## 许可与素材

原创插件代码使用 [MIT License](plugin/gemini-cat-theme/LICENSE)。**图片素材不包含在代码 MIT 许可内**：Gemini 形象由 [ZipZipPipe](https://www.bilibili.com/opus/1233069202138464289) 创作，本项目获得其用于非商业 DSH 主题插件的授权；授权不包含商业用途或无限制再许可。侧栏坐姿形象参考 ApprenTice 的 Gemini 二创作品，并按 CC BY-NC-SA 4.0 保留署名、来源及许可要求。下载、修改或再分发图片时，请遵守对应素材声明。

更多来源与授权细节见 [素材说明](plugin/gemini-cat-theme/ASSETS.md) 和插件目录中的 NOTICE、LICENSE 文件。Gemini 娘为社区同人创作，不是 Google 官方角色，也不代表 Google 背书；Deep Whale 仅作插件设计参考，其鲸鱼娘素材及许可没有套用于本项目。

## English

An unofficial community-made theme plugin for **DeepSeek Harness (DSH) Desktop 0.2.0-rc.2**, for Windows and macOS. It includes independent starry-theme and character toggles, light/dark/system appearance, and bundled artwork. Authored webpage, document, and file-preview content is left unchanged.

**npm package:** `dsh-gemini-cat-theme` (version `0.5.2`). Install it in DSH by searching for the package name or running:

```sh
dsh plugin --profile desktop add dsh-gemini-cat-theme
```

Restart DSH Desktop after installation. For updates, use `dsh plugin --profile desktop update dsh-gemini-cat-theme`; to remove it, use `dsh plugin --profile desktop remove dsh-gemini-cat-theme`.

Feedback and questions are welcome in [Discussions](https://github.com/StevenYang37/dsh-gemini-cat-theme/discussions); report reproducible bugs in [Issues](https://github.com/StevenYang37/dsh-gemini-cat-theme/issues). To contribute code, fork the repository, make changes on your branch, and open a Pull Request. Only maintainers can push directly to the upstream repository. Code is MIT-licensed; image assets have separate terms. See [ASSETS.md](plugin/gemini-cat-theme/ASSETS.md) before reusing or redistributing artwork.
