const fs = require("fs");
module.exports.config = {
	name: "jlf",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tor ma")==0 || (event.body.indexOf("Tor ma")==0 || (event.body.indexOf("ma re")==0 || (event.body.indexOf("চুদী")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/voice3.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}