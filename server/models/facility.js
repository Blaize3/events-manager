

module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
    facilityName: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Facility name field cannot be empty.'
        }
      }
    },
    hasProjectors: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: '"has projectors" field cannot be empty.'
        },
        is: {
          args: /^(true|false)$/,
          msg: '"has projectors" field can only accept boolean (true or false).'
        }
      }
    },
    numOfProjectors: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Number of projectors field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Number of projectors field must be integer.'
        }
      }
    },
    hasChairs: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: '"has chairs" field cannot be empty.'
        },
        is: {
          args: /^(true|false)$/,
          msg: '"has chairs" field can only accept boolean (true or false).'
        }
      }
    },
    numOfChairs: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Number of chairs field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Number of chairs field must be integer.'
        }
      }
    },
    hasTables: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: '"has tables" field cannot be empty.'
        },
        is: {
          args: /^(true|false)$/,
          msg: '"has tables" field can only accept boolean (true or false).'
        }
      }
    },
    numOfTables: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Number of tables field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Number of tables field must be integer.'
        }
      }
    },
    hasToilets: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: '"has toilets" field cannot be empty.'
        },
        is: {
          args: /^(true|false)$/,
          msg: '"has toilets" field can only accept boolean (true or false).'
        }
      }
    },
    numOfToilets: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Number of toilets field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Number of toilets field must be integer.'
        }
      }
    },
    descriptionFacility: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  });

  Facility.associate = (models) => {
    Facility.hasMany(models.Center, {
      foreignKey: 'facilityId'
      // as: 'centerId'
    });
  };
  return Facility;
};
