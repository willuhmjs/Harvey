import { EnabledFeature } from "../models/enabledFeatures";

/**
 * This is the feature enum. It is an easy way to use feature strings from the database.
 */
const Feature = {
    ThreadOfTheDay: "feature.thread_of_the_day"
}

export async function toggleFeature(feature, guild) {
    const enabledFeature = await EnabledFeature.findOne({
        where: {
            guildId: guild.id,
            featureId: feature
        }
    })

    if(enabledFeature) {
        await enabledFeature.destroy();
        return false;
    }

    await EnabledFeature.create({
        guildId: guild.id,
        featureId: feature
    });
    return true;
}

export async function isFeatureEnabled(feature, guild) {
    const enabledFeature = await EnabledFeature.findOne({
        where: {
            guildId: guild.id,
            featureId: feature
        }
    })

    if(enabledFeature) {
        return true;
    }

    return false;
} 

export default Feature;