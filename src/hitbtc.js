'use strict'

const requestPromise = require('request-promise');
const crypto = require('crypto');
const querystring = require('querystring');

function Hitbtc(accessKey, secretKey) {
    this.accessKey = accessKey;
    this.secretKey = secretKey;
    this.apiBase = "https://api.hitbtc.com/api/2";
    this.timeout =  6000;
    this.keepalive = false;
}

Hitbtc.prototype = {
    makeHeader: function () {
        return {
            "Authorization" : "Basic " + new Buffer(this.accessKey + ':' + this.secretKey).toString("base64")
          };
    },
    request: function(uri, data) {
        const req = requestPromise({
            uri: uri,
            method: "GET",
            timeout: this.timeout,
            forever: this.keepalive,
            headers: this.makeHeader()
        })

        return req.then(function(res) {
            return JSON.parse(res);
        }).catch(function(err) {
            console.log(err);
            throw new Error(err.statusCode);
        })
    },
    getCurrency: function(currency) {
        var path = "/public/currency/" + currency;
        return this.request(this.apiBase + path);
    },
    getSymbol: function(symbol) {
        var path = "/public/symbol/" + symbol;
        return this.request(this.apiBase + path);
    },
    getTicker: function(symbol) {
        var path = "/public/ticker/" + symbol;
        return this.request(this.apiBase + path);
    },
    getTrades: function(symbol) {
        var path = "/public/trades/" + symbol;
        return this.request(this.apiBase + path);
    },
    getOrders: function(symbol) {
        var path = "/public/orderbook/" + symbol;
        return this.request(this.apiBase + path);
    },
    getCandles: function(symbol) {
        var path = "/public/candles/" + symbol;
        return this.request(this.apiBase + path);
    },
    getBalance: function() {
        var path = "/trading/balance";
        return this.request(this.apiBase + path);
    }
};

exports.Hitbtc = Hitbtc;

