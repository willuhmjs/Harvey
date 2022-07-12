import { SlashCommandBuilder, SlashCommandRoleOption, SlashCommandStringOption } from '@discordjs/builders';
import { deleteCourseChannel } from '../lib/courseChannels.js';
import { logger } from '../logger.js';

export default {
    body: new SlashCommandBuilder()
        .setName('delete-course')
        .setDescription('Deletes a course.')
        .addRoleOption(new SlashCommandRoleOption()
            .setName("course-role")
            .setDescription("The role which is associated with the course.")
            .setRequired(true)
        )
        .setDefaultMemberPermissions(0)
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const courseChannelRole = interaction.options.getRole("course-role");
        await deleteCourseChannel(courseChannelRole.id, interaction.guild);
        interaction.reply(`Deleted course ${courseChannelRole.name}.`);
        logger.info(`Deleted course ${courseChannelRole.name}`);
    }   
};