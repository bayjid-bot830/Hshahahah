const fs = require("fs");
module.exports.config = {
	name: "bofofo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "bujso",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pak")==0 || (event.body.indexOf("bujso")==0 || (event.body.indexOf("bal")==0 || (event.body.indexOf("ki")==0)))) {
		var msg = {
				body: "উরার বয়স উরতাছি",
				attachment: fs.createReadStream(__dirname + `/noprefix/urarboyos.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}