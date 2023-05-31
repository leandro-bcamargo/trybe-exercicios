module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', { // Esse último Book será o nome da model.
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return Book;
};

/* title: deve ser do tipo DateType.STRING
author: deve ser do tipo DateType.STRING
pageQuantity: deve ser do tipo DateType.INTEGER
createdAt: deve ser do tipo DateType.DATE
updatedAt: deve ser do tipo DateType.DATE */