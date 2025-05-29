const fs = require("fs");
module.exports.config = {
	name: "alvi3",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Junior Simanto", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("কি করো") ||
     react.includes("ki koro") || 
react.includes("ki koris") || 
react.includes("koris") ||
react.includes("ki koros")) {
		var msg = {
				body: "____ বাংলা,𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝- করলাম- এখন শুয়ে শুয়ে দেখবো-💦🥵 \n𝐎𝐊𝐄 - বাই //টাটা...!!😌🤸🏃"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }