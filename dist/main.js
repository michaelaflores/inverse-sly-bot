"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We don't have types for discord.js
// @ts-ignore
const discord_js_1 = __importDefault(require("discord.js"));
const intents_1 = __importDefault(require("./main/intents"));
const client = new discord_js_1.default.Client();
client.on("ready", () => {
    var _a;
    console.log(`Logged in as ${(_a = client === null || client === void 0 ? void 0 : client.user) === null || _a === void 0 ? void 0 : _a.tag}!`);
});
client.on("message", (msg) => {
    // Don't respond to self
    if (msg.author.id === "820793455894069278") {
        return;
    }
    const lowerCasedMessage = msg.content.toLowerCase();
    const intents = intents_1.default(lowerCasedMessage);
    for (let index = 0; index < intents.length - 1; index++) {
        const hasIntent = intents[index].intent();
        // We get plenty of messages that have nothing to do with the bot. Only respond to some specific things.
        if (hasIntent) {
            const intentReply = intents[index].reply();
            if (intentReply == undefined)
                return;
            typeof intentReply === "string"
                ? msg.reply(intentReply)
                : intentReply.forEach((reply) => {
                    msg.reply(reply);
                });
            break;
        }
    }
});
client.login("ODIwNzkzNDU1ODk0MDY5Mjc4.YE6VeQ.km0qvM7EDoBNxFiiQS1Bi_R4t_c");
console.log("client logged in");
//# sourceMappingURL=main.js.map