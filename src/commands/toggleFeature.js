import { SlashCommandBuilder, SlashCommandStringOption } from '@discordjs/builders';
import Feature, { toggleFeature } from '../lib/features.js';

export default {
    body: new SlashCommandBuilder()
        .setName('toggle-feature')
        .setDescription('Enables/Disables a Harvey feature.')
        .addRoleOption(
            new SlashCommandStringOption()
                .setName('feature')
                .setDescription('The feature which you would like to enable or disable.')
                .addChoices(Object.values(Feature))
                .setRequired(true)
        )
        .setDefaultMemberPermissions(0)
        .setDMPermission(false),
    onTriggered: async function(interaction) {
        const feature = interaction.options.getString("feature");
        const result = await toggleFeature(feature);
        interaction.reply(`Toggled ${feature} | ${ result ? "ON" : "OFF" }`);
    }   
};