const Discord = require("discord.js");
const hebele =["> Islands Türkiye : <@973194598857969714>",
               "> Islands Türkiye : <@972544440705110126>",
               "> MR.JACK : <@839902052758978651>",
               "> JACK : <@668974042799407128>",
               "> ! LT_LezalitBEY 𝞹 : <@300333163475894272>",
               "> ! 💸Hyperdia444💸 : <@818887122869682186>",
               "> Defineci : <@699311420810199223>",
               "> №More₱€A¢€ : <@717139601789288509>",
               "> ☄ ☔ KayaXCT ☔ ☄ : <@921505570261958676>",];

exports.run = (client, message, args) => {
  const mrt = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription (hebele)
    .setTitle(" Yetkili Kişiler ") 
  message.channel.send(mrt);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  description: "",
  usage: "yetkili"
};