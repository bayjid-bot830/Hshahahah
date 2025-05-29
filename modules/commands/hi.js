const fs = require("fs");
module.exports.config = {
	name: "H",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Alvi", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "H",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hi")==0 || event.body.indexOf("👋")==0 || event.body.indexOf("hello")==0 || event.body.indexOf("Hello")==0) {
		var msg = {
				body: "Hello i am Rj Farhan ar bot~☺️",
				attachment: fs.createReadStream(__dirname + `/noprefix/Hello.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }