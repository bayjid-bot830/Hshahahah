const fs = require("fs");
module.exports.config = {
	name: "🌸",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Alo Chowdhury", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🌸",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😊")==0 || event.body.indexOf("🌺")==0 || event.body.indexOf("🌸")==0 || event.body.indexOf("💚")==0) {
		var msg = {
				body: "༊᭄-বিয়েটা হবে পারিবারিক ভাবে, কিন্তু পরিচয়টা থাকবে আগে থেকে!🖤🌸\n\n𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/khan38.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }