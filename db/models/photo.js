const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate({ Album, Like, Comment }) {
      this.belongsTo(Album, { foreignKey: 'albumID' });
      this.hasMany(Like, { foreignKey: 'photoID' });
      this.hasMany(Comment, { foreignKey: 'photoID' });
    }
  }
  Photo.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    
      albumID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Albums',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
