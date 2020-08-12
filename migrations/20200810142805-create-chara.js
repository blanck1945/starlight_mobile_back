'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('charas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      chara_name: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true
      },
      chara_school: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      chara_club: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      chara_student_id: {
        type: Sequelize.INTEGER,
        notEmpty: true
      },
      chara_voice: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true
      },
      chara_description: {
        type: Sequelize.JSON,
        notEmpty: true
      },
      chara_color: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      chara_profile_img: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      chara_revue_img: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      chara_student_img: {
        type: Sequelize.STRING,
        notEmpty: true
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
    await queryInterface.dropTable('Charas');
  }
};