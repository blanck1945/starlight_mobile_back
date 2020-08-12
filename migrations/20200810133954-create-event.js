'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_name: {
        type: Sequelize.STRING,
        notEmpty: true,
        notNull: true
      },
      event_header: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      event_date: {
        type: Sequelize.STRING,
        notEmpty: true,
        notNull: true
      },
      event_location: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      event_type: {
        type: Sequelize.ENUM,
        values: ["Live/Event", "Media", "Info", "Campaing"]
      },
      event_details: {
        type: Sequelize.JSON,
        defaultValue: []
      },
      event_color: {
        type: Sequelize.STRING,
        defaultValue: "rgb(153, 153, 153)"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};