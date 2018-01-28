const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const Discord = require("discord.js")
  var embed = new Discord.RichEmbed()
  .setColor(0xed8218) 
  .setTitle(`Stats`)
  .addField("• Mem Usage", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB", true)
  .addField("• Uptime",duration, true )
  .addField("• Users", client.users.size.toLocaleString(), true)
  .addField("• Servers", client.guilds.size.toLocaleString(), true)
  .addField("• Channels",client.channels.size.toLocaleString(), true)
  .addField("• Discord.js",version, true)
  .addField("• Node", process.version, true);
message.channel.send({embed})

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
