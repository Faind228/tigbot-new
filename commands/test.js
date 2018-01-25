exports.run = async (client, message, args) => {
message.channel.send(message.guild.channels)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Administrator"
  };
  
  exports.help = {
    name: "test",
    category: "Miscelaneous",
    description: "Sffe",
    usage: "test <package name>"
  };
  