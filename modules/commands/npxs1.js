const fs = require("fs");
module.exports.config = {
	name: "npxs1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs1",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ami farhan")==0 || event.body.indexOf("Ami tor booS")==0 || event.body.indexOf("আমি ফারহান")==0 || event.body.indexOf("Ami tor boss farhan")==0) {
		var msg = {
				body: "-আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ হ্যাঁ বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কেমন আছেন আপনি-🥰🌺🍒",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs1.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }