module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "PSTeam",
	description: "Change bot's bio",
	commandCategory: "admin",
	usages: "bio [text]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join("Bio"), (e) => {
      if(e) api.sendMessage("༆᭄̲̲̲̞̎̎͢༊═══❥༊᭄জোর করে কাউকে আটকে রাখা যায়না༊᭄❥┼─༊🥀😍💖ღ●───༊,༊᭄,যে থাকার জন্য আসে,”❥┼─༊🌺😌💘ღ●───༊”༊᭄সে কখনো যাওয়ার কথা বলে না।༊᭄ ●───🥰🥀🌺🌸!!-!!🌸" + e, event.threadID); return api.sendMessage("–😔🤫~|| 'ভাগ্যবান তো সে.!🙄–যাকে বুঝার মতো একজন মানুষ আছে'__🥰🥀🖤: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }