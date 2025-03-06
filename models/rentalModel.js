// models/rentalModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Rental = sequelize.define('Rental', {
    rental_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Users',
            key: 'user_id',
        },
    },
    camera_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Cameras',
            key: 'camera_id',
        },
    },
    rental_start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    rental_end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    rental_total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Rental;
