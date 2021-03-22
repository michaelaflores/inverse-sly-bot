export default (): number => {
  /*
   * Compare positions, generate a single value of portfolio
   */
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
    const http = require("https");
    
    const options = {
      "method": "GET",
      "hostname": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "port": null,
      "path": "/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL",
      "headers": {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
      }
    };
    
    const req = http.request(options, function (res) {
      const chunks = [];
    
      res.on("data", function (chunk) {
        chunks.push(chunk);
      });
    
      res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });
    
    req.end();
  return 0;
};
