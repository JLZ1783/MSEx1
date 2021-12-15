// MEDSTAR CHALLENGE 
// EXERCISE 1: 
const express = require('express')
const axios = require('axios');
const { readFileSync } = require('fs'); 
const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.cli(),
    transports: [
      new winston.transports.Console()
    ]
  });


const { format } = require('path');
const { info } = require('console');
const app = express();
const hostname = 'localhost';
const port = 3000;

app.listen(port, () => {
    
    logger.log('info', `Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    getBitCoin().then((data) => {
        console.log(data)
        ret = data;
        res.send(ret);
    });
    
})


//get the bitcoin price in USD
var rightNow = new Date();
var year = rightNow.getUTCFullYear();
var month = rightNow.getUTCMonth() + 1;
var day = rightNow.getUTCDate();
var hour = rightNow.getUTCHours();
var minute = rightNow.getUTCMinutes();
var second = rightNow.getUTCSeconds();
var millisecond = rightNow.getUTCMilliseconds();

var date = year + "-" + month + "-" + day;
var time = hour + ":" + minute + ":" + second + "." + millisecond;
var utcFormat = date + 'T' + time + 'Z'


//pull from url
function getBitCoin() {
    
    const promise = axios.get('https://blockchain.info/ticker')
    const dataPromise = promise.then((response) => 
 '1 BTC = $' + response.data.USD.buy + response.data.USD.symbol + ' ' + 'at ' + utcFormat );

 return dataPromise;

}

//parse out into a string and return for server to use
// getBitCoin().then((data) => {
//     console.log(data)
//     ret = data;

// });








