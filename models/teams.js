/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_team: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'teams'
  });
};
