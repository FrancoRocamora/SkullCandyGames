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
      type: DataTypes.REAL,
      defaultValue: 0
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    playtime: {
      type: DataTypes.REAL,
      allowNull: true
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {timestamps: false});
};
