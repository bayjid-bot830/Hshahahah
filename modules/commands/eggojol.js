const fs = require("fs");
module.exports.config = {
name: "👾",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "FARHAN",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("Fuck")==0 ||
event.body.indexOf("fuck u")==0 ||
event.body.indexOf("fuck")==0) {
var msg = {
body: "I FUCK YOU-//🤤🖕",
attachment: fs.createReadStream(__dirname + `/noprefix/i fuck u.mp4`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🖕", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

    }