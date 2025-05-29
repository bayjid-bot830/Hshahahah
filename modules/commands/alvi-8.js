const fs = require("fs");
module.exports.config = {
	name: "nani",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RJ FARHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Nani",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tor nani")==0 || event.body.indexOf("Tor nani")==0 || event.body.indexOf("nani re")==0 || event.body.indexOf("Nani re")==0 || event.body.indexOf("Nani")==0 || event.body.indexOf("nani")==0 || event.body.indexOf("nani cudi")==0 ||
event.body.indexOf("nani Xudi")==0 || event.body.indexOf("চুদি")==0) {
		var msg = {
				body: "─༅༎•🌺_____🔐🍒🌻_____🌸༅༎•─\n\n💚🔐!!__তোর নানি'রে__🤍✨🐰🍒🍭– ষুদি,🥵👅💜🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/tornani8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }