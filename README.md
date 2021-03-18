# inverse-sly-bot

For when you need to track the P/L of the new Scott Galloway.

The Portfolio tracking functionality is very early WIP, mostly this repo sets up a TS Discord bot able to parse responses.

Note that you can run this in your own server by adding the bot in the Discord bot dashboard, and generating a token and replacing the hard coded example token.

## Starting the project

If you don't want to install anything and just run the server, just type yarn start as the dist is included.

To test the functionality in a server, you'll need to use https://discordapp.com/oauth2/authorize?client_id= 820793455894069278&scope=bot to add the bot to your server. You'll then be able to add this to any server you have sufficient permission on. You also need to use a unique client ID for the bot, which you'll need to generate on the Discord developer portal. Or ask me for one, as committing it to this repo will cause Discord's scanners to disable the ID.
