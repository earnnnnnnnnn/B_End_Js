// models/reservationModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
    reservation_id: {
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
    reservation_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    reserved_until: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Reservation;
