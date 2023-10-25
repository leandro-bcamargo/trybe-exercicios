module.exports = (sequelize, dataTypes) => {
  const userBook = sequelize.define('UserBook', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'Users_Books',
  })

  userBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: userBook,
      foreignKey: 'bookId',
      otherKey: 'userId',
    });

    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: userBook,
      foreignKey: 'bookId',
      otherKey: 'userId',
    })

    return userBook;
  }

  return userBook;
}