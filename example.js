const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();

hitbtc.getSymbol("BETETH").then(console.log);
hitbtc.getOrders("BETETH").then(console.log);
hitbtc.getTrades("BETETH").then(console.log);
hitbtc.getCandles("BETETH").then(console.log);
hitbtc.getTicker("ETHBTC").then(console.log);
hitbtc.getCurrency("bet").then(console.log);