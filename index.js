const { Events, REST, Routes, Client } = require("discord.js");
const Discord = require("discord.js")

const fs = require("fs")
const path = require('path');
const config = require("./config.json")

require("dotenv").config();

const client = new Client({
    intents: 3276799
})
client.events = new Discord.Collection();
client.commands = new Discord.Collection();

const eventFiles = fs.readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args));
}

fs.readdirSync("./slash_commands").forEach((commandFile) => {
    const command = require(`./slash_commands/${commandFile}`);
    client.commands.set(command.data.name, command)
})

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN)

    try {
        rest.put(Discord.Routes.applicationCommands(config.clientId),
            {
                body: client.commands.map((cmd) => cmd.data.toJSON()),
            }
        );
        console.log(`Cargado ${client.commands.size} comandos de /barr`)
    } catch (error) {
        console.log(error);
    }

client.on(Events.InteractionCreate, async (interaction) => {
    try{
    if(interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName)
        command.execute(interaction).catch(console.error);
    } else {
        const {customId} = interaction;
        const execute = require(`./interactions/${customId}.js`)
        execute(interaction);
    }
} catch (error) {
    console.log(error)
}
})

client.login(process.env.TOKEN);