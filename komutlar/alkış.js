const Discord = require('discord.js');
exports.run = (client, message) => {
  
  const code = new Discord.MessageEmbed()
  
  .setColor("#ff0000")
  .setDescription('**Alkış, Bravo!!!**')
  .setImage('https://media4.giphy.com/media/nbvFVPiEiJH6JOGIok/giphy.gif?cid=ecf05e47il8tt20kbaimpwh6ilj4mhglppuy60uw1almrr8p&rid=giphy.gif&ct=g')
  message.channel.send(code);
  
}

exports.conf = {
  enabled: true,
  guilOnly: false,
  aliases: ['alkışla'],
  permLevel: 0
}

exports.help = {
  name: 'alkış',
  description: '',
  usage: ''
};
