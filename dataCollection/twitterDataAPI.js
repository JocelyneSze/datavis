var Twit = require('twit');
var fs = require('fs');

var twit = new Twit({
	consumer_key : 'U51opX4c0ZH5tdGgI0scpp7Ns',
	consumer_secret : 'EjrxcgLz6FKVXyqK2VzFVPGYQve6vkQYIxHU5J0iPXOd70nxmR',
	access_token : '207339791-aCGjCiw3N190QSzWKQBl0AQh0g8PvfJXvX8guJ84',
	access_token_secret : 't0Io3HZYWbGGm29C1zLb46QqzkTYJVRXb7h0OH9M7FKHw'
});

var uk = [ '-9.23', '49.84', '2.69', '60.85' ];
var stream = twit.stream('statuses/filter', { locations: uk })
//var stream = twit.stream('statuses/filter', { track: "coding, programming" })
var Log = fs.createWriteStream('tweets.log');

stream.on('tweet', processTweet);

function processTweet(tweet) {
  //var strTweet = JSON.stringify(tweet);
  //Log.write(strTweet+"\n");
  //console.log(tweet);

  var regexp = /[Ff]ootball|[Ss]aturday/g;
    if (regexp.test(tweet.text)) {
      console.log(tweet.text);
    }
};
