import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
// import { createCourseChannel } from '../lib/courseChannels.js';
import { logger } from '../../logger.js';

export default {
    body: new SlashCommandBuilder()
        .setName('new-recipe')
        .setDescription('Adds a recipe to the cookbook.')
        .addStringOption(new SlashCommandStringOption()
            .setName("name")
            .setDescription("The name of the recipe which you are creating.")
            .setRequired(true)
        )
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const recipeName = interaction.options.getString("name");
        //await createCourseChannel(courseChannelName, interaction.guild);
        interaction.reply(`Recipe created: ${recipeName}`);
        logger.info(`Created recipe: ${recipeName}`);
    }   
};