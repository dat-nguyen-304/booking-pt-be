'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AllCode extends Model {
        static associate (models) {
        }
    };
    AllCode.init({
        codeId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        key: DataTypes.STRING,
        value: DataTypes.STRING,
        type: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'AllCode',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'codeId'
    });
    return AllCode;
};