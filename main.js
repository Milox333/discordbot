const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
    console.log('Bot je online!');
});
const prefix = '*';
 

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'izbaci'){
        client.commands.get('izbaci').execute(message, args);
    } 
    else if(command === 'ocisti'){
        client.commands.get('ocisti').execute(message, args);
    }
    else if(command === 'pomoc'){
        client.commands.get('pomoc').execute(message, args);
    } 
    else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } 
    else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } 
    else if(command === 'slowmode'){
        client.commands.get('slowmode').execute(message, args);
    }
    else if(command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
    }
    else if(command === 'join'){
        client.commands.get('join').function(client, message, args);
    }
    else if(command === 'play'){
        client.commands.get('play').execute(message,args, cmd, client);
    }
    else if(command === 'pitaj'){
        client.commands.get('pitaj').execute(client, message, args);
    }
});







client.login('NzE5NDg1NDY3NjI3ODgwNDY5.Xt4HDg.-KohX9W94qjkjt6X9QobVvKVX8E');