import * as vscode from 'vscode';

class TomlDocumentFormattingProvider implements vscode.DocumentFormattingEditProvider {
  provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions): vscode.TextEdit[] {
    // Implement your formatting logic here
    // Return an array of TextEdit objects representing the formatting changes

    // Example: Replace the entire document content with the formatted content
    const formattedContent = 'Your formatted TOML content here';
    const fullRange = new vscode.Range(
      document.positionAt(0),
      document.positionAt(document.getText().length)
    );
    const edit = new vscode.TextEdit(fullRange, formattedContent);
    return [edit];
  }
}

export function activate(context: vscode.ExtensionContext) {
  // Register the TOML formatter
  const tomlLanguageSelector: vscode.DocumentSelector = [{ language: 'toml', scheme: 'file' }];
  const formatterProvider = new TomlDocumentFormattingProvider();
  context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(tomlLanguageSelector, formatterProvider));
}

export function deactivate() {
  // Clean up resources or perform any necessary cleanup tasks when the extension is deactivated
}
