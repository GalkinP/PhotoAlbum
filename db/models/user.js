const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Album, Like, Comment }) {
      this.hasMany(Album, { foreignKey: 'userID' });
      this.hasMany(Like, { foreignKey: 'userID' });
      this.hasMany(Comment, { foreignKey: 'userID' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },

      mail: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
