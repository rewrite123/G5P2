var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var userGoals = sequelize.define("user_goals", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    goal_name: {
      type: Sequelize.STRING(255)
    },
    user_team: {
      type: DataTypes.INTEGER,
      references: {
        model: "teams",
        key: "id"
      }
    }
  });
  return userGoals;
};

/* 
id int NOT NULL AUTO_INCREMENT,
goal_name VARCHAR(255),
user_team INT NULL,
FOREIGN KEY(user_team) REFERENCES teams(id),
PRIMARY KEY (id)
*/