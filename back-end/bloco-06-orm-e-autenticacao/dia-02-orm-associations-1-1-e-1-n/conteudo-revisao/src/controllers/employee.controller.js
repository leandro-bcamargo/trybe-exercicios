const employeeService = require('../services/employee.service');
const addressesService = require('../services/address.service');

const getAll = async (req, res) => {
  try {
    const employees = await employeeService.getAll();

    return res.status(200).json(employees);
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const { includeAddresses } = req.query;
    const employee = await employeeService.getById(Number(id));
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    if (includeAddresses === 'true') {
      const addresses = await addressesService.getAllByEmployeeId(Number(id));
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}

module.exports = {
  getAll,
  getById,
}