const { MessageEmbed } = require("discord.js");
const moment = require('moment')
const ms = require('ms')
exports.run = async (client, message, args) => {

var muterol = "946788237144383498"
var log = client.channels.cache.get("949014720130732032")
let embed = new MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic : true })).setColor('RANDOM').setFooter('Defineci💜').setTimestamp()
if (!["948995718008414269"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(embed.setDescription(`${message.author} Bu komutu kullanabilmek için yeterli yetkin yok!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react('❌'))


let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`${message.author} Lütfen bir kullanıcı belirtin @Defineci/İD gibi.`)).then(tedoa => tedoa.delete({timeout : 8000})).then(message.react('❌'))
if (member.user.bot) return message.channel.send(embed.setDescription(`${message.author} Botlara mute atamasın!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react('❌'))
if(member.id === message.author.id) return message.channel.send(embed.setDescription(`${message.author} Kendine mute atamasın!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react('❌'))
if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(embed.setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda.`)).then(tedoa => tedoa.delete({timeout : 7000})).then(message.react('❌'))


let time =  args[1]
if(!time) return message.channel.send(embed.setDescription(`${message.author} Lütfen bir süre belirtin \`[ 1s/1m/1h/1d]\` gibi.`)).then(tedoa => tedoa.delete({timeout : 10000})).then(message.react('❌'))
let reason = args.splice(2).join(" ") || "Sebep Belirtilmedi."

let Sure = time.replace("d", " Gün").replace("h", " Saat").replace("m", " Dakika").replace("s", " Saniye");

let mutebitiş = `${moment(Date.now()+ms(time)).format("LLL")}` 
let muteatılma = `${moment(Date.now()).format("LLL")}`


member.roles.add(muterol).catch();
message.channel.send(`✅ ${member} kişisi ${Sure} boyunca yazı kanallarında susturuldu.`)
log.send(new MessageEmbed()
.setColor('RANDOM')
.setFooter(`Defineci💜`)
.setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic : true }))
.setDescription(`${member} (\`${member.user.tag}\` - \`${member.id}\`) kişisi ${Sure} boyunca metin kanallarında susturuldu

• Susturulma sebebi: \`${reason}\`
• Chat Mute atılma tarihi: \`${muteatılma}\`
• Chat Mute bitiş tarihi: \`${mutebitiş}\``))
message.react('✅')


setTimeout(async function() {
    member.roles.remove(muterol).catch();
    message.channel.send(embed.setDescription(`${member} adlı üyenin susturulma cezası sona erdi!`))
    }, ms(time));
    

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute","chat-mute"],
  permLevel: 0
};

module.exports.help = {
  name: 'mute',
  description: '',
  usage: 'mute'
};