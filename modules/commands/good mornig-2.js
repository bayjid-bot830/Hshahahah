const fs = require("fs");
module.exports.config = {
	name: "m9-2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Gdm9-2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good morning")==0 || event.body.indexOf("Gd m9")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("gd m9")==0) {
		var msg = {
				body: "গুড মর্নিং 🌚😽🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/mornig2.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }