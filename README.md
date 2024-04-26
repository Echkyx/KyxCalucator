## Discord Bot

This Discord bot is built with Node.js using the Discord.js library. It sends messages to a Discord channel at a specified interval.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install dependencies:**

   ```bash
   cd your-repository
   npm install
   ```

### Setting Up the Discord Bot

1. **Create a Discord bot:**

   - Go to the [Discord Developer Portal](https://discord.com/developers/applications).
   - Click on "New Application" and give your bot a name.
   - Navigate to the "Bot" tab and click "Add Bot".
   - Copy the bot token. This will be used to authenticate your bot with Discord's API.

2. **Invite the bot to your server:**

   - Still in the Discord Developer Portal, go to the "OAuth2" tab.
   - In the "OAuth2 URL Generator" section, select the `bot` scope.
   - Copy the generated URL and paste it into your browser.
   - Select a server where you have permission to add bots and follow the prompts to invite the bot.

### Configuration

1. **Configure the bot token:**

   - Open the `config.json` file.
   - Replace `'YOUR_BOT_TOKEN'` with the bot token you copied earlier.

### Usage

1. **Start the bot:**

   ```bash
   node bot.js
   ```

2. **Interact with the bot:**

   - Once the bot is running, go to your Discord server.
   - Type `!startSpam` in any channel to start sending messages every second.
   - Type `!stopSpam` to stop sending messages.

### Support


