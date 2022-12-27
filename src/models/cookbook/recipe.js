import { DataTypes, Model } from 'sequelize';

class Recipe extends Model {}

const RecipeModelInit = (sequelize) => {
    Recipe.init({
        name: DataTypes.STRING,
        instructions: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        author: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Recipe'
    });
};

export { Recipe, RecipeModelInit };