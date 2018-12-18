/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_goal', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    goal_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_team: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    category_name: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'categories',
        key: 'id'
      }
    }
  }, {
    tableName: 'user_goal',
    timestamps: false
  });
};
