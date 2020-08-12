'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {


    static associate(models) {
      // define association here
    }
  };
  Event.init({
    event_name: DataTypes.STRING,
    event_header: DataTypes.STRING,
    event_date: DataTypes.STRING,
    event_location: DataTypes.STRING,
    event_type: DataTypes.STRING,
    event_details: DataTypes.JSON,
    event_color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'

  });
  return Event;
};