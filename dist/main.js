"use strict";
// @ts-ignore
const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (msg) => {
    // Don't respond to self
    if (msg.author.id === "820793455894069278") {
        return;
    }
    const lowerCasedMessage = msg.content.toLowerCase();
    const intents = [
        {
            intent: 
        }
    ];
    switch (lowerCasedMessage) {
        case "test reply":
            msg.reply("Hello world");
            break;
        case "":
    }
    if (msg.content === "test reply") {
    }
    else if () {
        msg.reply("fuck $GEVO.");
    }
    else if (msg.content.toLowerCase().includes("fuck")) {
        const content = msg.content.toLowerCase();
        const ticker = content.substr(content.indexOf("$") + 1, content.indexOf("$") + 4);
        msg.reply(`fuck $${ticker.toUpperCase()}.`);
    }
    else if (msg.content.includes("820793455894069278") &&
        msg.content.includes("help")) {
        msg.reply("I'm running in beta mode right now. Commands that involve saving data will only persist for a short period of time.");
        msg.reply(`Features supported: 
      1. say fuck $TICKER to make me hate something.
      
      Coming soon:
      1. Make me track the inverse of a position by mentioning me and saying, <buy | sell> $TICKER
      2. Get my P/L by mentioning me and saying, show the gainz`);
    }
});
client.login("ODIwNzkzNDU1ODk0MDY5Mjc4.YE6VeQ.km0qvM7EDoBNxFiiQS1Bi_R4t_c");
console.log("client logged in");
console.log("client");
//# sourceMappingURL=main.js.map