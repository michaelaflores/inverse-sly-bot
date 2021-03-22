// We don't have types for discord.js
// @ts-ignore
import Discord from "discord.js";

import getIntents from "./main/intents";

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("message", (msg): void => {
  // Don't respond to self
  if (msg.author.id === "820793455894069278") {
    return;
  }

  const lowerCasedMessage = msg.content.toLowerCase();

  const intents = getIntents(lowerCasedMessage);

  for (let index = 0; index < intents.length - 1; index++) {
    const hasIntent = intents[index].intent();
    // We get plenty of messages that have nothing to do with the bot. Only respond to some specific things.
    if (hasIntent) {
      const intentReply = intents[index].reply();

      if (intentReply == undefined) return;

      typeof intentReply === "string"
        ? msg.reply(intentReply)
        : intentReply.forEach((reply) => {
            msg.reply(reply);
          });

      break;
    }
  }
});

// Commit with fake token; Discord will automatically disable a committed login if we accidentally do so
// ODIwNzkzNDU1ODk0MDY5Mjc4.YE6VeQ.km0qvM7EDoBNxFiiQS1Bi_R4t_c
client.login("ODIwNzkzNDU1ODk0MDY5Mjc4.YE6VeQ.km0qvM7EDoBNxFiiQS1Bi_R4t_c");
console.log("client logged in");
