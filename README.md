# Gemini 紫夜 · DSH Desktop 主题

面向 **DSH Desktop 0.2.0-rc.2** 的非官方 Gemini 社区同人主题插件。当前版本 **0.4.44**，包含 Windows 与 macOS 界面标识适配。

星象图书馆背景、紫色侧栏、金色边框、双角色装饰及高清侧栏坐姿形象；支持明暗模式、主题开关、角色显示开关和最高 250% 的角色强度。角色图片随包内置，运行时无需访问图床。

## 下载与安装

本插件尚未发布到 npm。先克隆本仓库，完整插件位于 `plugin/gemini-cat-theme/`；可直接从该本地目录安装：

Windows（PowerShell）：

```powershell
git clone https://github.com/StevenYang37/dsh-gemini-cat-theme.git
dsh plugin --profile desktop add "file:C:/path/to/dsh-gemini-cat-theme/plugin/gemini-cat-theme"
```

macOS：

```sh
git clone https://github.com/StevenYang37/dsh-gemini-cat-theme.git
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add "file:/path/to/dsh-gemini-cat-theme/plugin/gemini-cat-theme"
```

把示例路径换成实际克隆目录。

如果平时启动 DSH 使用自定义 `DSH_HOME`，安装命令也须使用同一个值，避免安装到另一个数据目录。不要为安装主题新建数据目录或迁移会话。

安装后重启 DSH Desktop，在左栏底部点击 **Gemini 紫夜** 打开设置。如果包已安装却没有设置按钮，请在 DSH 的“插件”页面确认该插件已启用；检查当前 desktop profile 是否确实加载了此包。

## 使用与切换

- **启用星象主题**：控制星象背景、紫色配色和金边，不影响角色开关。
- **显示角色装饰**：独立控制角色立绘和侧栏形象，无需开启星象主题。
- **角色强度**：默认 82%，最高 250%。
- **恢复默认设置**：恢复上述默认值。

主题和角色开关互相独立，可只开启主题、只开启角色、同时开启或全部关闭。

使用其他皮肤前先关闭 Gemini 星象主题。换回 Gemini 时，先通过原皮肤管理器选择“官方默认”，再开启 Gemini。Gemini 当前使用独立设置入口，尚未加入 Deep Whale 皮肤管理列表。

更新时用相同命令安装新包，检查插件页面的启用状态，然后重启。卸载：

```sh
dsh plugin --profile desktop remove dsh-gemini-cat-theme
```

macOS 没有全局 `dsh` 命令时，使用上面完整 CLI 路径替换命令中的 `dsh`。

## 兼容范围

针对 DSH Desktop 0.2.0-rc.2 的 Windows 与 macOS 构建提供适配；其他版本尚未验证。主题使用宿主界面样式标识，DSH 更新后可能需要重新适配。

插件只调整外观；不修改模型请求、账号、密钥或会话内容。设置保存于当前桌面用户数据的本地存储。

## 源码与构建

`plugin/gemini-cat-theme/` 包含完整插件源码、构建脚本、素材、许可文件和已构建客户端；`dist/` 提供安装包。需要 Node.js 和 pnpm；这会在本地生成 `.tgz`，不必提交到仓库：

```sh
cd plugin/gemini-cat-theme
node scripts/build-client.mjs
pnpm pack --pack-destination ../../dist
```

## 形象作者与授权

**Gemini 形象原作者为 [ZipZipPipe](https://www.bilibili.com/opus/1233069202138464289)。本项目已取得原作者对非商业 DSH 皮肤插件用途的授权。**授权不包含商业用途或无限制再许可。该形象为社区同人创作，不是 Google 官方角色，也不代表 Google 背书。

侧栏坐姿形象参考 ApprenTice 的 Gemini 二创制作，按 CC BY-NC-SA 4.0 保留相应署名、来源与许可；其他素材说明见 [ASSETS.md](plugin/gemini-cat-theme/ASSETS.md) 及素材目录中的 NOTICE 和 LICENSE 文件。界面中不再展示作者标签，署名与授权集中保留在本说明和随包文件中。

原创插件代码采用 [MIT](plugin/gemini-cat-theme/LICENSE)。图片不适用代码的 MIT 许可；下载、分享和使用完整插件须遵守各素材的适用授权，保留相关声明。Deep Whale 仅作为插件设计参考，其鲸鱼娘素材和许可没有套用到 Gemini 形象。
