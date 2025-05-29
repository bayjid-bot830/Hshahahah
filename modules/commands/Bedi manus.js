const fs = require("fs");
module.exports.config = {
	name: "Bbed manus",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RJ FARHAN", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "Farhan",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ruma")==0 || event.body.indexOf("ruma")==0 || event.body.indexOf("Mim")==0 || event.body.indexOf("আনিকা")==0 || event.body.indexOf("জান্নাত")==0 || event.body.indexOf("Anisha")==0 || event.body.indexOf("Anika")==0 || event.body.indexOf("রুমা")==0 || event.body.indexOf("anisha")==0 || event.body.indexOf("sayma")==0 || event.body.indexOf("Priya")==0 || event.body.indexOf("Sayma")==0) {
		var msg = {
				body: "-বাড়িতে খায় ঝাটার বাড়ি-🤧-ফেসবুকে সে Attitude নারী...!🥵🤣👈",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }