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



//pull from url
function getBitCoin() {
    
    var rightNow = new Date();
    var year = rightNow.getUTCFullYear();
    var month = rightNow.getUTCMonth() + 1;
    var day = rightNow.getUTCDate();
    var hour = rightNow.getUTCHours();
    var minute = rightNow.getUTCMinutes();
    var second = rightNow.getUTCSeconds();
    var millisecond = rightNow.getUTCMilliseconds();
    
    var date = year + "-" + String(month).padStart(2,0) + "-" + String(day).padStart(2, 0);
    var time = String(hour).padStart(2,0) + ":" + String(minute).padStart(2,0) + ":" + String(second).padStart(2,0) + "." + String(millisecond).padStart(3,0);
    var utcFormat = date + 'T' + time + 'Z'
    

    const promise = axios.get('https://blockchain.info/ticker')
    const dataPromise = promise.then((response) => 
 '1 BTC = $' + response.data.USD.buy + response.data.USD.symbol + ' ' + 'at ' + utcFormat);

 return dataPromise;

}









