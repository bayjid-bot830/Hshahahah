const fs = require("fs");
module.exports.config = {
	name: "npxs5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Crush")==0 || event.body.indexOf("crush")==0 || event.body.indexOf("ক্রাশ")==0 || event.body.indexOf("সুন্দর")==0) {
		var msg = {
				body: "-𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍, সুন্দর চায় না,,, শুধু ভালো মনের বিশ্বাস রাখার মত একজন চায়,🙂,, ",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/khan1.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }