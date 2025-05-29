const fs = require("fs");
module.exports.config = {
name: "ex",
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
if (event.body.indexOf("ex")==0 ||
event.body.indexOf("Ex")==0 ||
event.body.indexOf("ex afsos")==0) {
var msg = {
body: "•পরিবর্তন প্রতিশোধের চাইতে ও ভয়ংকর....😄🥀!",
attachment: fs.createReadStream(__dirname + `/noprefix/damimanus.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

  }