'use strict';
import * as vscode from 'vscode';
import Formatter from './formatter';

export function activate(context: vscode.ExtensionContext) {

  var formatter = new Formatter();

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand( "wwm.aligncode", (editor)=>{
      formatter.process( editor );
    } )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
