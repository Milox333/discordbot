module.exports = {
    name: 'ocisti',
    description: "Clear messages!",
   async  execute(message, args) {
        if (!args[0]) return message.reply("Upisi broj koliko poruka zelis da obrises!");
 
        if(isNaN(args[0])) return message.reply("Upisi broj");
 
        if(args[0] > 100) return message.reply("Ne mozes da obrises vise od 100 poruka!");
        
        if(args[0] < 1) return message.reply("Ne mozes da izbrises manje od 1 poruke!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   
