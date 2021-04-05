module.exports = {
    name: 'izbaci',
    description: "This command kicks a member!",
    execute(message, args){
        if(message.member.roles.cache.has('827905015531962418')){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("「🔥」Ne mozes kikovati tog membera!");
        }
        }else{
            message.channel.send(`「🔥」Komanda nije izvrsena`);
        }
    }
}