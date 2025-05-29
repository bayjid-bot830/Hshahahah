const fs = require("fs");
module.exports.config = {
	name: "FARHAN",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Alvi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@𝐃𝐉༒𝐅𝐀𝐑𝐇𝐀𝐍 𝐕𝐀𝐈༆;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:) ) ;* ⓿ ;* ⓿ ;* ⓿ ( 3:) ) ( 3:卝")==0 || event.body.indexOf("@〲Mɘŋtʌɭ卝 FʌRhʌŋツ࿐")==0 || event.body.indexOf("Farhan")==0 ||
event.body.indexOf("ফারহান")==0 ||
event.body.indexOf("@FʌRhʌŋツ࿐ 〲Mɘŋtʌɭ卝")==0 ||
event.body.indexOf("farhan")==0 ||
event.body.indexOf("FARHAN")==0) {
		var msg = {
				body: "ব্ঁস্ঁ ফা্ঁর্ঁহা্ঁন্ঁ চৌ্ঁধু্ঁরী্ঁ এ্ঁখ্ঁন্ঁ খু্ঁব্ঁ বি্ঁজি্ঁ 🥰❤️🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/gf.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }