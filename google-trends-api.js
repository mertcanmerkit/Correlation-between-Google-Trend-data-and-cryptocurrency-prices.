var fs = require('fs');
let keyword = 'bitcoin';
let date_range = 'week';
const googleTrends = require('google-trends-api');
googleTrends.interestOverTime({
        keyword: keyword,
        startTime: new Date('2021-07-05'),
        endTime: new Date(Date.now()),
    })
    .then(function(results) {
        fs.writeFile(`${keyword}-${date_range}.json`, results, 'utf8', function(err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }

            console.log("JSON file has been saved.");
        });

    })