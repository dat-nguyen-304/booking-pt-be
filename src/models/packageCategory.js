'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PackageCategory extends Model {
        static associate (models) {
        }
    };
    PackageCategory.init({
        packageCategoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
        },
        packageCategoryName: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        activate : DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'PackageCategory',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'packageCategoryId'
    });
    return PackageCategory;
};