module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email field cannot be empty.'
        },
        isEmail: {
          args: true,
          msg: 'Invalid email. Try you@domain.com.'
        }
      }
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z0-9]+$/,
          msg: 'Username field can only accept characters and numbers.'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password field cannot be empty.'
        }
      }
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Lastname field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z]+$/,
          msg: 'Lastname field can only accept characters.'
        }
      }
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Firstname field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z]+$/,
          msg: 'Firstname field can only accept characters.'
        }
      }
    },
    sex: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Sex field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z]+$/,
          msg: 'Sex field can only accept characters.'
        }
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'User role field cannot be empty.'
        },
        is: {
          args: /^[a-zA-Z _]+$/,
          msg: 'User role field can only accept characters and white space.'
        }
      }
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'userId'
    });
  };
  return User;
};
