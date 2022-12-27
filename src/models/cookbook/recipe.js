import { DataTypes, Model } from 'sequelize';

class Course extends Model {}

const CourseModelInit = (sequelize) => {
    Course.init({
        name: DataTypes.STRING,
        instructions: DataTypes.STRING,
        ingredients: DataTypes.STRING,
        author: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Course'
    });
};

export { Course, CourseModelInit };