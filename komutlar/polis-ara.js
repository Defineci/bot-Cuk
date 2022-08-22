const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setImage("https://media2.giphy.com/media/3o6ZsZHgoUXMkp1i4U/giphy.gif?cid=ecf05e47sakwmfij5tlx6z8503tgjxywjtdmuo8pya39rkxe&rid=giphy.gif&ct=g")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'polis-ara', 
    description: 'Murat Eren', 
    usage: 'polis-ara'
};


