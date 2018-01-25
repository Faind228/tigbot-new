exports.run = function (client, message, args){
  const Discord = require("discord.js")
		message.channel.send("Pinging...").then(m => {
			var lat_ms = (m.createdTimestamp - message.createdTimestamp);
			var api_ms = (Math.round(client.ping));
			m.delete().then().catch(console.error);
			
			const embed = new Discord.RichEmbed()
			.setTitle("Pong!")

			.setColor(0x00AE86)
			.addField("Latency", lat_ms + "ms", true)
			.addField("API", api_ms + "ms", true)
			message.channel.send({embed});
		}).catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "It... like... pings. Then Pongs. And it\"s not Ping Pong.",
  usage: "ping"
};
