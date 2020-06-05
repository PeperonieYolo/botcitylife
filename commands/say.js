exports.run = async (client, message) => {

    const Discord = require("discord.js");

    let args = message.content.split(` `).slice(1);

      message.delete().catch(err => {
          if(err) console.log(`[Erreur] ${err}`);
      });
  
  if(!args) return message.channel.send(`⚠ Pas de message spécifié !`);
  if(["@everyone", "@here"].some(ping => args.includes(ping))) return message.channel.send(`⚠ Mentionner \`@everyone\` ou \`@here\` est interdit !`);
  
  message.channel.send(`**[Anonyme]** ` + args.join(` `));
}

module.exports.config = {
    name: "say",
    description: "say",
    usage: "*say",
    accessableby: "Members",
    aliases: ["say"]
}