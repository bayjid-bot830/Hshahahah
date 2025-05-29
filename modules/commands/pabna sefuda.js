const fs = require("fs");
module.exports.config = {
name: "pbn",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "pbn",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("Pagol")==0 || event.body.indexOf("bolod")==0 || event.body.indexOf("pagol")==0 ||
event.body.indexOf("👅")==0 ||
event.body.indexOf("Bolod")==0 ||
event.body.indexOf("🥵")==0) {
var msg = {
body: "এই গুলা রে কেও পাবনা ভর্তি করো টাকা যা লাগে আমি দিবো-//🤦‍♂️😞🥱",
attachment: fs.createReadStream(__dirname + `/noprefix/pabna.mp4`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

                   }