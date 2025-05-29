const fs = require("fs");
module.exports.config = {
	name: "bofkkohfo",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "taka",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("taka")==0 || (event.body.indexOf("tk")==0 || (event.body.indexOf("Taka")==0 || (event.body.indexOf("টাকা")==0)))) {
		var msg = {
				body: "[👉টাকা ছাড়া এই দুনিয়ায় কেউ আপন হয় না, 💵🥀]",
				attachment: fs.createReadStream(__dirname + `/noprefix/taka.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}