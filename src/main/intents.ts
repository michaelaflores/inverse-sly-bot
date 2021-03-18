import addPositionToPortfolio from "./intents/addPositionToPortfolio";
import getPortfolioPositions from "./intents/getPortfolioPositions";
import getPortfolioValue from "./intents/getPortfolioValue";

// Controls how messages are interpreted, replies are handled with the help of the above utilities
export default (msg) => [
  {
    // We really don't like $GEVO
    intent: (): boolean => msg.includes("gevo"),
    reply: () => "$GEVO is the worst.",
  },
  {
    intent: (): boolean => msg === "test reply",
    reply: () => "Hello world",
  },
  {
    intent: (): boolean => msg.includes("stonk"),
    reply: () => {
      const ticker = msg.substr(msg.indexOf("$") + 1, msg.indexOf("$") + 4);
      if (ticker == "") return;

      return `$${ticker.toUpperCase()} is a certified stonk.`;
    },
  },
  {
    intent: (): boolean =>
      msg.content.includes("820793455894069278") &&
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
    intent: (): boolean =>
      msg.content.includes("buy $") || msg.content.includes("sell $"),
    reply: () => {
      addPositionToPortfolio();
      getPortfolioValue();
      return "";
    },
  },
  {
    intent: (): boolean => msg.content.includes("show the gainz"),
    reply: () => {
      // compare values and enter position in ledger
      // Save ledger via fs.writeFile so we don't need to increase response times linearly as positions are added
      // TODO: implement function
      getPortfolioValue();
      return "";
    },
  },
  {
    intent: (): boolean => msg.content.includes("positions"),
    reply: () => {
      // TODO: implement getPortfolioPositions
      const positions = getPortfolioPositions();
      return "";
    },
  },
  {
    intent: (): boolean => msg.content.includes("820793455894069278"),
    reply: () => {
      return "That's not something I know how to handle quite yet.";
    },
  },
];
