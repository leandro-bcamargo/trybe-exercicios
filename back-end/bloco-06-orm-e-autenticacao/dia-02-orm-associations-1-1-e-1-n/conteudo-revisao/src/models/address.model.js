const Address = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'Addresses',
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      as: 'employee'
    })
  }

  return Address;
}

module.exports = Address;