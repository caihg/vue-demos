/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    description: {
      type: DataTypes.CHAR(200),
      allowNull: true
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'goods'
  });
};
