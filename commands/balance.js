const { RichEmbed } = require('discord.js');
const db = require('cookiesdb');
exports.run = (client, message, args, level) => {
let user = message.mentions.users.first();

		if (!user) {
			user = message.author
		}

		db.fetchCookies(`User_${user.id}`).then(i => {
			var embed = new RichEmbed()
				.setColor(0xfc6b6b)
				.setTitle(':bank: The Bank')
				.setDescription(`The account/user named: ${user.tag}\nHas :dollar: ${i.value.toLocaleString()} in his/her account.`)
			message.channel.send({ embed })
        })
    }
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["bal", "money"],
        permLevel: "User"
      };
      
      exports.help = {
        name: "balance",
        category: "Economy",
        description: "Shows your balance",
        usage: "balance <user>"
      };