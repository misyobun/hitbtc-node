# hitbtc-node

## Market data
#### Currencies
```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getCurrency("BET").then(console.log);
```

```
{ id: 'BET',
  fullName: 'DAO Casino',
  crypto: true,
  payinEnabled: true,
  payinPaymentId: false,
  payinConfirmations: 2,
  payoutEnabled: true,
  payoutIsPaymentId: false,
  transferEnabled: true,
  delisted: false,
  payoutFee: '363' }
```
#### Symbols
```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getSymbols("BETETH").then(console.log);
```

```
{ id: 'BETETH',
  baseCurrency: 'BET',
  quoteCurrency: 'ETH',
  quantityIncrement: '0.01',
  tickSize: '0.000001',
  takeLiquidityRate: '0.001',
  provideLiquidityRate: '-0.0001',
  feeCurrency: 'ETH' }

```
#### Tickers
```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getTickers("BETETH").then(console.log);
```

```
{ ask: '0.000059',
  bid: '0.000058',
  last: '0.000057',
  open: '0.000058',
  low: '0.000057',
  high: '0.000059',
  volume: '111370.78',
  volumeQuote: '6.40107139',
  timestamp: '2018-04-02T15:21:52.548Z',
  symbol: 'BETETH' }
```

#### Candles
```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getCandles("BETETH").then(console.log);
```

```
[ { timestamp: '2018-03-20T11:00:00.000Z',
    open: '0.000065',
    close: '0.000065',
    min: '0.000065',
    max: '0.000065',
    volume: '0.78',
    volumeQuote: '0.00005070' },
  { timestamp: '2018-03-20T11:30:00.000Z',
    open: '0.000064',
    close: '0.000059',
    min: '0.000059',
    max: '0.000064',
    volume: '14966.44',
    volumeQuote: '0.88459012' },
     .
     .
     .
]
```

#### Trades
```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getTrades("BETETH").then(console.log);
```

```
[{ timestamp: '2018-03-30T06:30:00.000Z',
     open: '0.000063',
     close: '0.000065',
     min: '0.000063',
     max: '0.000065',
     volume: '13600.00',
     volumeQuote: '0.87954590' },
   { timestamp: '2018-03-30T09:00:00.000Z',
     open: '0.000064',
     close: '0.000065',
     min: '0.000064',
     max: '0.000065',
     volume: '1000.00',
     volumeQuote: '0.06425000' },
     ・
     ・
     ・
]     
```
#### Orderbook

```
const Hitbtc = require("./src/hitbtc.js");
var hitbtc = new Hitbtc.Hitbtc();
hitbtc.getOrderBook("BETETH").then(console.log);
```

```
{ ask:
   [ { price: '0.000059', size: '18003.03' },
     { price: '0.000060', size: '35031.97' },
     { price: '0.000061', size: '12354.66' },
     { price: '0.000062', size: '3380.43' },
     { price: '0.000063', size: '15739.95' },
  ],
  bid:
   [ { price: '0.000058', size: '2000.00' },
     { price: '0.000057', size: '107390.90' },
     { price: '0.000056', size: '42500.00' },
     { price: '0.000055', size: '5985.00' },
     { price: '0.000053', size: '5044.04' }
   ] }
```
## Trading
In development