module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    facilityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Facility Id field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Facility Id field must be integer.'
        }
      }
    },
    centerName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center name field cannot be empty.'
        }
      }
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center address field cannot be empty.'
        }
      }
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center location field cannot be empty.'
        }
      }
    },
    centerCategory: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center category field cannot be empty.'
        }
      }
    },
    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Capacity field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Capacity field must be integer.'
        }
      }
    },
    usageFee: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        isDecimal: {
          args: true,
          msg: 'Center usage fee field must be decimal number.'
        }
      }
    },
    createdBy: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: '"createdBy" field cannot be empty.'
        }
      }
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  });

  Center.associate = (models) => {
    Center.hasMany(models.Event, {
      foreignKey: 'centerId'
      // as: 'centerId'
    });

    Center.belongsTo(models.Facility, {
      foreignKey: 'facilityId'
      // as: 'centerId'
    });
  };
  return Center;
};
