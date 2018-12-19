/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goals', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    last_completed: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    completed_instances: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
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
    },
    partner: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goals',
        key: 'id'
      }
    }
  }, {
    tableName: 'goals',
    timestamps: false
  });
};
