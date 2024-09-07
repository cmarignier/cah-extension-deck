# CAH Deck Extension

**CAH Deck Extension** is a Visual Studio Code extension designed to assist with editing and creating card files for "Cards Against Humanity" decks. This extension provides support for `.deck.json5` files, including syntax highlighting, templates, and automated card generation from text.

## [0.0.2] - 2024-09-07

Update package infos and add commands.

## Features

- **Create Call Cards**:
  - **Starting with Blank**: Inserts a "Call" card with a blank at the start.
  - **Ending with Blank**: Inserts a "Call" card with a blank at the end.
  - **Blank in the Middle**: Inserts a "Call" card with a blank in the middle.
- **Create Response Cards**: Inserts a "Response" card template.

## Usage

### New Commands

- **Create Call Card (Starting with Blank)**: Adds a call card with a blank at the start.
- **Create Call Card (Ending with Blank)**: Adds a call card with a blank at the end.
- **Create Call Card (Blank in the Middle)**: Adds a call card with a blank in the middle.
- **Create Response Card**: Adds a response card template.


## [0.0.1] - 2024-09-07

## Features

- **File Association**: Automatically recognizes `.deck.json5` files and applies custom syntax highlighting.
- **Syntax Highlighting**: Differentiates between text, formatting commands, and card structure to enhance readability.
- **Template Generation**: Easily generate card templates for new "Call" or "Response" cards.
- **Automatic Card Creation**: Convert selected text into a formatted card structure using the "Create Card from Selected Text" command.

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
  
## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3.


[0.0.2]: https://github.com/cmarignier/cah-extension-deck/compare/0.0.1...0.0.2
[0.0.1]: https://github.com/cmarignier/cah-extension-deck/releases/tag/0.0.1