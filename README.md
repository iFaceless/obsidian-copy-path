# Obsidian Copy Path Plugin

A simple yet practical Obsidian plugin that allows you to quickly copy the file path or directory path of the currently active note to the clipboard.

## Features

- 📄 **Copy File Path**: One-click copy of the full file path of the current note
- 📁 **Copy Directory Path**: One-click copy of the directory path containing the current note
- 🚀 **Quick Access**: Access via command palette for fast operation
- 💬 **Instant Feedback**: Shows notification when path is copied successfully
- 🎯 **Smart Quoting**: Automatically adds quotes around paths containing spaces for terminal compatibility

## Installation

### Method 1: Quick Install Script (Recommended)

1. Clone or download this project to your local machine
2. Run the following command in the project root directory:
   ```bash
   chmod +x quick_install
   ./quick_install ~/Library/Application\ Support/obsidian/plugins
   ```
3. The plugin directory path may vary by operating system:
   - **macOS**: `~/Library/Application Support/obsidian/plugins`
   - **Linux**: `~/.config/obsidian/plugins`
   - **Windows**: `%APPDATA%\Obsidian\plugins`

### Method 2: Manual Installation

1. Clone or download this project
2. Run the following commands in the project directory:
   ```bash
   npm install
   npm run build
   ```
3. Copy the following files to the `obsidian-copy-path` folder in your Obsidian plugins directory:
   - `main.js`
   - `manifest.json`
4. Restart Obsidian and enable the plugin in settings

## Usage

### Using Command Palette

1. Open the command palette (default shortcut: `Cmd/Ctrl + P`)
2. Search for the following commands:
   - `Copy file path of current note` - Copy the file path
   - `Copy directory path of current note` - Copy the directory path
3. Select a command to copy the path to the clipboard

### Use Cases

- 📝 Quickly locate note files in the terminal
- 🔗 Integrate with other tools that require file paths
- 📂 Fast access to the directory containing a note
- 🛠️ Use note paths in automation scripts

## Development

### Requirements

- Node.js 16+
- npm

### Development Mode

```bash
# Install dependencies
npm install

# Development mode (watch for file changes)
npm run dev

# Production build
npm run build
```

### Project Structure

```
obsidian-copy-path/
├── src/
│   └── main.ts          # Core plugin code
├── manifest.json        # Plugin metadata
├──.json         # npm configuration
├── tsconfig.json        # TypeScript configuration
├── esbuild.config.mjs   # Build configuration
└── quick_install        # Quick installation script
```

## License

MIT License

## Contributing

Issues and Pull Requests are welcome!

## Feedback

If you encounter any issues during use or have suggestions for improvement, please feel free to provide feedback through GitHub Issues.
