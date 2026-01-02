import { Plugin, Notice, TFile } from 'obsidian';

export default class CopyPathPlugin extends Plugin {
	async onload() {
		// 添加复制相对文件路径命令
		this.addCommand({
			id: 'copy-relative-file-path',
			name: 'Copy relative file path',
			callback: () => {
				this.copyRelativeFilePath();
			}
		});

		// 添加复制绝对文件路径命令
		this.addCommand({
			id: 'copy-absolute-file-path',
			name: 'Copy absolute file path',
			callback: () => {
				this.copyAbsoluteFilePath();
			}
		});

		// 添加复制相对目录路径命令
		this.addCommand({
			id: 'copy-relative-directory-path',
			name: 'Copy relative directory path',
			callback: () => {
				this.copyRelativeDirectoryPath();
			}
		});

		// 添加复制绝对目录路径命令
		this.addCommand({
			id: 'copy-absolute-directory-path',
			name: 'Copy absolute directory path',
			callback: () => {
				this.copyAbsoluteDirectoryPath();
			}
		});

		console.log('Copy Path Plugin loaded');
	}

	onunload() {
		console.log('Copy Path Plugin unloaded');
	}

	copyRelativeFilePath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		const filePath = this.quotePath(activeFile.path);
		this.copyToClipboard(filePath, 'Relative file path copied');
	}

	copyAbsoluteFilePath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		const filePath = this.app.vault.adapter.getFullPath(activeFile.path);
		const quotedPath = this.quotePath(filePath);
		this.copyToClipboard(quotedPath, 'Absolute file path copied');
	}

	copyRelativeDirectoryPath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		const directoryPath = activeFile.parent?.path || '';
		const quotedPath = this.quotePath(directoryPath);
		this.copyToClipboard(quotedPath, 'Relative directory path copied');
	}

	copyAbsoluteDirectoryPath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		const parent = activeFile.parent;
		if (parent) {
			const directoryPath = this.app.vault.adapter.getFullPath(parent.path);
			const quotedPath = this.quotePath(directoryPath);
			this.copyToClipboard(quotedPath, 'Absolute directory path copied');
		} else {
			new Notice('No parent directory');
		}
	}

	quotePath(path: string): string {
		// 如果路径包含空格或特殊字符，添加双引号
		if (/\s/.test(path)) {
			return `"${path}"`;
		}
		return path;
	}

	copyToClipboard(text: string, successMessage: string) {
		navigator.clipboard.writeText(text).then(() => {
			new Notice(successMessage + ': ' + text);
		}).catch(err => {
			new Notice('Failed to copy to clipboard');
			console.error('Failed to copy:', err);
		});
	}
}
