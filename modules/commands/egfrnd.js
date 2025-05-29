const fs = require("fs");
module.exports.config = {
	name: "frnd",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "/freind",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Friend")==0 || event.body.indexOf("koliza")==0 || event.body.indexOf("friend")==0 || event.body.indexOf("বন্ধু")==0) {
		var msg = {
				body: "----------🖤---------\n\nবন্ধু মানে ভালোবাসা 🥰\n\n______________________ \n\n𝙾𝚆𝙽𝙴𝚁- MR.BOSS RJ FARHAN -🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/freind.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💐", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }