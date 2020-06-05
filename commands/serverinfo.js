const Discord = require("discord.js")
const botconfig = require("../tokan.json");
const colours = require("../colours.json");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(colours.cyan)
    .setTitle("Informations sur le serveur")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Information`, message.guild.iconURL)
    .addField("**Nom du serveur:**", `${message.guild.name}`, true)
    .addField("**Propriétaire du serveur:**", `${message.guild.owner}`, true)
    .addField("**Nombre de membres:**", `${message.guild.memberCount}`, true)
    .setFooter(`CityLife | Roleplay`, bot.user.displayAvatarURL);
    message.channel.send({embed});
}


module.exports.config = {
    name: "serverinfo",
    description: "Tire le serverinfo du serveur !",
    usage: "*serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}