'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('record_main', {
      recordId: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ObjectID: Sequelize.TEXT,
    GlobalID: Sequelize.TEXT,
    Username: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    Password: Sequelize.TEXT,
    passwordLU: Sequelize.TEXT,
    Name: Sequelize.TEXT,
    assessment: Sequelize.TEXT,
    surveyLocation: Sequelize.TEXT,
    permittee: Sequelize.TEXT,
    plu: Sequelize.INTEGER,
    LitterAssessment: {
        type: Sequelize.INTEGER,
        allowNull: false,   
    },
    location_name: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    Surrounding_Land_Use: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    Creek_Conditions: {
        type: Sequelize.STRING(100),
        defaultValue: null,
    },
    Site_Survey: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    Child_Volunteers_count: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    total_number_bags_filled: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    weight_of_trash: {
        type: Sequelize.INTEGER,
        defaultValue: null,
    },
    homeless_camps_encountered: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    illegal_dumpsite: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    notes_about_site: Sequelize.TEXT,
    Creation_date: Sequelize.TEXT,
    Creator: Sequelize.TEXT,
    Edit_date: Sequelize.TEXT,
    Editor: Sequelize.TEXT,
    x_value: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    y_value: {
        type: Sequelize.DOUBLE,
        defaultValue: null,
    },
    city: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    county: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('record_main');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
