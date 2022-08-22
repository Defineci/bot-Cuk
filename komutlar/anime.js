const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://cdn.discordapp.com/attachments/697505578972348436/736757429450309673/image0.gif","https://c.tenor.com/6SZp0lw1YlwAAAAM/escrever-mmz.gif","https://c.tenor.com/Ufh7YDj6K4wAAAAM/party.gif","https://c.tenor.com/6lhbeSi847sAAAAM/anime-anime-guy.gif","https://c.tenor.com/6SZp0lw1YlwAAAAM/escrever-mmz.gif","https://c.tenor.com/D6aDhu6CBT8AAAAM/my-dress-up-darling-sono-bisque-doll.gif","https://c.tenor.com/qpQJlRmBW_8AAAAM/smug-smug-anime.gif","https://c.tenor.com/rudaYkZCnZ0AAAAM/illyasviel-von-einzbern-illya.gif","https://c.tenor.com/mqAFe5kR2xwAAAAM/anime-girl-rotate-rotate.gif","https://c.tenor.com/1IpoHq8MOgYAAAAM/wanna-watch-anime-watch-anime.gif","https://c.tenor.com/k9FbeH_64PAAAAAM/slow-loop-koharu-minagi.gif","https://c.tenor.com/-qfnP6F_EtIAAAAM/yuru-yuri-chinatsu-yoshikawa.gif","https://c.tenor.com/Siz8Wx5vgMAAAAAM/marin-kitagawa-anime-marin-kitagawa.gif","https://c.tenor.com/yg83EZtFemcAAAAM/roxy-migurdia-migurdia.gif","https://c.tenor.com/6dRXjgbOSp0AAAAM/kuroko-anime.gif","https://c.tenor.com/_PoQLdUNY6sAAAAM/noela-nya.gif","https://c.tenor.com/wKkkqJhAzI8AAAAM/anime-princess.gif","https://c.tenor.com/UEHBuP6qzvYAAAAM/shiroi-suna-no-aquatope-the-aquatope-on-white-sand.gif","https://c.tenor.com/qo73J_c-u08AAAAM/cute-anime-cute-anime-girl.gif","https://c.tenor.com/F50NWQLNIpkAAAAM/anime-shy.gif","https://c.tenor.com/o1biwLLp2IwAAAAM/kawaii-anime-girl.gif","https://c.tenor.com/mSqEgKfI3uUAAAAM/my-hero-academia-anime.gif","https://c.tenor.com/MpZE5dVfQxkAAAAM/bang-dream-bandori.gif","https://c.tenor.com/uq1xgndD6n4AAAAM/anime-swimsuit-anime-school-swimsuit.gif","https://c.tenor.com/3QO4tu0YohoAAAAM/talentless-nana-psycho.gif","https://c.tenor.com/WyJPPUOML4sAAAAM/anime-anime-hug.gif","https://c.tenor.com/PnNcm6o-eXkAAAAM/anya-forger-anya-spy-x-family-anime.gif","https://c.tenor.com/eleW2f2bhI8AAAAM/aihara-enju.gif"];

let result = Math.floor((Math.random() * replies.length));

let gifembed = new Discord.MessageEmbed()

.setTitle("Anime Gif ;")
.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);



};



exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: ['gif-anime','anime-gif','gifanime','animegif'],
  permLevel: 0

};

exports.help = {



  name: 'anime',
  description: 'anime',
  usage: 'anime'

};

///hebele