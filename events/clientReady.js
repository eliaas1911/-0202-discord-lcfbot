const { Events } = require('discord.js');
module.exports = {
    name: Events.ClientReady,
    async execute(client) {
        client.user.setPresence({
            activities: [{
                details: "24H Liga de Campeones x4",
                state: "Entra en nuestro servidor público de Haxball",
                name: "la mejor liga x4!",
                type: 1,
                url: "https://www.twitch.tv/discord"
              }
              ]
        })
        let clientGuilds = client.guilds.cache.map(guild => guild.name).join('\n')
        console.log('Logeado como '+ client.user.tag+`\n Me encuentro en ${clientGuilds}`)
    },
};
