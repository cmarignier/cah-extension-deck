import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  // Register commands for each new functionality
  const commands = [
    vscode.commands.registerCommand('extension.createCallCardStartBlank', createCallCardStartBlank),
    vscode.commands.registerCommand('extension.createCallCardEndBlank', createCallCardEndBlank),
    vscode.commands.registerCommand('extension.createCallCardMiddleBlank', createCallCardMiddleBlank),
    vscode.commands.registerCommand('extension.createResponseCard', createResponseCard),
  ];

  context.subscriptions.push(...commands);
}

// Function to create a "Call" card starting with a blank
function createCallCardStartBlank() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const template = `[
  {},
  "some text."
]`;
    insertCardTemplate(editor, template);
  }
}

// Function to create a "Call" card ending with a blank
function createCallCardEndBlank() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const template = `[
  "some text ",
  {}
]`;
    insertCardTemplate(editor, template);
  }
}

// Function to create a "Call" card with a blank in the middle
function createCallCardMiddleBlank() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const template = `[
  "some text ",
  {},
  " more text."
]`;
    insertCardTemplate(editor, template);
  }
}

// Function to create a "Response" card
function createResponseCard() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const template = `[
  "response text"
]`;
    insertCardTemplate(editor, template);
  }
}

// Helper function to insert the template into the active editor
function insertCardTemplate(editor: vscode.TextEditor, template: string) {
  editor.edit(editBuilder => {
    editBuilder.insert(editor.selection.active, template);
  });
}

export function deactivate() {}
