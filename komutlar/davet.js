const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('Sunucumuza gelmek için [Islands Türkiye] (https://discord.gg/9pRcYqGe) ')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};
exports.help = {
name: 'davet',
usage:'davet'};

