const fs = require("fs");
module.exports.config = {
	name: "gojol",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gojol",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Islam")==0 || event.body.indexOf("গজল")==0 || event.body.indexOf("Gojol")==0 || event.body.indexOf("gojol")==0) {
		var msg = {
				body: "🥰❤️🥀\n\nআমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর পছন্দের গজল 🥰\n\nআবগানস্থানের যুদ্ধ নিয়ে ছোট্ট একটা শিশুর গজলে সারা দুনিয়া মুগ্ধ\n\n𝙼𝚈 𝙱𝙾𝚂𝚂 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺  𝙻𝙸𝙽𝙺:-https://www.facebook.com/profile.php?id=100089582321226&mibextid=ZbWKwL\n\n [𝙾𝚆𝙽𝙴𝚁:☞𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/alvi-gojol.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }