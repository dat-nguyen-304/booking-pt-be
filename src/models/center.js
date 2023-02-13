'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Center extends Model {
        static associate (models) {
        }
    };
    Center.init({
        centerId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
        },
        centerName: DataTypes.STRING,
        address: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        imgLink: DataTypes.STRING,
        activate : DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Center',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'centerId'
    });
    return Center;
};