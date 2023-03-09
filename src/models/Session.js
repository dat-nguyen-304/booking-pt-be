'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        static associate (models) {
            Session.belongsTo(models.TraineePackage, { foreignKey: 'traineePackageId', as: 'traineePackage' });
            Session.belongsTo(models.Trainee, { foreignKey: 'traineeId', as: 'trainee' });
            Session.belongsTo(models.Center, { foreignKey: 'centerId', as: 'center' });
            Session.belongsTo(models.PT, { foreignKey: 'PTId', as: 'PT' });
            Session.belongsTo(models.Slot, { foreignKey: 'slotId', as: 'slot' });
        }
    };
    Session.init({
        sessionId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        traineePackageId: DataTypes.INTEGER,
        traineeId: DataTypes.INTEGER,
        centerId: DataTypes.INTEGER,
        PTId: DataTypes.INTEGER,
        slotId: DataTypes.INTEGER,
        noteFromTrainee: DataTypes.STRING,
        noteFromPT: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        date: DataTypes.DATE,

    }, {
        sequelize,
        modelName: 'Session',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'sessionId'
    });
    return Session;
};