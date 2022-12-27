/* eslint-disable camelcase */
import { Sequelize } from 'sequelize';
import { logger } from '../logger.js';

// Course
import { CourseModelInit } from './course.js';
import { CourseRolesSettingModelInit } from './courseRolesSetting.js';

// Cookbook
import { RecipeModelInit } from './cookbook/recipe.js'

logger.info("Initializing database connection.");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './data/database.sqlite'
});

CourseModelInit(sequelize);
CourseRolesSettingModelInit(sequelize);
RecipeModelInit(sequelize);

export { sequelize };