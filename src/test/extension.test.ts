import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Create Call Card (Starting with Blank) Command', async () => {
    await vscode.commands.executeCommand('extension.createCallCardStartBlank');
    const editor = vscode.window.activeTextEditor;
    assert.ok(editor, 'No active editor');
    const content = editor?.document.getText();
    assert.ok(content?.includes('[\n  {},\n  "some text."\n]'), 'Call card template not inserted correctly');
  });
});
