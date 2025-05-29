module.exports.config = {
	name: "tatbot",
	version: "0.0.1",
	hasPermssion: 3,
	credits: "Hỏrỉzỏn", // =))
	description: "hẹn giờ bật bót",
	commandCategory: "Admin",
	usages: "[time ( giây )]",
	cooldowns: 5
};
module.exports.run = async function({ api,event,args }) {
    const permission = ["100089582321226","100089582321226"];
  if (!permission.includes(event.senderID)) return api.sendMessage("hmm...! Bạn không phải chủ tôi 😠", event.threadID, event.messageID);
  if (!args[0]) return api.sendMessage("Vui Lòng Nhập Thời Gian Bật Bot Trở Lại !",event.threadID,event.messageID);
    else {
      if (isNaN(args[0])) return api.sendMessage("Phải Là 1 Con Số !",event.threadID)
      var ec = 2
      var xx =  ec + args[0];
      api.sendMessage("Sẽ Bật Bot Trở Lại Sau : " + args[0] + " Giây Nữa !" ,event.threadID,async () => process.exit(xx));
    }
};