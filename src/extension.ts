import { workspace, ExtensionContext } from 'vscode';

const config = workspace.getConfiguration('kusanagi');

export function activate(context: ExtensionContext) {
    config; // @ts-ignore
    context; // @ts-ignore
}
