const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get(ayarlar.şikayetkanalid)//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Şikayet bilgisi+")
.setThumbnail(message.author.avatarURL())
.addField("Şikayet", bug)
.addField("Şikayet eden kullanici:", message.author.tag)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")
.setTimestamp()

message.channel.send(":white_check_mark:  **| Şikayet Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'şikayet',
  description: 'Şikayet Bildirme Komudu.',
  usage: 'şikayet'
}