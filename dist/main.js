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
            intent: () => lowerCasedMessage.includes("gevo"),
            reply: () => "fuck $GEVO",
        },
        {
            intent: () => lowerCasedMessage === "test reply",
            reply: () => "Hello world",
        },
        {
            intent: () => lowerCasedMessage.includes("fuck"),
            reply: () => {
                const ticker = lowerCasedMessage.substr(lowerCasedMessage.indexOf("$") + 1, lowerCasedMessage.indexOf("$") + 4);
                return `fuck $${ticker.toUpperCase()}.`;
            },
        },
        {
            intent: () => msg.content.includes("820793455894069278") &&
                msg.content.includes("help"),
            reply: () => {
                return [
                    "I'm running in beta mode right now. Commands that involve saving data will only persist for a short period of time.",
                    `Features supported: 
          1. say fuck $TICKER to make me hate something.
          
          Coming soon:
          1. Make me track the inverse of a position by mentioning me and saying, <buy | sell> $TICKER
          2. Get my P/L by mentioning me and saying, show the gainz`,
                ];
            },
        },
        {
            intent: () => msg.content.includes("820793455894069278"),
            reply: () => {
                return "That's not something I know how to handle quite yet.";
            },
        },
    ];
    for (let index = 0; index < intents.length - 1; index++) {
        const hasIntent = intents[index].intent();
        // We get plenty of messages that have nothing to do with the bot. Only respond to some specific things.
        if (hasIntent) {
            const intentReply = intents[index].reply();
            typeof intentReply === "string"
                ? msg.reply(intentReply)
                : intentReply.forEach((reply) => {
                    msg.reply(reply);
                });
        }
    }
});
client.login("ODIwNzkzNDU1ODk0MDY5Mjc4.YE6VeQ.km0qvM7EDoBNxFiiQS1Bi_R4t_c");
console.log("client logged in");
//# sourceMappingURL=main.js.map