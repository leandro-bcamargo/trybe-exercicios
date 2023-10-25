module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'release_year',
    },
    totalPages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_pages',
    }
  }, {
    timestamps: false,
    underscored: false,
    tableName: 'Books',
  })

  return Book;
}