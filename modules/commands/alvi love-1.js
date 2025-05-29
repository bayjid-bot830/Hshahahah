const fs = require("fs");
module.exports.config = {
	name: "micheal",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("bot i love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("i love you bot")==0)))) {
		var msg = {
				body: "হুম.XAN. বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 ও তোমাকে ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
