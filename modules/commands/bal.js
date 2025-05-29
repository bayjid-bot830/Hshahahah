const fs = require("fs");
module.exports.config = {
	name: "bollfouofo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "Bal",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bal")==0 || (event.body.indexOf("বাল")==0 || (event.body.indexOf("bal")==0 || (event.body.indexOf("Ball")==0)))) {
		var msg = {
				body: "-এই দেখো বাল নাই-🥱🐸💦",
				attachment: fs.createReadStream(__dirname + `/noprefix/bal-nai.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}