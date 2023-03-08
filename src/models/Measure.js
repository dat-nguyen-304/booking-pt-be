'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Measure extends Model {
        static associate (models) {
            Measure.belongsTo(models.Trainee, { foreignKey: 'traineeId', as: 'trainee' });
        }
    };
    Measure.init({
        measureId: {
            type: DataTypes.INTEGER,
            primaryKey: true, // nếu không thêm cái này, sequelize sẽ mặc định thêm trường "id"
            autoIncrement: true
        },
        traineeId: DataTypes.INTEGER,
        recorder: DataTypes.STRING,
        time: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Measure',
        freezeTableName: true, // Nếu = false sequelize sẽ tự thêm 's' cho modelName nếu modelName chưa ở dạng số nhiều
        timestamps: false, // nếu = true sequelize sẽ thêm trường createdAt, updatedAt
        idAttribute: 'measureId'
    });
    return Measure;
};