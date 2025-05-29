const fs = require("fs");
module.exports.config = {
	name: "m9",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "M9",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good morning")==0 || event.body.indexOf("Gd m9")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("gd m9")==0) {
		var msg = {
				body: "-বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এই লুচ্ছা সকালে দাত ব্রাশ না করে গ্রুপে আইছে ওরে একটা উশখা মারো-😎🥴",
				attachment: fs.createReadStream(__dirname + `/noprefix/jd.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }