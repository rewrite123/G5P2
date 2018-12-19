/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('links', {
    goal_owner: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    goal_conspirator: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    goal_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'links',
    timestamps: false
  });
};
