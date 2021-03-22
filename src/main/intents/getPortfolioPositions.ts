import fs from "fs";

export default (): [] => {
  fs.readFile("./portfolio.json", "utf-8", (error, data) => {
    if (error) {
      console.log(
        "Tried getting portfolio positions and encountered an error:",
        error
      );
    }

    const positions = JSON.parse(data);
    let ledger = [];
    positions.forEach(async (position) => {
      
    });
  });
  return [];
};
