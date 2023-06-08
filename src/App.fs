module TomlParser

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

// A class that implement DocumentFormattingEditProvider
type DocumentFormattingProvider() =
    interface vscode.DocumentFormattingEditProvider with
        member this.ProvideDocumentFormattingEdits (document: TextDocument) (options: FormattingOptions) (token: CancellationToken) =
            let text = document.getText()
            let result = TomlParser.parse text
            let edits = 
                match result with
                | Ok toml -> 
                    let formatted = toml |> TomlFormatter.format
                    let diff = DiffUtil.diff text formatted
                    diff |> List.map (fun d -> TextEdit(d.range, d.text))
                | Error e -> []
            Promise.resolve edits
