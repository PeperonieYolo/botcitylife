const Discord = require('discord.js');
const moment = require("moment");

const status = {
    online: "En Ligne",
    idle: "Absent",
    dnd: "Ne pas déranger",
    offline: "Hors Ligne/Invisible"
};

exports.run = (client, message, args) =>{
    var now = moment.locale('fr');
    var permissions = [];
    var acknowledgements = 'None';
   
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); }); 
    
    if(message.member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
    }
    
    if(message.member.hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrator");
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Manage Messages");
    }
    
    if(message.member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
    
    if(message.member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }

    if(message.member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }

    if(message.member.hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }

    if(message.member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }

    if(message.member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }

    if(permissions.length == 0){
        permissions.push("No Key Permissions Found");
    }

    if(member.user.id == message.guild.ownerID){
        acknowledgements = 'Server Owner';
    }

    const embed = new Discord.MessageEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor(randomColor)
        .setFooter(`ID: ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField('Rejoint le: ',`${moment(member.joinedAt).format("dddd D MMMM YYYY HH:mm")}`, true)
        .addField("Créé le: ",`${moment(message.author.createdAt).format("dddd D MMMM YYYY HH:mm")}`, true)
        .addField("Permissions: ", `${permissions.join(', ')}`, true)
        .addField(`Rôles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)

    message.channel.send({embed});

}

module.exports.config = {
    name: "userinfo",
    description: "userinfo",
    usage: "*userinfo",
    accessableby: "Members",
    aliases: ["userinfo"]
}