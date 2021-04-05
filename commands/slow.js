const Discord = require('discord.js');
module.exports = {
    name: 'slowmode',
    description: 'Slowmode kanala',
async execute(message, args){
    if (!message.member.hasPermission("BAN_MEMBERS")){
        messages.channel.send(new Discord.MessageEmbed() .setDescription('Nemas Premisiju') .setColor('RED'))
        return;
    }

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed() .setDescription('Greska nisi uspisao vreme!') .setColor('RED'));
    if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed() .setDescription('Greska nisi napisao broj!') .setColor('RED'));
    if (args[0] > 21600 || args[0] < 1) return message.channel.send(new Discord.MessageEmbed() .setDescription('broj mora biti 1 - 21600') .setColor('RED'))

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]) || message.channel

        channel.setRateLimitPerUser(args[0])
        message.channel.send(new Discord.MessageEmbed() .setDescription(`Slowmode je psotavljen na ${args[0]} sekundi`) .setColor('RED'))
        return;

    message.channel.send(new Discord.MessageEmbed() .setDescription(`Slowmode je postavljen na ${args[0]}`) .setColor('RED'))

    .catch((e) => {
        message.channel.send('Greska!')
        e ? console.error(e) : console.log('Uknown Error')
    })
}
}