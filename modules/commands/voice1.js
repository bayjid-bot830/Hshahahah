const fs = require("fs");
module.exports.config = {
	name: "bofohfo",
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
	if (event.body.indexOf("khanki")==0 || (event.body.indexOf("usta")==0 || (event.body.indexOf("vuda")==0 || (event.body.indexOf("vag")==0)))) {
		var msg = {
				body: "｢আহহহ তুই একটা খারাপ😭｣",
				attachment: fs.createReadStream(__dirname + `/noprefix/kannna.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}