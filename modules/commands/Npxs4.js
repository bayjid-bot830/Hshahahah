const fs = require("fs");
module.exports.config = {
	name: "npxs4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tui ke")==0 || event.body.indexOf("Tui ke")==0 || event.body.indexOf("tor name")==0 || event.body.indexOf("Tor name")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("তোমার নাম")==0 || event.body.indexOf("তুই কে")==0 ||event.body.indexOf("Tomar name ki")==0) {
		var msg = {
				body: "-\n\nতো'রা আমারে চিনিস না তো'গো আব্বু'রে জিগা আমি কে-//😤🥱🍁    \n\n[𝐎𝐖𝐍𝐄𝐑:☞𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜n🐰🍒",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/khan5.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }