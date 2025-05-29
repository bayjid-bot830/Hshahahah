const fs = require("fs");
module.exports.config = {
	name: "SORRY",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RJ FARHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "SORRY",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("SORRY")==0 || event.body.indexOf("sorry")==0 || event.body.indexOf("Sorry")==0 || event.body.indexOf("সরি")==0) {
		var msg = {
				body: "༉༎🐰🖤\n\n\n\n🖤🌼একদিনツঅনেকツগুলোツঅভিযোগツলিখেツহারিয়েツযাবোツঅনেকツদূরেツকোথাও✨🖤🌸\n\n\n\n༉༎💔🙂\n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝗠𝗥.𝗕𝗢𝗦𝗦 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜🖤࿐",
				attachment: fs.createReadStream(__dirname + `/ALVI/sorry-jan.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😿", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }