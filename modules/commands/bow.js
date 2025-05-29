module.exports.config = {
  name: "bow",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BotolBaba",
  description: "Simple Banglish Ai Chatbot",
  commandCategory: "Ai Robot",
  usages: "/bow [typeinBanglish]",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	
	const axios = require('axios');
	
if (args.join() == "oi") { 
	  return api.sendMessage(`বলো গো বাবুর আব্বু টা😘`, event.threadID, event.messageID)}
	
	else {
		let uint = encodeURI(args.join(' '));
	const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
	var d1 = res.data.message
	return api.sendMessage(`${d1}`, event.threadID, event.messageID)
	
	}