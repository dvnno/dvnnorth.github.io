module.exports = function (sequelize, DataTypes) {
    const Projects = sequelize.define('projects', {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    });
    return Projects;
}
