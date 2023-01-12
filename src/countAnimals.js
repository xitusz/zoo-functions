const data = require('../data/zoo_data');

function countAnimals(animal) {
  const dataE = data.species;

  if (!animal) {
    return dataE.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  if (!animal.sex) return dataE.find((specie) => specie.name === animal.specie).residents.length;

  return dataE.find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
