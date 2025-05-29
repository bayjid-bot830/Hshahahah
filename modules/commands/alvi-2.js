const fs = require("fs");
module.exports.config = {
	name: "🍀",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Alo Chowdhury", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🍀",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😅")==0 || event.body.indexOf("🍀")==0 || event.body.indexOf("☘️")==0 || event.body.indexOf("🌿")==0) {
		var msg = {
				body: "༊᭄-– আবেগ, অনুভূতি থেকে যতদূরে থাকা যায়.!⚜️– জীবন ততই সুন্দর হয়.! 💙⚜️⚜️💜💜⚜️🖤🌸     \n\n𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🖤🌸༊᭄..! ❥┼─༊💝🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/alo.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }