const { MessageEmbed } = require("discord.js");
module.exports = {
  info: {
    name: "join",
    description: "Join the Voice channel",
    usage: "[command]",
    aliases: ["join", "joinvc", "j"]
  },

  run: async function(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);
    voiceChannel.join();
    const Embed = new MessageEmbed()
            .setAuthor("Joined the VoiceChannel", "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/Music.gif")
            .setColor("GREEN")
            .setTitle("Success")
            .setDescription("🎶 Joined Successfully Let's Do it Run %p (song)")
            .setTimestamp();
             return message.channel.send(Embed).catch(() => message.channel.send("🎶 Joined Successfully Let's Do it"));


    
  },
}