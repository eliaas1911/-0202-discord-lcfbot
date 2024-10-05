const Discord = require("discord.js");

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName("ping")
    .setDescription("Muestra el ping del bot."),

    execute: async (interaction) => {
        interaction.reply("pong")
    }
}
