const fs = require("fs");
module.exports.config = {
	name: "B0SS",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙼𝚁.𝙱𝙾𝚂𝚂 𝙰𝙻𝚅𝙸 𝙲𝙷𝙾𝚆𝙳𝙷𝚄𝚁𝚈", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "B0SS",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("oi farhan ")==0 || event.body.indexOf("FARHAN")==0 || event.body.indexOf("Farhan")==0 || event.body.indexOf("farhan")==0 || event.body.indexOf("@𝐃𝐉༒𝐅𝐀𝐑𝐇𝐀𝐍 𝐕𝐀𝐈༆;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:卝")==0 || event.body.indexOf("@〲Mɘŋtʌɭ卝 FʌRhʌŋツ࿐")==0 || event.body.indexOf("Oi farhan")==0 || event.body.indexOf("OI FARHAN")==0 || event.body.indexOf("Oi Farhan")==0 || event.body.indexOf("ফারহান")==0 || event.body.indexOf("ওই ফারহান")==0 || event.body.indexOf("@FʌRhʌŋツ࿐ 〲Mɘŋtʌɭ卝")==0) {
		var msg = {
				body: "👉আমার বস♻️ 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/profile.php?id=100090087850647&mibextid=ZbWKwL‎‎‎‎‎‎‎‎‎‎‎‎‎‎🔰 ♪√বস ফ্রি হলে আসবে🧡😁😜🐒",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }