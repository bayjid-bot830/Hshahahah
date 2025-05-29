const fs = require("fs");
module.exports.config = {
name: "bol",
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
if (event.body.indexOf("Love u")==0 ||
event.body.indexOf("love u")==0 ||
event.body.indexOf("Bot love you")==0) {
var msg = {
body: "থাপ্পড়াইয়া কিডনী লক করে দিমু..!! 🐸🔪বল ভালোবাসি.!👊😵‍💫🧐",
attachment: fs.createReadStream(__dirname + `/noprefix/thappor.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("👊", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}