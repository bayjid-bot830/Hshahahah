const fs = require("fs");
module.exports.config = {
	name: "🤡",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤡",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👹")==0 || event.body.indexOf("🤡")==0 || event.body.indexOf("🃏")==0 || event.body.indexOf("🃏")==0) {
		var msg = {
				body: "ও্ঁরে্ঁ মা্ঁ জো্ঁকা্ঁর্ঁ ক্ঁই্ঁ থি্ঁকা্ঁ আ্ঁই্ঁলো্ঁ 🤪",
				attachment: fs.createReadStream(__dirname + `/noprefix/joker.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }