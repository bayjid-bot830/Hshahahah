const fs = require("fs");
module.exports.config = {
	name: "n8",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "gdn8",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("jamay de")==0 || event.body.indexOf("Bot xamay daw")==0 || event.body.indexOf("bot xamay daw")==0 || event.body.indexOf("bot xamay dau")==0 || event.body.indexOf("Bot xamay dau")==0 || event.body.indexOf("bot xamai daw")==0 || event.body.indexOf("Bot xamai daw")==0 || event.body.indexOf("Bot xamay dau")==0 || event.body.indexOf("bot xamai dau")==0 || event.body.indexOf("Bot xamay dau")==0 || event.body.indexOf("bot xamay dau")==0 || event.body.indexOf("Bot jamay dau")==0 || event.body.indexOf("bot jamay dau")==0 || event.body.indexOf("Bot jamai daw")==0 || event.body.indexOf("bot jamai daw")==0 || event.body.indexOf("Bot jamay daw")==0 || event.body.indexOf("bot jamay daw")==0 || event.body.indexOf("Bf dau")==0 || event.body.indexOf("bf dau")==0 || event.body.indexOf("Jamay daw bot")==0 || event.body.indexOf("jamay dau bot")==0 || event.body.indexOf("jamai dau bot")==0 || event.body.indexOf("Jamay dau bot")==0 || event.body.indexOf("Jamai daw bot")==0 || event.body.indexOf("jamay daw bot")==0 || event.body.indexOf("Bf daw")==0 || eveevent.bodynt.body.indexOf("bf daw")==0 || event.body.indexOf("I leed bf")==0 || event.body.indexOf("i leed bf")==0 || event.body.indexOf("Jamai dau")==0 || event.body.indexOf("jamai dau")==0 || event.body.indexOf("Jamay dau")==0 || event.body.indexOf("jamay dau")==0 || event.body.indexOf("Jamay daw")==0 || event.body.indexOf("jamay daw")==0 || event.body.indexOf("Jamai daw")==0 || event.body.indexOf("jamai daw")==0) {
		var msg = {
				body: "-কিরে এত জামাই জামাই করিস কেন-👊আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 -😇 এর চোখে দেখস না নাকি-😒 এই নে আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর আইডি লিংক এখন বসের ইনবক্সে এসএমএস দে-🤸🐸https://www.facebook.com/profile.php?id=61550121814016&mibextid=ZbWKwL",
				attachment: fs.createReadStream(__dirname + `/noprefix/myboss.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }