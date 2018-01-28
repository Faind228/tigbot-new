exports.run = async (client, message, args, level) => {
  const Discord = require("discord.js")
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  const embed = new Discord.RichEmbed()
  .setColor(0xed8218) 
  .setTitle("Permission lvl")
   .addField(`Your permission level is: `, `${level} - ${friendly}`)
  message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["lvl", "mylvl"],
  permLevel: "User"
};

exports.help = {
  name: "mylevel",
  category: "Miscelaneous",
  description: "Tells you your permission level for the current message location.",
  usage: "mylevel"
};
