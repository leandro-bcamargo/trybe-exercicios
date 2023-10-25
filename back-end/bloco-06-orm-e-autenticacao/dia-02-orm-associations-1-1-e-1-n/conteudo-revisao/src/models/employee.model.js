const Employee = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    }
  },
    {
      timestamps: false,
      tableName: 'Employees',
      underscored: true,
    }
  );

  Employee.associate = (models) => {
    Employee.hasMany(models.Address, {
      foreignKey: 'employeeId',
      as: 'addresses'
    })
  }

  return Employee;
}

module.exports = Employee;