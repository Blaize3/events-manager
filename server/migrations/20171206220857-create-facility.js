module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Facilities', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    facilityName: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
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
    descriptionFacility: {
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
  down: queryInterface => queryInterface.dropTable('Facilities')
};
