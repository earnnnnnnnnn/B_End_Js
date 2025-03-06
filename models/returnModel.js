// models/returnModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Return = sequelize.define('Return', {
    return_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rental_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Rentals',
            key: 'rental_id',
        },
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    return_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Return;
