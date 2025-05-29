const fs = require("fs");
module.exports.config = {
	name: "boss-link",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "RJ FARHAN", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("https") ||
     react.includes(".com") || 
react.includes("Link") || 
react.includes("লিংখ") ||
react.includes("লিংক") ||    
react.includes("LINK") ||
react.includes("link")) {
		var msg = {
				body:"-ভালোবাসা নামক নষ্টামি করতে মন চাইলে-🤤💦 \n -আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর ইনবক্সে চলে যাও-🥵🫦 \n -এই নাও বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর ফেসবুক আইডির লিংক-👅👄\n\n\n👇\n\n\n ♻️-𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈'𝐃 𝐋𝐈𝐍𝐊-♻️https://www.facebook.com/profile.php?id=61550121814016&mibextid=ZbWKwL  👈🔥"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤞", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }