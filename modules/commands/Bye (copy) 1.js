const fs = require("fs");
module.exports.config = {
	name: "byoouyfuyge",
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
	if (event.body.indexOf("🙂")==0 || (event.body.indexOf("😔")==0 || (event.body.indexOf("💔")==0 || (event.body.indexOf("❤️")==0)))) {
		var msg = {
				body: "｢মিথ্যার শহরে ভালো বাসতে যেও না প্রিয়🌺°|",
				attachment: fs.createReadStream(__dirname + `/noprefix/daina.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}