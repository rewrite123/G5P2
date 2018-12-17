
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category_name: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id"
      }
    },
    start_date: {
      type: DataTypes.DATE
    },
    goal_status: {
      type: DataTypes.INTEGER,
      references: {
        model: "goal_status",
        key: "id"
      }
    },
    end_date: {
      type: DataTypes.DATE
    },
    user_goal: {
      type: DataTypes.INTEGER,
      references: {
        model: "user_goal",
        key: "id"
      }
    }
  });
  return users;
};

/* 
id int NOT NULL AUTO_INCREMENT,
user_name VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
category_name INT NULL,
start_date date,
goal_status INT,
end_date date,
user_goal INT NULL,
FOREIGN KEY(category_name) REFERENCES categories(id),
FOREIGN KEY(user_goal) REFERENCES user_goal(id),
FOREIGN KEY(goal_status) REFERENCES goal_status(id),
PRIMARY KEY (id)
*/