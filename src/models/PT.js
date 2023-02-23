'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PT extends Model {
        static associate (models) {
        }
    };
    PT.init({
        PTId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        centerId: DataTypes.INTEGER,
        fullName: DataTypes.STRING,
        rating: DataTypes.FLOAT,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PT',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'PTId'
    });
    return PT;
};