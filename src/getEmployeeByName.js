const data = require('../data/zoo_data');

function getEmployeeByName(name) {
  const dataE = data.employees;

  return !name ? {} : dataE.find((emp) => emp.firstName === name || emp.lastName === name);
}

module.exports = getEmployeeByName;
