var fs = require('fs');

let keyword = 'BTCUSDT';
let interval = '1w';
const axios = require('axios');
var myDate = "05-07-2021";
myDate = myDate.split("-");
var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
// Make a request for a user with a given ID
axios.get("https://api.binance.com/api/v3/klines?symbol=" + keyword + "&interval=" + interval + "&startTime=" + newDate.getTime() + "&limit=1000")
    .then(function (response) {
        var osman = [];
        for (let i = 0; i < response.data.length; i++) {
            osman.push(response.data[i][4]);
        }
        fs.writeFile("Weeks/" + keyword + "-" + myDate + "-" + interval + ".json", JSON.stringify(osman), 'utf8', function (err) {

            console.log("JSON file has been saved.");
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

