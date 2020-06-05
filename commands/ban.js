const Discord = require("discord.js")
const botconfig = require("../tokan.json");

module.exports.run = async (bot, message, args) => {

        let member = message.mentions.members.first();

        if (!message.member.hasPermission("BAN_MEMBERS")  && message.author.id !== "433349723856830474") return message.channel.send("Désolé, vous n'avez pas les autorisations nécessaires pour ban !");

        if(!member)
          return message.reply("Veuillez mentionner un membre valide de ce serveur");
        if(!member.bannable) 
          return message.reply("Je ne peux pas ban cet utilisateur ! A-t-il un rôle plus important ? Ai-je des autorisations pour ban ?");
    
          let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
        
        await member.ban(reason)
          .catch(error => message.reply(`Désolé ${message.author} Je n'ai pas pu le ban à cause de : ${error}`));
          const embed = new Discord.MessageEmbed()
            .setTitle("Le fils de pute a été Ban")
            .setAuthor("CityLife#7556", "https://cdn.discordapp.com/attachments/717400216793514044/718144227833282590/unknown.png","https://discord.gg/Y76pxu")
            .setColor("#ff0000")
            .setDescription(`\nL'utilisateur ${member} a été "Ban" avec succés\n**Par :** ${message.author}\n**Raison :** ${reason}`)
            .setThumbnail("https://media.giphy.com/media/1zFXgNa44Z904/giphy.gif")
            .setTimestamp()
            message.channel.send({embed})


}


module.exports.config = {
    name: "ban",
    description: "Ban les pd",
    usage: "*ban",
    accessableby: "Admin",
    aliases: ["ban"]
}