const fs = require("fs");
module.exports.config = {
	name: "boss-hasi",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "𝙼𝚁.𝙱𝙾𝚂𝚂 𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😆") ||
     react.includes("🤣") || 
react.includes("😂") || 
react.includes("😹") ||
react.includes("😸") ||    
react.includes("😁") ||
react.includes("😀")) {
		var msg = {
				body:"-তোমার হাসি'র থেকে-😼\nআমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর হাসি অনেক কিউট-😇\nমেয়ে'রা দেখলেই ক্রাশ খায়-😽🐸🤸‍♂️"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

     }