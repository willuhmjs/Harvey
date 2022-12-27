/**
 * All currently registered commands should be listed below.
 */

import createCourse from "./createCourse.js";
import linkCourse from "./linkCourse.js";
import unlinkCourse from "./unlinkCourse.js";
import setCourseRoleChannel from "./setCourseRoleChannel.js";
import deleteCourse from "./deleteCourse.js";

// Cookbook Commands
import newRecipe from "./cookbook/newRecipe.js";
import cookbook from "./cookbook/cookbook.js";
import genCookbook from "./cookbook/genCookbook.js";

export default [
    createCourse,
    setCourseRoleChannel,
    linkCourse,
    deleteCourse,
    unlinkCourse,
    newRecipe,
    cookbook,
    genCookbook
];