const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('genre', {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false})
}