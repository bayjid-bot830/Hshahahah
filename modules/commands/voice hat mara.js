const fs = require("fs");
module.exports.config = {
	name: "bofohhhffo",
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
	if (event.body.indexOf("Hat")==0 || (event.body.indexOf("hat")==0 || (event.body.indexOf("হাত")==0 || (event.body.indexOf("👍")==0)))) {
		var msg = {
				body: "｢হাত মারা শরীর এর জন্য ভালো🦋｣",
				attachment: fs.createReadStream(__dirname + `/noprefix/hat.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}