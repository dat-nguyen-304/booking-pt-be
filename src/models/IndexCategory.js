'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class IndexCategory extends Model {
        static associate (models) {
        }
    };
    IndexCategory.init({
        indexCategoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        indexCategoryName: DataTypes.STRING,
        createdAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'IndexCategory',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'indexCategoryId'
    });
    return IndexCategory;
};