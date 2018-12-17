var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    category_name: {
      type: Sequelize.STRING(255)
    }
  });
  return categories;
};

/* 
id int NOT NULL AUTO_INCREMENT,
category_name VARCHAR(255),
PRIMARY KEY (id)
*/