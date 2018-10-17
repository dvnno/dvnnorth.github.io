module.exports = function (sequelize, DataTypes) {
    const Projects = sequelize.define('projects', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2, 20]
            }
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        description: {
            type: DataTypes.STRING(10000),
            allowNull: false,
            validate: {
                len: [2,10000]
            }
        },
        repo_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        deployed_url: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true
            }
        }
    });
    return Projects;
}
