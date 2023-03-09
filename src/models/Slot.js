'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Slot extends Model {
        static associate (models) {
        }
    };
    Slot.init({
        slotId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        slotName: DataTypes.STRING,
        slotTime: DataTypes.STRING,
        activate: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Slot',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'slotId'
    });
    return Slot;
};