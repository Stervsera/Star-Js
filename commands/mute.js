const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    permissions: "MANAGE_ROLES",
    execute(client, message, args) {

        
        const target = message.mentions.users.first();
        if (target) {

            if(target.bot) return;
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Cant find that member!');
        }
        if(!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send("You do not have permision to use this command")
        }
    }
}