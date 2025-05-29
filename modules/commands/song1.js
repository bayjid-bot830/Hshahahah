const fs = require("fs");
module.exports.config = {
	name: "gan",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gan",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gan")==0 || event.body.indexOf("Gan")==0 || event.body.indexOf("song")==0 ||
event.body.indexOf("গান")==0 ||
event.body.indexOf("Song")==0) {
		var msg = {
				body: "🥰❤️🥀\n\nআমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর পছন্দের গান 🥰\n\n𝚂𝙾𝙽𝙶 :- 𝙾 𝙺𝙷𝚄𝙳𝙰\n\n𝙼𝚈 𝙱𝙾𝚂𝚂 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺  𝙻𝙸𝙽𝙺:-https://www.facebook.com/profile.php?id=100089582321226&mibextid=ZbWKwL\n\n [𝙾𝚆𝙽𝙴𝚁:☞𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/boss alvir pochonder song.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }