const fs = require("fs");
module.exports.config = {
	name: "alvi-12",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "alvi-12",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mittha")==0 || event.body.indexOf("Ses")==0 || event.body.indexOf("Breakup")==0 || 
event.body.indexOf("breakup")==0 ||
event.body.indexOf("ses")==0 ||
event.body.indexOf("somporko")==0 ||
event.body.indexOf("Mittha")==0 ||
event.body.indexOf("jai")==0 ||      
event.body.indexOf("Jai")==0 ||    event.body.indexOf("messenger")==0 ||
event.body.indexOf("Messenger")==0) {
		var msg = {
				body: "-! ︵❝།།💚🌺___\n\n─༅༎  - ব্যস্ত এই শহর জুড়ে  অবিশ্বাসের ঢেউ !🖤🌻 \n🌻 ۵সবাই বলে সাথে আছি  ,-!\n\n─༅༎  -_____ কিন্তু _____-!🖤🌻 \n😽🌻   পাশে _থাকে _না_ __-----কেউ !🙂🌺\n\n.🙂🌺🌿\n\n\n[𝐎𝐖𝐍𝐄𝐑:☞𝗠𝗥.𝗕𝗢𝗦𝗦 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍☜",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/messenger.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }