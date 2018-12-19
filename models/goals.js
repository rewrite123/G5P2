/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goals', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: 'personal'
    },
    descript: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    completion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    owner: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    conspirator: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'goals',
    timestamps: false
  });
};
