/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goal_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    goal_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'goal_status',
    timestamps: false
  });
};
