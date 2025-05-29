const fs = require("fs");
module.exports.config = {
	name: "sagor-14",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "alvi-14",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😛")==0 || event.body.indexOf("😵‍💫")==0 || event.body.indexOf("😬")==0 || event.body.indexOf("😷")==0) {
		var msg = {
				body: "রাতের বুকে চাঁদের আলো,আমি তো নেই ভাল। তুমি আমার কত আপন তোমার জন্য কাঁদে এ মন।তাই জানতে চাই আছো কেমন  কলিজা😊-\n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝗠𝗥.𝗕𝗢𝗦𝗦 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/alo12.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }