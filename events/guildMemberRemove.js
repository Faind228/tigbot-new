// This event executes when a new member joins a server. Let's welcome them!

module.exports = (client, member) => {
    // Load the guild's settings
    const settings = client.settings.get(member.guild.id);
  
    // If welcome is off, don't proceed (don't welcome the user)
    if (settings.leaveEnabled !== "true") return;
  
    // Replace the placeholders in the welcome message with actual data
    const leaveMessage = settings.leaveMessage.replace("{{user}}", member.user.tag);
  
    // Send the welcome message to the welcome channel
    // There's a place for more configs here.
    member.guild.channels.find("name", settings.leaveChannel).send(leaveMessage).catch(console.error);
  };
  