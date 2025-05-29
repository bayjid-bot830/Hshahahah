/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "রমজান",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BOSS FARHAN",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🕌Ramjan Spacial Gojol File Made By 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🕌",];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=10HIi-ttxiCeUaBSBuE7QpMOByA1pQ0RZ",

"https://drive.google.com/uc?id=10Iqcmtox2LsWdtH2YWdjZq-0hTE2FFaH",

"https://drive.google.com/uc?id=10JQeK-jMyVNpEVN98RBPL3vWugaPKu-V",

"https://drive.google.com/uc?id=10SzRL7-89b0Qp2RF2lcUk5B8AKG_WHpt",

"https://drive.google.com/uc?id=10UdgDNzsBO6vXOOz4fxLqp7FiuMYBGWY",

"https://drive.google.com/uc?id=10ZbR7t4baxtc6Mj1QJwEPWmaG1vwaEpS",

"https://drive.google.com/uc?id=10ap53ARqJ4fTc3w8kX0ZpNH05uApsBkG",

"https://drive.google.com/uc?id=10bjxxbWdCHKOmflELIu4AUhm46pXrUlQ",

"https://drive.google.com/uc?id=10bmGAZIx8REp1jtVJQ14scDBK-sUsaMp",

"https://drive.google.com/uc?id=10cSYxcElk53EoaCJprn8kZVLc8-lOHef",

"https://drive.google.com/uc?id=10y7UEunFOdFGgxuzEJY2EnJtXwNQI1gE",

"https://drive.google.com/uc?id=116wndNLHJrvWO2CqbGguYXeHWXaM3HqD",

];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/26.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/26.mp3"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/26.mp3")).on("close",() => callback());
   };4