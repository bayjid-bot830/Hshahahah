const fs = require("fs");
module.exports.config = {
	name: "vag",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝗠𝗥.𝗕𝗢𝗦𝗦 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Bhai") ||
     react.includes("Vai") || 
react.includes("ভাই") || 
react.includes("Okay vai") ||
react.includes("okay vai") ||
react.includes("Bro") ||
react.includes("vai") ||
react.includes("bro")) {
		var msg = {
		    body: "👉কি মিয়া\n চিনিনা জানিনা\n যারে তারে ভাই ডাকতাছো\n কাহিনি কি\n জাইগা জমির ভাগ\n নেওয়ার ধান্ধা করছো নাকি, 😒🐸"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }