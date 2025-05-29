const fs = require("fs");
module.exports.config = {
name: "😳",
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
if (event.body.indexOf("😯")==0 ||
event.body.indexOf("😳")==0 ||
event.body.indexOf("🤗")==0) {
var msg = {
body: "ও্ঁলে্ঁ বা্ঁবু্ঁ আ্ঁমা্ঁর্ঁ ল্ঁজ্জা্ঁ পা্ঁই্ঁছে্ঁ-!😳",
attachment: fs.createReadStream(__dirname + `/noprefix/Op3.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}