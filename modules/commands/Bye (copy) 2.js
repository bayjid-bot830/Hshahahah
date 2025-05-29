const fs = require("fs");
module.exports.config = {
	name: "byuyuiufuyge",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tata")==0 || (event.body.indexOf("Bye")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Tata")==0)))) {
		var msg = {
				body: "যাবি তো যা এতো বাই বাই করার কি আছে যা রাস্তা মাপ🤫🥱",
				attachment: fs.createReadStream(__dirname + `/noprefix/bye.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}