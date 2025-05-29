module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "CatalizCS", //fixing ken gusler
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[${global.config.PREFIX} ] ㋛︎༄ ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({body:`[🌺আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ🌺]
____________________________________
🤖
BOT CONNECTED!!! 
adding in the group chat successfully!!!
🙈 হায় বাবুরা শয়তানি করার জন্য এড দিছত তাই না 🐒
____________________________________\n\nযেকোনো কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন
\n\উদাহারণ:\n${global.config.PREFIX}mark (text)\n${global.config.PREFIX}lexi (text)\n${global.config.PREFIX}trump (text)\n${global.config.PREFIX}info
____________________________________
আর যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার বস 
🥰👉𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈💚🌻 কে নক করতে পারেন-🥰🌺 
🌻𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊🌻:-                               👇[https://www.facebook.com/profile.php?id=61550121814016&mibextid=ZbWKwL,🌺🤟]
-
`, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/alvi_1.mp4")} ,threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "gif");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "[💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐]\n\n {name}. 🌻-আপনি এই গ্রুপের  {soThanhVien} no মেম্বার-🌻\n\n {threadName}\n\n🌺-🥰গ্রুঁপেঁরঁ পঁক্ষঁ থেঁকেঁ আঁপঁনাঁকেঁ স্বাঁগঁতঁমঁ-♥🌺🌻\n\n🥰🌺💝-ᏔᎬᏞᏟϴᎷᎬ-💝🌺🥰 \n\n┌────♣─────┐\n\n😘♦ ----🌺🌻💝-কারো ফিলিংস নিয়ে মজা নিও না-🖤🥀-বিচ্ছেদের যন্ত্রণা মৃত্যুর চেয়েও ভয়ংকর-🙂💔🌺----  ♦😘\n\n└────♣─────┘\n\n🌻🌺💝👉𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈💝🌺🌻 \n\n🌺-𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥-🌺 🌻🌼👉𝐌𝐑. 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍👈🌼🌺" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'You' : 'Friend')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
      }