// Criando Model de UserBook.
// Note que não temos nenhum atributo nesse model. Numa tabela de associação, o Sequelize já entende que esse model precisa ter os IDs que formam a chave composta das duas tabelas sendo associadas.


// src/models/UserBook.js

module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook',
    {},
    {
      timestamps: false,
			// underscored: para acessar a tabela referente a este model, UserBook (em PascalCase) vai ser transformado em snake_case e terá seu final pluralizado, transformando em “user_books” seu valor de acesso;
      underscored: true, 
			// tableName: decidimos definir o nome da tabela que esse model se refere, para mantermos o padrão de nomes do model no singular.
      tableName: 'users_books'
    },
  );

  UserBook.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'userId', // se refere à outra chave de `users_books` 
    });
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'userId',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'bookId',
    });
  };

    return UserBook;
};