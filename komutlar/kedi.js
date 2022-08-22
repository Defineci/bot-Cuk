const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://c.tenor.com/2v1aDCelTJgAAAAC/cat-cats.gif","https://c.tenor.com/MdkTAaFGhRUAAAAd/cat-standing.gif","https://c.tenor.com/e_cOg0wWyQUAAAAd/cat-finger.gif","https://c.tenor.com/bK1qpWGyQKkAAAAd/kitty.gif","https://c.tenor.com/c54YFecd2HMAAAAC/kitty-kitten.gif","https://c.tenor.com/HYXVuDJDa0kAAAAd/kittykiss-little-kitty.gif","https://c.tenor.com/gpOAug6iMFUAAAAd/cute-cat-cat.gif","https://c.tenor.com/ZhfMGWrmCTcAAAAC/cute-kitty-best-kitty.gif","https://c.tenor.com/jTKoN-s5rf4AAAAd/wow-interesting.gif","https://c.tenor.com/uzWDSSLMCmkAAAAd/cute-cat-oh-yeah.gif","https://c.tenor.com/XjnZVoMpvfoAAAAd/kawaii-cat.gif","https://c.tenor.com/7r-BGEoIohkAAAAd/meme-cat.gif","https://c.tenor.com/K_75XqYil5MAAAAd/cat-kitten.gif","https://c.tenor.com/pkSRdP5HedsAAAAd/kitty-kittens.gif","https://c.tenor.com/8NdmPPZRPjsAAAAC/bluenathmade-blue-nath.gif","https://c.tenor.com/au-P4p-EUmEAAAAC/bluenathmade-blue-nath.gif","https://c.tenor.com/trsjWPph8DoAAAAM/cat-look.gif","https://c.tenor.com/LhfnVUdbH4EAAAAM/kittens-pet.gif","https://c.tenor.com/nYyPA3PEBvgAAAAM/funny-animals-cute.gif","https://c.tenor.com/w81bPziwCu4AAAAd/kitten-kitty.gif","https://c.tenor.com/loiWmdCMBjwAAAAM/kitten-cat-stand-paws-punch-sock-kitten.gif","https://c.tenor.com/LLGIUYQ7rh4AAAAd/cat-kitty.gif","https://c.tenor.com/IlPwPX1feGoAAAAd/kitty-kitten.gif","https://c.tenor.com/L4CcAh4ljlwAAAAM/good-night-cute.gif","https://c.tenor.com/6ywDINZvw6oAAAAd/koopagode.gif","https://c.tenor.com/w0Rv_cu3bJAAAAAd/kitty-cute.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Kedicik :")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result]);


message.channel.send(gifembed);


};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kedi'],
  permLevel: 0



};

exports.help = {


  name: 'kedi',
  description: 'kedi',
  usage: 'kedi'


};

