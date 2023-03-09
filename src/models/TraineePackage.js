'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TraineePackage extends Model {
        static associate (models) {
            TraineePackage.belongsTo(models.Center, { foreignKey: 'mainCenterId', as: 'center' });
            TraineePackage.belongsTo(models.PT, { foreignKey: 'mainPTId', as: 'PT' });
            TraineePackage.belongsTo(models.Slot, { foreignKey: 'mainSlotId', as: 'slot' });
            TraineePackage.belongsTo(models.Trainee, { foreignKey: 'traineeId', as: 'trainee' });
            TraineePackage.belongsTo(models.Package, { foreignKey: 'packageId', as: 'package' });
            TraineePackage.belongsTo(models.Payment, { foreignKey: 'paymentId', as: 'payment' });
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
        mainSlotId: DataTypes.INTEGER,
        mainCenterId: DataTypes.INTEGER,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        registerDate: DataTypes.DATE,
        remainDay: DataTypes.INTEGER,
        status: DataTypes.ENUM('active', 'expired'),
    }, {
        sequelize,
        modelName: 'TraineePackage',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'traineePackageId'
    });
    return TraineePackage;
};