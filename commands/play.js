const ytdl = require('ytdl-core');
const Discord = require("discord.js")
const botconfig = require("../tokan.json");


module.exports.run = async (bot, message, args) => {


// Vérification
if (!message.member.voice.channel)
return message.channel.send('Connectez vous à un salon vocal!');
if (message.guild.me.voiceChannel)
return message.channel.send('Le bot est déjà connecté à un salon!');
if (!args[0])
return message.channel.send('Merci de préciser un lien YouTube');
const validate = await ytdl.validateURL(args[0]);
if (!validate) return message.channel.send("Désolé, l'URL n'est pas valide!");
// Commande
const info = await ytdl.getInfo(args[0]);
const connection = await message.member.voice.channel.join();
const dispatcher = await connection.playStream(
    ytdl(args[0], { filter: 'audioonly' })
);
message.channel.send('Musique ajoutée : ${info.title}');
}

module.exports.config = {
    name: "play",
    description: "play",
    usage: "*play",
    accessableby: "Members",
    aliases: ["play"]
}