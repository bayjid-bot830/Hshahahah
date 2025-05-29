const fs = require("fs");
module.exports.config = {
	name: "npxs8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bow de")==0 || event.body.indexOf("bow de")==0 || event.body.indexOf("bot bow daw")==0 || event.body.indexOf("Bot bow daw")==0 || event.body.indexOf("Bot bow daw")==0 || event.body.indexOf("bot bow dau")==0 || event.body.indexOf("Bow dau")==0 || event.body.indexOf("bow dau")==0 || event.body.indexOf("Bow daw")==0 || event.body.indexOf("bow daw")==0 || event.body.indexOf("I leed gf")==0 || event.body.indexOf("i leed gf")==0 || event.body.indexOf("gf daw")==0 || event.body.indexOf("Gf daw")==0 || event.body.indexOf("gf dau")==0 || event.body.indexOf("Gf dau")==0 || event.body.indexOf("gf dau bot")==0 || event.body.indexOf("Gf dau bot")==0 || event.body.indexOf("Gf daw bot")==0 || event.body.indexOf("gf daw bot")==0) {
		var msg = {
				body: "কিরে তুই এত বউ বউ করিস কেন তোর কপালে বউ নাই-🥴 তুই হালা তৃতীয় লিঙ্গ পুরুষ-😏 যা ভাগ-আর একবার বউ বউ করলে- তোর টুনটুনি কাইটা হাতে ধরাইয়া দিমু--👊🥴",
				attachment: fs.createReadStream(__dirname + `/noprefix/mornig2.gif`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }