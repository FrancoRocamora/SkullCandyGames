const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    background_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
      defaultValue: 0
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: true
    },
    playtime: {
      type: DataTypes.STRING,
      allowNull: true
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true
    },
    stores: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});
};
