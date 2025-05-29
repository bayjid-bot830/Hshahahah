heronconst fs = require("fs");
module.exports.config = {
	name: "tndn",
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
	if (event.body.indexOf("murgi @ASADULLAH ASAD")==0 || (event.body.indexOf("মুরগি @ASADULLAH ASAD")==0 || (event.body.indexOf("মুরগী @ASADULLAH ASAD")==0 || (event.body.indexOf("murgi")==0)))) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/voice1.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}