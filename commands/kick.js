const Discord = require("discord.js")
const botconfig = require("../tokan.json");

module.exports.run = async (bot, message, args) => {
 
    let member = message.mentions.members.first();

    if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "433349723856830474") return message.channel.send("Désolé, vous n'avez pas les autorisations nécessaires pour kick !");

    if(!member)
      return message.reply("Veuillez mentionner un membre valide de ce serveur");
    if(!member.bannable) 
      return message.reply("Je ne peux pas kick cet utilisateur ! A-t-il un rôle plus important ? Ai-je des autorisations pour kick ?");

      let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée');
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author} Je ne pouvais pas kick à cause de : ${error}`));
      const embed = new Discord.MessageEmbed()
        .setTitle("Le fils de pute a été Kick")
        .setAuthor("Aritor#8947", "https://media.discordapp.net/attachments/676491882892623893/696171924056834078/Lucifersexywoula.gif","https://discord.gg/4AYgFpB")
        .setColor("#ff0000")
        .setDescription(`\nL'utilisateur ${member} a été "Kick" avec succés\n**Par :** ${message.author}\n**Raison :** ${reason}`)
        .setThumbnail("https://media.giphy.com/media/ikcJ56KAyhm8w/giphy.gif")
        .setTimestamp()
        message.channel.send({embed})
}


module.exports.config = {
    name: "kick",
    description: "Kick les pd",
    usage: "*kick",
    accessableby: "Admin",
    aliases: ["kick"]
}