const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setAuthor(message.author.username + ' Artık Kralsın !!!')
.setColor("GRAY")
.setTimestamp()
.setDescription('')
    .setImage(`https://c.tenor.com/AXC0MPgn7sQAAAAM/king-xavier-woods-crown.gif`)
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['kral'], 
    permLevel: 0 
};
  exports.help = {
    name: 'kral-ol', 
    description: 'kral ol', 
    usage: 'kral-ol'
};

