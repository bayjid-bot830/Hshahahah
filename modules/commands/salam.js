const fs = require("fs");
module.exports.config = {
	name: "salthffam",
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
	if (event.body.indexOf("ASSALAMU")==0 || (event.body.indexOf("আসসালামু")==0 || (event.body.indexOf("assalamu")==0 || (event.body.indexOf("Assalamu")==0)))) {
		var msg = {
				body: "｢ওয়ালাইকুম আসসালাম-😽🌺🖤🥀｣",
				attachment: fs.createReadStream(__dirname + `/noprefix/salam.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}