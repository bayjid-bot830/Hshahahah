const fs = require("fs");
module.exports.config = {
	name: "bot-love",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "bot-love",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("i love you")==0 || event.body.indexOf("I LOVE YOU")==0 || 
event.body.indexOf("Love")==0 ||event.body.indexOf("Love u")==0 ||event.body.indexOf("love you")==0 ||event.body.indexOf("I love u")==0 ||event.body.indexOf("I love you")==0 ||.body.indexOf("আই লাভ ইউ")==0 || event.body.indexOf("ভালোবাসি")==0) {
		var msg = {
				body: "-হুম Xan's আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ও তোমাকে অনেক ভালোবাসে..!!",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }