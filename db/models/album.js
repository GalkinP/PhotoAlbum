const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate({ User, Photo }) {
      this.belongsTo(User, { foreignKey: 'userID' });
      this.hasMany(Photo, { foreignKey: 'albumID' });
    }
  }
  Album.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      count: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      isOpen: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      userID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Album',
    }
  );
  return Album;
};
