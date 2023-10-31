'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MhsBimbingan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MhsBimbingan.init({
    id_mahasiswa: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Mahasiswas',
        key: 'id',
      },
    },
    id_dosen: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Dosens',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'MhsBimbingan',
  });
  return MhsBimbingan;
};