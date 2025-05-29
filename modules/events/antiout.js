module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`কিরে-😂 ${name} তোর এতো বড়ো সাহস-😈-আমি 🥱👉𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈🥱(✷‿✷)
 বট থাকতে লিভ নেস-😂😹👈 :( `, event.threadID)
   } else api.sendMessage(`কিরে😈 ${name} কোথায় পালাস আমি 🥱👉𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈🥱(✷‿✷) বট থাকতে পালাতে পারবি না-🤣😹👈`, event.threadID);
  })
 }
                            }