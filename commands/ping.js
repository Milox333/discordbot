module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        if(message.member.roles.cache.has('826389131189813259')){
            message.channel.send('<@487982495921602571> PICKA!')

        } else {
            message.channel.send('Nemas premisiju!');
        }
    }
}