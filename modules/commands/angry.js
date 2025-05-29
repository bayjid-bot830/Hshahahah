const axios = require("axios");

module.exports = {
  config: {
    name: "uptimer",
    version: "1.0",
    author: "farhan",
    description: "Keep a URL alive using an uptime service.",
    commandCategory: "Utility",
    usages: ["<name> <url>"],
    cooldowns: 5,
  },
  run: async ({ api, event, args }) => {
    const name = args[0];
    const url = args[1];

    if (!name || !url) {
      api.sendMessage("𝐏𝐥𝐞𝐚𝐜𝐞 𝐒𝐞𝐧𝐝 𝐚 𝐍𝐚𝐦𝐞 𝐀𝐧𝐝 𝐚 𝐔𝐑𝐋 𝐓𝐨 𝐊𝐞𝐞𝐩 𝐀𝐥𝐢𝐯𝐞🟢", event.threadID, event.messageID);
      return;
    }

    try {
      const response = await axios.get(`https://farhan-bot-uptimer.botbot150.repl.co/api/ping?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}`);

      if (response.status === 200) {
        api.sendMessage(`𝐘𝐨𝐮𝐫 '${name}' 𝐍𝐚𝐦𝐞 𝐀𝐧𝐝 𝐘𝐨𝐮𝐫 𝐔𝐑𝐋 𝐔𝐩𝐭𝐢𝐦𝐞𝐫 𝐒𝐞𝐫𝐯𝐞𝐫 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐀𝐝𝐝𝐞𝐝✅\n \n 𝗔𝗣𝗜 𝗦𝗘𝗥𝗩𝗘𝗥: 𝐅𝐚𝐫𝐡𝐚𝐧 𝐈𝐬𝐥𝐚𝐦 `, event.threadID, event.messageID);
      } else {
        api.sendMessage("𝐅𝐚𝐢𝐥𝐞𝐝 𝐓𝐨 𝐌𝐨𝐧𝐭𝐢𝐨𝐫 𝐅𝐚𝐫𝐡𝐚𝐧 𝐒𝐞𝐫𝐯𝐞𝐫 𝐓𝐡𝐞 𝐔𝐑𝐋. 𝐏𝐥𝐞𝐚𝐜𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧 𝐋𝐚𝐭𝐞𝐫🔴", event.threadID, event.messageID);
      }
    } catch (error) {
      console.error("Error occurred while pinging the URL:", error);
      api.sendMessage("𝐓𝐡𝐞 𝐔𝐑𝐋 𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐄𝐱𝐢𝐬𝐭𝐬 𝐈𝐧 𝐅𝐚𝐫𝐡𝐚𝐧 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐨𝐧𝐢𝐭𝐨𝐫 𝐋𝐢𝐬𝐭🔴", event.threadID, event.messageID);
    }
  },
};