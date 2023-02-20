'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Index extends Model {
        static associate (models) {
        }
    };
    Index.init({
        indexId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        indexCategoryId: DataTypes.INTEGER,
        measureId: DataTypes.INTEGER,
        indexNumber: DataTypes.FLOAT,
        indexDescription: DataTypes.STRING,
        unit: DataTypes.STRING,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Index',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'indexId'
    });
    return Index;
};