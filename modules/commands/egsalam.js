const fs = require("fs");
module.exports.config = {
	name: "salam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "salam",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ASSALAMU")==0 || event.body.indexOf("আসসালামু")==0 || event.body.indexOf("Assalamu")==0 || event.body.indexOf("assalamu")==0) {
		var msg = {
				body: "ওয়ালাইকুম আসসালাম-😽🌺🖤🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/kgfsalam.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }