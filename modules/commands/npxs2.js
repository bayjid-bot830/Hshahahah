const fs = require("fs");
module.exports.config = {
	name: "npxs2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Farhan ke")==0 || event.body.indexOf("farhan k")==0 || event.body.indexOf("Ke farhan")==0 ||
event.body.indexOf("K farhan")==0 ||
event.body.indexOf("k farhan")==0 ||
event.body.indexOf("ফারহান কে")==0 ||
event.body.indexOf("কে ফারহান")==0 ||
event.body.indexOf("kon farhan")==0 ||
event.body.indexOf("Kon farhan")==0 ||
event.body.indexOf("ke farhan")==0) {
		var msg = {
				body: "𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 আমার বস তুমি যদি না চিনো তা হলে তোমার নানির ভাতার-🥱😎🥵",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs2.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }