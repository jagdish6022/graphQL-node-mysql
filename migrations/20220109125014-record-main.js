'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('record_main', {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    object_id: Sequelize.TEXT,
    global_id: Sequelize.TEXT,
    username: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    password: Sequelize.TEXT,
    password_lu: Sequelize.TEXT,
    name: Sequelize.TEXT,
    assessment: Sequelize.TEXT,
    survey_location: Sequelize.TEXT,
    permittee: Sequelize.TEXT,
    plu: Sequelize.INTEGER,
    litter_assessment: {
        type: Sequelize.INTEGER,
        allowNull: false,   
    },
    location_name: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    surrounding_land_use: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    creek_conditions: {
        type: Sequelize.STRING(100),
        defaultValue: null,
    },
    site_survey: {
        type: Sequelize.STRING(1000),
        defaultValue: null,
    },
    child_volunteers_count: {
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
    creation_date: Sequelize.TEXT,
    creator: Sequelize.TEXT,
    edit_date: Sequelize.TEXT,
    editor: Sequelize.TEXT,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
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
