const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const Discord = require('discord.js')
const { fecha } = require('../funciones/funciones.js')
module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('fichar')
    .setDescription('Ficha jugadores para tu club.')
    .addUserOption(option =>
        option.setName('jugador')
        .setDescription('Jugador a fichar')
        .setRequired(true)
    ),
    execute: async (interaction) => {
        let nombreEquipo = `Equipo de ${interaction.user.username}`
        let nombreJugador = interaction.options.getUser('jugador');
        let nombreCompetencia = 'Liga de Campeones';
        let contrato = `
###        Contrato de Jugador

**Equipo:** ${nombreEquipo}  
**Jugador:** ${nombreJugador}
**Fecha:** ${fecha()}

**Duración:** El contrato es válido por la temporada actual o hasta la finalización de **${nombreCompetencia}**. El jugador se compromete a asistir a entrenamientos y partidos, respetar a compañeros y cuerpo técnico, y mantener una actitud colaborativa. El equipo, a su vez, debe ofrecer un ambiente propicio, uniformes y garantizar la participación en competencias. Este acuerdo puede finalizar si alguna parte incumple los compromisos o por mutuo acuerdo, y el jugador se compromete a mantener la confidencialidad de la información del equipo.

**Firma del Jugador:** _____________________  
**Firma del Representante del Equipo:** _____________________
`;
        const buttons = new ActionRowBuilder().addComponents(
            new ButtonBuilder({
                style: 1,
                emoji: '✅',
                custom_id: 'accept'
            }),
            new ButtonBuilder({
                style: 2,
                emoji: '❌',
                custom_id: 'denied'
            })
        ) // termino de constante botones
        interaction.reply({content: contrato, components: [buttons]})
    }
}