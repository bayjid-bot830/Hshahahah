const fs = require("fs");
module.exports.config = {
	name: "call robot",
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
	if(react.includes("call a aso") ||
     react.includes("কলে আসো") || 
react.includes("call de") || 
react.includes("Call") ||
react.includes("Inbox a call") ||     react.includes("কল") ||     
react.includes("কল দে") ||     
     react.includes("কলে আই") ||
react.includes("call me")) {
		var msg = {
		    body: "-আমি একটা মেসেঞ্জার রোবট\n আমি শুধু মেসেজ করতে পারি\n আমি কথা বলতে পারি না\n তার জন্য কলে যাই না\n তবে আপনাদের সবাইকে অনেক মিস করতাছি-😿😞"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }