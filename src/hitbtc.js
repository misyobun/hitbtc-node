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
    makeHeader: function (queryData) {
        var nonce, message, signature;
        nonce = new Date().getTime();
        message = nonce + this.apiBase + ((Object.keys(obj).length > 0) ? JSON.stringify(obj) : '');
        return {
            "Content-Type": "application/json",
            "ACCESS-KEY": this.accessKey,
            "ACCESS-NONCE": nonce,
            "ACCESS-SIGNATURE": crypto.createHmac("sha256", this.secretKey).update(new Buffer(message)).digest('hex').toString();
          };
    },
    request: function(options) {
        const req = requestPromise({
            uri: options,
            method: "GET",
            timeout: this.timeout,
            forever: this.keepalive,
            headers: makeHeader(data),
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
};

exports.Hitbtc = Hitbtc;

