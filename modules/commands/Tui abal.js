 const fs = require("fs");
module.exports.config = {
	name: "santi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "santi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Pagol")==0 || event.body.indexOf("pgl")==0 || event.body.indexOf("Abal")==0 || event.body.indexOf("abal")==0) {
		var msg = {
				body: "‎তুই🫵এক নাম্বার আবাল-🙄😎তুই🫵পাগল হইচোস বাড়ী'তে জানে-//🥱😫",
				attachment: fs.createReadStream(__dirname + `/noprefix/santi.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }