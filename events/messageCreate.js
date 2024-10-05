const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        // Comprobar si el mensaje es un comando
        const args = message.content.split(' ');
        const commandName = args[0].slice(1); // Remover el símbolo de comando
        
    },
};
