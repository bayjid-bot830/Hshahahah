const fs = require("fs");
module.exports.config = {
	name: "Rubina",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RJ FARHAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Rubina",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("রুমা")==0 || event.body.indexOf("RUMA")==0 || event.body.indexOf("Farhan ar bow")==0 || 
event.body.indexOf("farhaner bow")==0 ||  event.body.indexOf("Ruma")==0 ||  event.body.indexOf("ruma")==0 ||  
event.body.indexOf("@〲FʌRhʌŋ ʌR卝 বৃউঁツ࿐")==0) {
		var msg = {
				body: "বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর ব‌উ জান্স রুমা-🤗🥰-সবাই সালাম দে-🐸😾🔪",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/get.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

          }