import fs from "fs";

fs.readFile("./portfolio.json", "utf-8", (error, data) => {
  if (error) {
    console.log(
      "Tried getting portfolio positions and encountered an error:",
      error
    );
  }

  const positions = JSON.parse(data);
});
