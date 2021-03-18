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
      // hit finance API and get the value of this position at the timestamp
      // then get current value
      /**
       * const requestPosition = await fetch(api, {})
       * const { value: valueAtPositionOpen } = JSON.parse(positionOpenRequest)
       * const requestPositionNow = await fetch(api, {})
       * TODO: save portfolio position values to positions.json to reduce next fetch
       * TODO:
       * return [][]
       */
    });
  });
  return [];
};
