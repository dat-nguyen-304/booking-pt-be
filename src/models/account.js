'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Account extends Model {
        static associate (models) {
        }
    };
    Account.init({
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        dob: DataTypes.DATE,
        gender: DataTypes.BOOLEAN,
        role: DataTypes.ENUM('admin', 'user', 'pt'),
        email: DataTypes.STRING,
        activate: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Account',
        freezeTableName: true,
        timestamps: false,
        idAttribute: 'accountId'
    });
    return Account;
};