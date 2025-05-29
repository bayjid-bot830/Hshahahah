const fs = require("fs");
module.exports.config = {
	name: "alvi4",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "alvi4",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🥲")==0 || event.body.indexOf("😢")==0 || event.body.indexOf("😞")==0 || event.body.indexOf("😓")==0) {
		var msg = {
				body: "*\n\nমানুষ কথা দেয় শুধুমাত্র মুহূর্ত সুন্দর করার জন্য..!🙂😊\n\n𝙼𝚁.𝙱𝙾𝚂𝚂 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍-😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/alo10.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🍁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }