module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Centers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    facilityId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'Facility',
        key: 'id',
        as: 'facilityId'
      }
    },
    centerName: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING
    },
    location: {
      allowNull: false,
      type: Sequelize.STRING
    },
    centerCategory: {
      allowNull: false,
      type: Sequelize.STRING
    },
    capacity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    usageFee: {
      allowNull: false,
      type: Sequelize.DECIMAL
    },
    createdBy: {
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
  down: queryInterface => queryInterface.dropTable('Centers')
};
