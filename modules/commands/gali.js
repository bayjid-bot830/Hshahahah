const fs = require("fs");
module.exports.config = {
	name: "chuda",
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
	if (event.body.indexOf("chuda")==0 || (event.body.indexOf("fuck")==0 || (event.body.indexOf("You and I")==0 || (event.body.indexOf("cude de")==0)))) {
		var msg = {
				body: "｢বান্ধবী কে চুদত না পারলে ,পরীক্ষায় ভালো রেজাল্ট করা যায় না🥴｣",
				attachment: fs.createReadStream(__dirname + `/noprefix/bandopi.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}