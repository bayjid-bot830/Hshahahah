const fs = require("fs");
module.exports.config = {
	name: "Bye",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "Bye",
	commandCategory: "No command marks needed",
	usages: "Bye",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("By")==0 || (event.body.indexOf("by")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "আবার কথা হবে 🥰.\n\n~ যেকোনো তথ্যের জন্য আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এর id তে নক করতে পারেন 👇\n\nhttps://www.facebook.com/profile.php?id=61550121814016&mibextid=ZbWKwL",
				attachment: fs.createReadStream(__dirname + `/noprefix/Bye.mp3`)
			}
						api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                      }