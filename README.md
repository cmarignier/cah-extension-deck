# CAH Deck Extension

**CAH Deck Extension** is a Visual Studio Code extension designed to assist with editing and creating card files for "Cards Against Humanity" decks. This extension provides support for `.deck.json5` files, including syntax highlighting, templates, and automated card generation from text.

## Installation

### Requirements

- **Visual Studio Code** version 1.70.0 or later
- **Node.js** and **npm** (Node Package Manager) installed on your system

### Steps

1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Install **Node.js** and **npm** from [nodejs.org](https://nodejs.org).
3. Install the extension by following one of the options below:

#### Option 1: Install from the VSCode Marketplace

1. Go to the [VSCode Marketplace](https://marketplace.visualstudio.com/) and search for "CAH Deck Extension".
2. Click "Install".

#### Option 2: Install Manually from a `.vsix` file

1. Download the `.vsix` file from the [Releases page](https://github.com/your-repo/releases).
2. Open Visual Studio Code.
3. Press `Ctrl+Shift+P` and type `Extensions: Install from VSIX...`.
4. Select the downloaded `.vsix` file.

## Usage

1. **Open or Create a `.deck.json5` File**:
   - When you open a `.deck.json5` file, the extension automatically applies syntax highlighting.

2. **Create a New Card from Selected Text**:
   - Select any text in your `.deck.json5` file that follows the card format.
   - Press `Ctrl+Shift+P` and type `Create Card from Selected Text`.
   - The extension will convert the selected text into the appropriate card format.

3. **Generate a Card Template**:
   - Use the predefined snippets to quickly create templates for new "Call" or "Response" cards.

## Extension Commands

- **Create Card from Selected Text**: Converts the selected text into a properly formatted card.