'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Chara.init({
    chara_name: DataTypes.STRING,
    chara_school: DataTypes.STRING,
    chara_student_id: DataTypes.INTEGER,
    chara_club: DataTypes.STRING,
    chara_voice: DataTypes.STRING,
    chara_description: DataTypes.JSON,
    chara_color: DataTypes.STRING,
    chara_profile_img: DataTypes.STRING,
    chara_revue_img: DataTypes.STRING,
    chara_student_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chara',
    tableName: "charas"
  });
  return Chara;
};