const axios = require('axios');

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



axios.get('https://blockchain.info/ticker')
    .then(function (response) {
console.log('1 BTC = $' + response.data.USD.buy + response.data.USD.symbol + ' ' + 'at ' + utcFormat);

    })
    .catch(function (error) {
console.log(error);
    })



