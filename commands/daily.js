const db = require('cookiesdb');
const { RichEmbed } = require('discord.js');
const timedOut = []; // Empty array for Daily Command
exports.run = (client, message, args, level) => {
const randomized = Math.floor(Math.random() * 150);

		if (timedOut.includes(message.author.id)) {
			return message.channel.send('Please wait 24 Hours or Less until you can get Your Daily Money Again!')
		} else {
			db.updateCookies(`User_${message.author.id}`, parseInt(randomized)).then(i => {
				var embed = new RichEmbed()
					.setColor(0xfc6b6b)
					.setTitle(':bank: The Bank')
					.setDescription('The bank has Given you :dollar: ' + randomized + '\nYou now have :dollar: ' + i.value.toLocaleString());
				message.channel.send({ embed })
				timedOut.push(message.author.id);
			})
			setTimeout(function() {
				var index = timedOut.indexOf(messae.author.id);
				if (index > -1) {
					timedOut.splice(index, 1)
				}
			}, 86400000)
        }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["free", "dailys"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "daily",
    category: "Economy",
    description: "Daily free money.",
    usage: "daily"
  };