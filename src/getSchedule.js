const data = require('../data/zoo_data');

// Referência: Carlos Dartora

const dataE = data.species;

const hourDay = (day) => {
  const dataH = data.hours[day];

  return (day === 'Monday') ? 'CLOSED' : `Open from ${dataH.open}am until ${dataH.close}pm`;
};

const exhibitionDay = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';

  return data.species.filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
};

const daySchedule = (day) => ({ officeHour: hourDay(day), exhibition: exhibitionDay(day),
});

const standartSchedule = () => {
  const schedule = {};
  const days = Object.keys(data.hours);

  days.forEach((day) => {
    schedule[day] = daySchedule(day);
  });

  return schedule;
};

const animalSchedule = (animalName) => dataE.find((animal) => animal.name === animalName)
  .availability;

const getSchedule = (scheduleTarget) => {
  const days = Object.keys(data.hours);
  const animals = dataE.map((animal) => animal.name);

  if (days.includes(scheduleTarget)) return { [scheduleTarget]: daySchedule(scheduleTarget) };
  if (animals.includes(scheduleTarget)) return animalSchedule(scheduleTarget);

  return standartSchedule();
};

module.exports = getSchedule;
