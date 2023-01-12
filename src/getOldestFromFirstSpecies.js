const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animals = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const resident = data.species.find((specie) => specie.id === animals).residents;
  let oldAnimal = resident[0];

  resident.forEach((animal) => {
    if (animal.age > oldAnimal.age) oldAnimal = animal;
  });

  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
