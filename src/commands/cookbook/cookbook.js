import { SlashCommandBooleanOption, SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
// import { createCourseChannel } from '../lib/courseChannels.js';
import { logger } from '../../logger.js';

export default {
    body: new SlashCommandBuilder()
        .setName('cookbook')
        .setDescription('Open the cookbook and view recipes.')
        .addStringOption(new SlashCommandStringOption()
            .setName("recipe")
            .setDescription("The name of a recipe which you want to find.")
            .setRequired(false)
        )
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const recipeName = interaction.options.getString("recipe");
        //await createCourseChannel(courseChannelName, interaction.guild);
        interaction.reply(`Opened cookbook: ${recipeName}`);
        logger.info(`Opened cookbook: ${recipeName}`);
    }   
};