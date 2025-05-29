const fs = require("fs");
module.exports.config = {
name: "🍼",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "ALVI",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("🍼")==0 ||
event.body.indexOf("pom pom")==0 ||
event.body.indexOf("Pom pom")==0) {
var msg = {
body: "লুচ্ছা বেশি পম পম করলে চেপে ধরে ঠাস করে ফাটিয়ে দিবো-//😤🥱",
attachment: fs.createReadStream(__dirname + `/noprefix/Op6.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

    }