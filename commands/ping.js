const Discord = require("discord.js")
const botconfig = require("../tokan.json");

module.exports.run = async (bot, message, args, client) => {
    const m = await message.channel.send("Ping?");

    m.edit(`
    La latence est de ${m.createdTimestamp - message.createdTimestamp} ms`);

}
  module.exports.config = {
      name: "ping",
      description: "ping",
      usage: "*ping",
      accessableby: "Members",
      aliases: ["ping"]
  }