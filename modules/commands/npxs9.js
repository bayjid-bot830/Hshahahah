const fs = require("fs");
module.exports.config = {
	name: "npxs9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs9",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🙂")==0 || event.body.indexOf("💕")==0 || event.body.indexOf("💝")==0 || 
event.body.indexOf("🥳")==0 ||
event.body.indexOf("😿")==0 ||
event.body.indexOf("🥲")==0 ||
event.body.indexOf("😌")==0) {
		var msg = {
				body: "🌻︵🦋\n _ღ༎--.স্বপ্ন যখন যন্ত্রনা দেই ︵ღ۵🙂\n\n︵ღ۵. বাস্তবতা তখন মানুষ চেনাই__ღ༎😅💜🍒\n︵/😇🌺🥀👈     \n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝗠𝗥.𝗕𝗢𝗦𝗦 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs9.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }