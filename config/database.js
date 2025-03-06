// config/database.js

const { Sequelize } = require('sequelize');

// เปลี่ยนค่าเหล่านี้ตามการตั้งค่าฐานข้อมูลของคุณ
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Database/CameraDB.sqlite',  // ตำแหน่งของไฟล์ฐานข้อมูล
});

module.exports = sequelize;
