module.exports = {
  name: "pomoc",
  aliases: [],
  permissions: [],
  description: "open a ticket!",
  async execute(message, args, cmd, client, discord) {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
    channel.setParent("826389285976014879");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const reactionMessage = await channel.send("Hvala sto si kontaktirao STAFF TEAM!");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => (message.member.roles.cache.has('827905181068689419')),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Ovaj kanal ce biti izbrisan za 5 sekundi!!");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`Staff ce uskoro biti sa vama u ${channel}!`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 30000);
        setTimeout(() => message.delete(), 30000);
      })
      .catch((err) => {
        throw err;
      });
  },
};
