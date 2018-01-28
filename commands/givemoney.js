exports.run = (client, message, args, level) => {
    const db = require('cookiesdb');
    const { RichEmbed } = require('discord.js');
    let user = message.mentions.users.first();
    let money = args[1]
    db.updateCookies(`User_${message.author.id}`, parseInt(money)).then(i => {
        var embed = new RichEmbed()
            .setColor(0xfc6b6b)
            .setTitle(':bank: The Bank')
            .setDescription('You granted :dollar: ' + money + ' to ' + user);
        message.channel.send({ embed })
    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["grant", "moneygive"],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "givemoney",
    category: "Economy",
    description: "Gives money to a user (Only for users with Administrator rank)",
    usage: "givemoney <user> <number of money>"
  };