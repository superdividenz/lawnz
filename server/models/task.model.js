const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Task = db.define('Task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Task;