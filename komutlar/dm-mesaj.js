const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client, message, args) => {


client.users.cache.forEach(u => {

u.send('olm niye şikayet ediyonuz la beni')



})
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dm-mesaj"],
  permLevel: 3
};

exports.help = {
    name: 'dm-mesaj',
  description: 'dm mesaj atar.',
  usage: 'dm-mesaj'
};  

///hebele