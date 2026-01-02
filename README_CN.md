# Obsidian Copy Path Plugin [中文]

一个简单实用的 Obsidian 插件，用于快速复制当前笔记的文件路径或目录路径到剪贴板。

## 功能特性

- 📄 **复制文件路径**：一键复制当前笔记的完整文件路径
- 📁 **复制目录路径**：一键复制当前笔记所在目录的路径
- 🚀 **快捷命令**：通过命令面板快速访问
- 💬 **即时反馈**：复制成功后显示通知提示
- 🎯 **智能引用**：自动为包含空格的路径添加引号，确保终端兼容性

## 安装方法

### 方法一：使用快速安装脚本（推荐）

1. 克隆或下载本项目到本地
2. 在项目根目录下运行：
   ```bash
   chmod +x quick_install
   ./quick_install ~/Library/Application\ Support/obsidian/plugins
   ```
3. 根据你的操作系统，插件目录路径可能不同：
   - **macOS**: `~/Library/Application Support/obsidian/plugins`
   - **Linux**: `~/.config/obsidian/plugins`
   - **Windows**: `%APPDATA%\Obsidian\plugins`

### 方法二：手动安装

1. 克隆或下载本项目
2. 在项目目录运行：
   ```bash
   npm install
   npm run build
   ```
3. 将以下文件复制到你的 Obsidian 插件目录下的 `obsidian-copy-path` 文件夹中：
   - `main.js`
   - `manifest.json`
4. 重启 Obsidian 并在设置中启用插件

## 使用方法

### 通过命令面板

1. 打开命令面板（默认快捷键：`Cmd/Ctrl + P`）
2. 搜索以下命令：
   - `Copy file path of current note` - 复制文件路径
   - `Copy directory path of current note` - 复制目录路径
3. 选择命令即可将路径复制到剪贴板

### 使用场景

- 📝 在终端中快速定位笔记文件
- 🔗 与其他工具集成时需要文件路径
- 📂 快速访问笔记所在的目录
- 🛠️ 自动化脚本中使用笔记路径

## 开发

### 环境要求

- Node.js 16+
- npm

### 开发模式

```bash
# 安装依赖
npm install

# 开发模式（自动监听文件变化）
npm run dev

# 生产构建
npm run build
```

### 项目结构

```
obsidian-copy-path/
├── src/
│   └── main.ts          # 插件核心代码
├── manifest.json        # 插件元信息
├── package.json         # npm 配置
├── tsconfig.json        # TypeScript 配置
├── esbuild.config.mjs   # 构建配置
└── quick_install        # 快速安装脚本
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 反馈

如果你在使用过程中遇到任何问题或有改进建议，欢迎通过 GitHub Issues 反馈。
