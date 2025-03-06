// cameraModel.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // เชื่อมต่อกับฐานข้อมูล

const Camera = sequelize.define('Camera', {
    camera_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cameraimg: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cameraname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rental_price_per_day: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    replacement_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Camera;
