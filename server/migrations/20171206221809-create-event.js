module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'Center',
        key: 'id',
        as: 'centerId'
      }
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    organizer: {
      allowNull: false,
      type: Sequelize.STRING
    },
    eventStartDate: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    eventStartTime: {
      allowNull: false,
      type: Sequelize.STRING
    },
    eventEndDate: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    privacy: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: true,
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Events')
};
