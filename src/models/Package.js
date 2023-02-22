'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Package extends Model {
        static associate (models) {
        }
    };
    Package.init({
        packageId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        packageName: DataTypes.STRING,
        price: DataTypes.INTEGER,
        durationByMonth: DataTypes.INTEGER,
        durationByDay: DataTypes.INTEGER,
        object: DataTypes.ENUM('newbie', 'intermediate', 'professional'),
        category: DataTypes.ENUM('class', 'pt'),
        createdAt: DataTypes.DATE,
        activate: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Package',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'packageId'
    });
    return Package;
};