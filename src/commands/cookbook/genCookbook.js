import { SlashCommandBooleanOption, SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
// import { createCourseChannel } from '../lib/courseChannels.js';
import { logger } from '../../logger.js';

export default {
    body: new SlashCommandBuilder()
        .setName('generate-cookbook')
        .setDescription('Generate the cookbook.')
        .setDefaultMemberPermissions(0)
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        //await createCourseChannel(courseChannelName, interaction.guild);
        interaction.reply(`Generated cookbook.`);
        logger.info(`Generated cookbook.`);
    }   
};