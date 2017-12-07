module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Facilities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
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
    hasProjectors: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    numOfProjectors: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    hasChairs: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    numOfChairs: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    hasTables: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    numOfTables: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    hasToilets: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    numOfToilets: {
      allowNull: false,
      type: Sequelize.INTEGER
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
  down: queryInterface => queryInterface.dropTable('Facilities')
};
