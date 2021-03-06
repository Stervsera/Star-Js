
//Creates a channel specifically for the member of the server that opened the ticket
module.exports = {
    name:'ticket',
    decription: 'Makes a ticket',
    aliases: ['close'],
    async execute(client, message, cmd, args, Discord){

        if (cmd === 'ticket'){
const modRole = message.guild.roles.cache.find(role => role.name === 'Admins');
const channel = await message.guild.channels.create(`ticket-${message.author.username}`)

//await is only valid in async function
await channel.setParent('811096759328833536');
console.log(channel.parentID);

    channel.updateOverwrite(message.guild.id, {SEND_MESSAGES: false, 'VIEW_CHANNEL': false});
    channel.updateOverwrite(message.author, {'SEND_MESSAGES': true, 'VIEW_CHANNEL': true})

//This is the emebed that the bot sends to the new ticket channel 
    channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Welcome to support!')
        .setDescription(`Dear, <@${message.author.id}>\nThank you for contacting our support team! We will reach to you ASAP!`)
    )

//This is the emebed that the bot sends to the channel where the command was excuted
    message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('We will reach to you ASAP!')
        .setDescription(`<#${channel.id}>`)
    )}

    if (cmd === 'close'){
        const channel = message.guild.channels.cache.get()
        channel.delete();
    }
}}