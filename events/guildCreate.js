// This event executes when a new guild (server) is joined.

module.exports = (client, guild) => {
  // We need to add this guild to our settings!
  client.config = require("../config.js");
  const settings = message.guild ? client.settings.get(message.guild.id) : client.config.defaultSettings;
  client.user.setGame(`!help | In ${client.guilds.size} servers, with ${client.users.size} users`)
};
