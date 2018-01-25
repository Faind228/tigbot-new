const Discord = require("discord.js");

var didNotEndWithQuestionmark = 
    [
        "Really hope your english teacher does not see this",
        "Did you go to school?",
        "You should think about re-doing 5th grade",
        "Online school is always an option",
        "?"
    ]

var endedWithQuestionmark = 
    [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, Yes",
        "Most likely",
        "Outlook seems good",
        "Yeah whatever keeps you smiling",
        "Signs are pointing to yes",
        "Reply is hazy, try again",
        "Ask me again later",
        "It's better not to tell you now",
        "I cannot predict right now",
        "Concentrate and ask me again",
        "Don't count on it",
        "Don't put your hopes on it",
        "My reply is No",
        "My sources are telling me no",
        "Outlook doesn't seem so good",
        "It's very doubtful"
    ]

exports.run = async (bot, message) => {
    const args = message.content.split(" ").slice(1).join(" ");
    if (!args) {
        const embed5 = new Discord.RichEmbed()
        .setDescription(`Do you really expect me to reply to **NOTHING**?`)
        .setColor(0x000000)
        message.channel.send({embed: embed5})
        return;
    }
    
    if (!args[3]) {
        const embed4 = new Discord.RichEmbed()
        .setDescription(`I couldn't process **${args}** as a question, maybe try to ask an Actual question?`)
        .setColor(0x000000)
        message.channel.send({embed: embed4})
        return;
    }
    
    if (!args[2]) {
        const embed3 = new Discord.RichEmbed()
        .setDescription(`I couldn't process **${args}** as a question, maybe try to ask an Actual question?`)
        .setColor(0x000000)
        message.channel.send({embed: embed3})
        return;
    }
    
    const embed = new Discord.RichEmbed()
    .setDescription(`:8ball: **||** ${endedWithQuestionmark[Math.floor(Math.random() * endedWithQuestionmark.length)]}`)
    .setColor(0x000000)
    message.channel.send({embed: embed})
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["8bal", "8", "ball"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "8ball",
    category: "Fun",
    description: "Ask your question.",
    usage: "8ball <normal text>"
  };