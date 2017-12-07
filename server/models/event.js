

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'User Id field must be number.'
        },
        isInt: {
          args: true,
          msg: 'User Id field must be integer.'
        }
      }
    },
    centerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Center Id field must be number.'
        },
        isInt: {
          args: true,
          msg: 'Center Id field must be integer.'
        }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event title field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Event title field can only accept characters and white space.'
        }
      }
    },
    organizer: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event organizer field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'Event organizer field can only accept characters and white space.'
        }
      }
    },
    eventStartDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event start date field cannot be empty.'
        },
        isDate: {
          args: true,
          msg: 'Invalid date format. Try this format yyyy-mm-dd'
        }
      }
    },
    eventStartTime: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event start time field cannot be empty.'
        },
        is: {
          args: /(\d{2}(:\d{2}){2}\s(pm|am))/,
          msg: 'Invalid time format. Try this format (hh:mm:ss am/pm)'
        }
      }
    },
    eventEndDate: {
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event end date field cannot be empty.'
        },
        isDate: {
          args: true,
          msg: 'Invalid date format. Try this format yyyy-mm-dd'
        }
      }
    },
    privacy: {
      allowNull: false,
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

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'userId'
    });

    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      as: 'centerId'
    });
  };
  return Event;
};
