const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) acc.child += 1;
    else if (curr.age >= 18 && curr.age < 50) acc.adult += 1;
    else acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) return 0;

  const dataP = data.prices;
  const count = countEntrants(entrants);

  return (dataP.child * count.child) + (dataP.adult * count.adult) + (dataP.senior * count.senior);
}

module.exports = { calculateEntry, countEntrants };
