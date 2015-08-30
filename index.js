var Twitter       = require('twitter');
var Config        = require('./config.js');
var fs            = require('fs');

var client = new Twitter({
  consumer_key: Config.twitter.consumer_key,
  consumer_secret: Config.twitter.consumer_secret,
  access_token_key: Config.twitter.access_token_key,
  access_token_secret: Config.twitter.access_token_secret
});

var params = {screen_name: 'DWoodiwiss'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    writeFile(params.screen_name.toLowerCase(), JSON.stringify(tweets));
  }
});

function writeFile(user, tweets) {
  fs.writeFile("data/" + user + ".json", tweets, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(user + " file was saved!");
  });
}