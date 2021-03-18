"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addPositionToPortfolio_1 = __importDefault(require("./intents/addPositionToPortfolio"));
const getPortfolioPositions_1 = __importDefault(require("./intents/getPortfolioPositions"));
const getPortfolioValue_1 = __importDefault(require("./intents/getPortfolioValue"));
// Controls how messages are interpreted, replies are handled with the help of the above utilities
exports.default = (msg) => [
    {
        // We really don't like $GEVO
        intent: () => msg.includes("gevo"),
        reply: () => "$GEVO is the worst.",
    },
    {
        intent: () => msg === "test reply",
        reply: () => "Hello world",
    },
    {
        intent: () => msg.includes("stonk"),
        reply: () => {
            const ticker = msg.substr(msg.indexOf("$") + 1, msg.indexOf("$") + 4);
            if (ticker == "")
                return;
            return `$${ticker.toUpperCase()} is a certified stonk.`;
        },
    },
    {
        intent: () => msg.content.includes("820793455894069278") &&
            msg.content.includes("help"),
        reply: () => {
            return [
                "I'm running in beta mode right now. Commands that involve saving data will only persist for a short period of time.",
                `Features supported: 
        1. say "$TICKER is a stonk" to make me hate something.
        
        Coming soon:
        1. Make me track the inverse of a position by mentioning me and saying, <buy | sell> $TICKER
        2. Get my P/L by mentioning me and saying, show the gainz`,
            ];
        },
    },
    {
        intent: () => msg.content.includes("buy $") || msg.content.includes("sell $"),
        reply: () => {
            addPositionToPortfolio_1.default();
            getPortfolioValue_1.default();
            return "";
        },
    },
    {
        intent: () => msg.content.includes("show the gainz"),
        reply: () => {
            // compare values and enter position in ledger
            // Save ledger via fs.writeFile so we don't need to increase response times linearly as positions are added
            // TODO: implement function
            getPortfolioValue_1.default();
            return "";
        },
    },
    {
        intent: () => msg.content.includes("positions"),
        reply: () => {
            // TODO: implement getPortfolioPositions
            const positions = getPortfolioPositions_1.default();
            return "";
        },
    },
    {
        intent: () => msg.content.includes("820793455894069278"),
        reply: () => {
            return "That's not something I know how to handle quite yet.";
        },
    },
];
//# sourceMappingURL=intents.js.map