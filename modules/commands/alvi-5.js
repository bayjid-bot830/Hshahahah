const fs = require("fs");
module.exports.config = {
	name: "npxs15",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs15",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("love")==0 || event.body.indexOf("bot tumare amar valo lage")==0 || event.body.indexOf("Love you bot")==0 || event.body.indexOf("love you bot")==0) {
		var msg = {
				body: "ভালোবাসার মারে ৩৬৫ দিন ষুদিシ︎__💚🌻༅🌸💔\n𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍-🤟",
				attachment: fs.createReadStream(__dirname + `/noprefix/365.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥵", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }