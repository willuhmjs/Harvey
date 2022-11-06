import { DataTypes, Model } from 'sequelize';

class EnabledFeature extends Model {}

const EnabledFeatureModelInit = (sequelize) => {
    EnabledFeature.init({
        guildId: DataTypes.STRING,
        featureId: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'EnabledFeature'
    });
};

export { EnabledFeature, EnabledFeatureModelInit };