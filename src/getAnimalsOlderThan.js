const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.filter((specie) => specie.name === animal);

  return animals[0].residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
