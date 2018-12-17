var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var teams = sequelize.define("teams", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    user_team: {
      type: Sequelize.STRING(255)
    }
  });
  return teams;
};

/* 
id int NOT NULL AUTO_INCREMENT,
user_team VARCHAR(255),
PRIMARY KEY (id)
*/