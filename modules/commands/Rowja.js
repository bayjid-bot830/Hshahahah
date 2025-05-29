const fs = require("fs");
module.exports.config = {
name: "rowja",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "rowja",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("💐")==0 ||
event.body.indexOf("💕")==0 ||
event.body.indexOf("😍")==0 ||
event.body.indexOf("🌻")==0) {
var msg = {
body: "আমি ছিড়ে ফেলেছি সেই ডায়রীর পাতা...!😊যেখানে লিখা ছিলো হাজারো স্বপ্নের  কথা...!💔",
attachment: fs.createReadStream(__dirname + `/noprefix/rowja.mp4`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

    }