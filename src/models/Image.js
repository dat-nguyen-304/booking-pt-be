'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {
        static associate (models) {
            Image.belongsTo(models.Session, { foreignKey: 'sessionId', as: 'session' });
        }
    };
    Image.init({
        imageId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        sessionId: DataTypes.INTEGER,
        imgLink: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Image',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'imageId'
    });
    return Image;
};