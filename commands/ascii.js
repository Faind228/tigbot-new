const figlet = require('figlet');

exports.run = (bot, message, args) => {
    const text = args.join(" ");
    figlet(text, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    if (data.length > 2000) return message.channel.send("That is WAYYYY to long! You may wanna shorten up the word!")
    message.channel.send(`\`\`\`\n${data}\n\`\`\``)
});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["cooltext", "ct"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "ascii",
    category: "Fun",
    description: "Returns cool text.",
    usage: "ascii <normal text>"
  };
  