const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Photo, User }) {
      this.belongsTo(Photo, { foreignKey: 'photoID' });
      this.belongsTo(User, { foreignKey: 'userID' });
    }
  }
  Like.init(
    {
      plus: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      photoID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Photos',
          key: 'id',
        },
        onDelete: 'cascade',
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
      modelName: 'Like',
    }
  );
  return Like;
};
