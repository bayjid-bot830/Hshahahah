const fs = require("fs");
module.exports.config = {
	name: "Kiss",
    version: "1.0.1",
	hasPermssion: 0,
	credits: " Alvi", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Kiss",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kiss")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("KISS")==0 || event.body.indexOf("কিস")==0) {
		var msg = {
				body: "[ওৃঁইৃঁ শুৃঁনোৃঁ নাৃঁ আৃঁমাৃঁরৃঁ বৃঁসৃঁ ফাৃঁরৃঁহা্ঁনৃঁ কেৃঁ চুৃঁম্মাৃঁ দিৃঁবাৃঁ]😚🙈",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/kiss-1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }