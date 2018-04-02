const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getCandles("BETETH").then(console.log);
