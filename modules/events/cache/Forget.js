 const fs = require("fs");
module.exports.config = {
	name: "forgot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hahaha",
	commandCategory: "no prefix",
	usages: "forgot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
if 
(event.body.indexOf("vule gese")==0|| event.body.indexOf("Huh")==0 || event.body.indexOf("ALVI")==0 ||event.body.indexOf("")==0) {
		var msg = {
				body: "____ღ۵-🙃মানুষিক শান্তির অপরনাম প্রিয় মানুষ.!🥀🦋.\nআমার একটা প্রিয় মানুষ হতে পারতো!!😕\n\n︵ღ᭄🥀༊࿐💙°\nALVI CHOWDHURY,🥀🖤",
				attachment: fs.createReadStream(__dirname + `/noprefix/forgot.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }