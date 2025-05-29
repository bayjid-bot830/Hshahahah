const fs = require("fs");
module.exports.config = {
	name: "Luccha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: " Alvi", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "luccha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤤")==0 || event.body.indexOf("🤤")==0 || event.body.indexOf("🥵")==0 || 
event.body.indexOf("🫦")==0 ||  event.body.indexOf("👄")==0 ||  event.body.indexOf("👅")==0 ||  
event.body.indexOf("🖕")==0) {
		var msg = {
				body: "-আমি হুজুর হয়ে গেছি-//🥵🤤💦",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/hujur.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙆‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }