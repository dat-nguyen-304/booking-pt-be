'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        static associate (models) {
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
        slotTime: DataTypes.STRING,
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