/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "sexy girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR.BOSS RJ FARHAN",
  description: "Weed VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sexygirl",
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
   var hi = ["**★WeeD GirL🥵🍁🥀\nMR.BOSS 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍🍁🥀★**"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=14UJUGqxAKKvG-M8LCAO01C-9MeuOH5q7",
    "https://drive.google.com/uc?id=142gHgVt0evwhCx2buOotnU8f-Qt8wTNd",
    "https://drive.google.com/uc?id=14_z7VdN43VVwOUCXAmw6wepZitZQKxmq",
    "https://drive.google.com/uc?id=14hjiwPzItXGesFJX_VDgisTYt3tRz_Ih",
    "https://drive.google.com/uc?id=14YnPcPXL7aSx2SLDI-LyimIrswlIckcH",
    "https://drive.google.com/uc?id=14ZvzgzCM6M-OKppxnART8Jw_4wGlsZyZ",
    "https://drive.google.com/uc?id=14BZjzsgR7DbTJYhGithxVfj1s-z56hlm",
    "https://drive.google.com/uc?id=13uod1tdydAqAouOenkNUS3dvgyJHKP_n",
    "https://drive.google.com/uc?id=14R5c1R_6Tp5J0EWBuo1YVBvUOhhfSPLo",
    "https://drive.google.com/uc?id=14HaYWCxHckXsDm_PgFpr_4Ot5QaaUcYT",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };