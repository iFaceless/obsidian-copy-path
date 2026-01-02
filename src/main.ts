import { Plugin, Notice, TFile } from 'obsidian';

export default class CopyPathPlugin extends Plugin {
	async onload() {
		// 添加复制文件路径命令
		this.addCommand({
			id: 'copy-file-path',
			name: 'Copy file path of current note',
			callback: () => {
				this.copyFilePath();
			}
		});

		// 添加复制目录路径命令
		this.addCommand({
			id: 'copy-directory-path',
			name: 'Copy directory path of current note',
			callback: () => {
				this.copyDirectoryPath();
			}
		});

		console.log('Copy Path Plugin loaded');
	}

	onunload() {
		console.log('Copy Path Plugin unloaded');
	}

	copyFilePath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		const filePath = activeFile.path;
		this.copyToClipboard(filePath, 'File path copied');
	}

	copyDirectoryPath() {
		const activeFile = this.app.workspace.getActiveFile();
		
		if (!activeFile) {
			new Notice('No active file');
			return;
		}

		// 获取文件所在目录
		const directoryPath = activeFile.parent?.path || '';
		this.copyToClipboard(directoryPath, 'Directory path copied');
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
