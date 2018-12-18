/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categories', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'categories',
    timestamps: false
  });
};
