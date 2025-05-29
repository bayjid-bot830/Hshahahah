const fs = require("fs");
module.exports.config = {
	name: "jnn",
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
	if (event.body.indexOf("মাগি")==0 || (event.body.indexOf("মুরগি")==0 || (event.body.indexOf("মুরগী")==0 || (event.body.indexOf("Murgi")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/voice3.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}