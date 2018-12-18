/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    goal_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goal_status',
        key: 'id'
      }
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    user_goal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_goal',
        key: 'id'
      }
    }
  }, {
    tableName: 'users',
    timestamps: false
  });
};
