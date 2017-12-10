module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    centerName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center name field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Center name field can only accept characters and white space.'
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
        },
        is: {
          args: /^[a-zA-Z0-9 _]*[a-zA-Z0-9][a-zA-Z0-9 _]*$/,
          msg: 'Center address field can only accept characters, numbers and white space.'
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
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Center location field can only accept characters and white space.'
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
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Center category field can only accept characters and white space.'
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
        isNumeric: {
          args: true,
          msg: 'Center usage fee field must be number.'
        },
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
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: '"createdBy" field can only accept characters and white space.'
        }
      }
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT,
      validate: {
        is: {
          args: /^[a-zA-Z0-9,.!?]+$/,
          msg: 'Description field can only accept characters, comma, period and white space.'
        }
      }
    }
  });

  Center.associate = (models) => {
    Center.hasMany(models.Event, {
      foreignKey: 'centerId'
      // as: 'centerId'
    });

    Center.hasOne(models.Facility, {
      foreignKey: 'centerId'
      // as: 'centerId'
    });
  };
  return Center;
};
