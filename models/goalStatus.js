var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var goalStatus = sequelize.define("goal_status", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    goal_status: {
      type: Sequelize.STRING(255)
    }
  });
  return goalStatus;
};

/*
id INT NOT NULL AUTO_INCREMENT,
goal_status VARCHAR(255),
PRIMARY KEY(id)
*/