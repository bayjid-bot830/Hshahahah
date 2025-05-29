const fs = require("fs");
module.exports.config = {
	name: "hmm",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝗠𝗥.𝗕𝗢𝗦𝗦 𝗔𝗟𝗩𝗜 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ok") ||
     react.includes("hmm") || 
react.includes("হুম") || 
react.includes("ওকে") ||
react.includes("Hmm")) {
		var msg = {
		    body: "-কি মিয়া\n খালি হুম হুম করো কান\n বাংলায় বলতে পারো না আচ্চা ঠিক আছে\n পাগল ছাগল-//🙄🤸‍♂️"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }