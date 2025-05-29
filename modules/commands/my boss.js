const fs = require("fs");
module.exports.config = {
	name: "🫅",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🫅",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("FARHAN")==0 || event.body.indexOf("Farhan")==0 || event.body.indexOf("farhan")==0 || event.body.indexOf("ফারহান")==0) {
		var msg = {
				body: "\n\n🌺𝐁𝐎𝐓 𝐖𝐎𝐍𝐄𝐑🌺: 😽👉𝐌𝐑. 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈😽 \n\n🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊🌻:https://www.facebook.com/profile.php?id=100090087850647&mibextid=ZbWKwL\n\n🌼𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏🌼: 𝐖𝐀.𝐌𝐄/+801866673801 \n\n🌸𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌🌸: 𝐓.𝐌𝐄/+801866673801\n\n🔰𝐀𝐓𝐓𝐈𝐓𝐔𝐃𝐄 𝐊𝐈𝐍𝐆🔰: -যতটা খারাপ আমারে মনে করতাছো-🫰🔥 -এতোটা খারাপ আমি 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 না-🤙😼 -এক মিনিট-🤞🔰 -ইতিহাস উঠায় দেখো আমি  𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এতো টাও ভালো না-🤟😾🔪",
				attachment: fs.createReadStream(__dirname + `/noprefix/hanhtinh/maysad.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }