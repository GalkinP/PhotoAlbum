const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Photo }) {
      this.belongsTo(User, { foreignKey: 'userID' });
      this.belongsTo(Photo, { foreignKey: 'photoID' });
    }
  }
  Comment.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
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
      photoID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Photos',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
