"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
class TomlDocumentFormattingProvider {
    provideDocumentFormattingEdits(document, options) {
        // Implement your formatting logic here
        // Return an array of TextEdit objects representing the formatting changes
        // Example: Replace the entire document content with the formatted content
        const formattedContent = 'Your formatted TOML content here';
        const fullRange = new vscode.Range(document.positionAt(0), document.positionAt(document.getText().length));
        const edit = new vscode.TextEdit(fullRange, formattedContent);
        return [edit];
    }
}
function activate(context) {
    // Register the TOML formatter
    const tomlLanguageSelector = [{ language: 'toml', scheme: 'file' }];
    const formatterProvider = new TomlDocumentFormattingProvider();
    context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(tomlLanguageSelector, formatterProvider));
}
exports.activate = activate;
function deactivate() {
    // Clean up resources or perform any necessary cleanup tasks when the extension is deactivated
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map