'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class record_main extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  record_main.init({
    recordId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    ObjectID: DataTypes.TEXT,
    GlobalID: DataTypes.TEXT,
    Username: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Password: DataTypes.TEXT,
    passwordLU: DataTypes.TEXT,
    Name: DataTypes.TEXT,
    assessment: DataTypes.TEXT,
    surveyLocation: DataTypes.TEXT,
    permittee: DataTypes.TEXT,
    plu: DataTypes.INTEGER,
    LitterAssessment: {
        type: DataTypes.INTEGER,
        allowNull: false,   
    },
    location_name: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    Surrounding_Land_Use: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    Creek_Conditions: {
        type: DataTypes.STRING(100),
        defaultValue: null,
    },
    Site_Survey: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    Child_Volunteers_count: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    total_number_bags_filled: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    weight_of_trash: {
        type: DataTypes.INTEGER,
        defaultValue: null,
    },
    homeless_camps_encountered: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    illegal_dumpsite: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    notes_about_site: DataTypes.TEXT,
    Creation_date: DataTypes.TEXT,
    Creator: DataTypes.TEXT,
    Edit_date: DataTypes.TEXT,
    Editor: DataTypes.TEXT,
    x_value: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    y_value: {
        type: DataTypes.DOUBLE,
        defaultValue: null,
    },
    city: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },
    county: {
        type: DataTypes.STRING(1000),
        defaultValue: null,
    },

  }, {
    sequelize,
    modelName: 'record_main',
    freezeTableName: true,
    timestamps: false,
  });
  return record_main;
};
