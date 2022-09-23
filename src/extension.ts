import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';

const config = workspace.getConfiguration('kusanagi');

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    config; // @ts-ignore
    client; // @ts-ignore
    context; // @ts-ignore
}
