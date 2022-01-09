const db = require('../models');
const { QueryTypes, Op } = require('sequelize');

  const Query = {
    getRecordMainRecord : async () => {
      try {
        const records = await db.record_main.findAll();
        console.log(records);
        return records;
      } catch (err) {
        console.log(err);
      }
    },

    getRecordMainRecordById: async (root, { recordId }) => {
      try {
        const dept = await db.record_main.findOne({
          where: {
            recordId,
          }
        });
        return dept;
      } catch (err) {
        console.log(err);
      }
    },

    getRecordMainByCityOrCountry: async (root, { city, county }) => {
      try {
        const records = await db.record_main.findAll();
        return records;
      } catch (err) {
        console.log(err);
      }
    },

  };

  module.exports = { Query };