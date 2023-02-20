'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TraineePackage extends Model {
        static associate (models) {
        }
    };
    TraineePackage.init({
        traineePackageId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        mainPTId: DataTypes.INTEGER,
        traineeId: DataTypes.INTEGER,
        packageId: DataTypes.INTEGER,
        paymentId: DataTypes.INTEGER,
        defaultSlotId: DataTypes.INTEGER,
        defaultCenterId: DataTypes.INTEGER,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        registerDate: DataTypes.DATE,
        paymentDescription: DataTypes.STRING,
        remainDay: DataTypes.INTEGER,
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'TraineePackage',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'traineePackageId'
    });
    return TraineePackage;
};