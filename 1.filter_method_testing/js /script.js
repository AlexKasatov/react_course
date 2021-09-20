const numbers = [4, 11, -5, 17, -10, 8, 56, 0];

const onlyPositive = numbers.filter((number) => number > 0); // возвращает только позитивыне числа

console.log(onlyPositive);

const onlyPos = (parameters) => {
  return parameters.filter((number) => number > 0);
};

const test = [
  {
    key: 3,
    key1: 4,
    key2: 5,
    key3: 6,
  },
];

const numbersNew = [
  {
    id: 1,
    number: 10,
  },
  {
    id: 2,
    number: -6,
  },
  {
    id: 3,
    number: 22,
  },
];

const cities = [
  { name: "Moscow", population: 12506468 },
  { name: "Saint Petersburg", population: 5351935 },
  { name: "Novosibirsk", population: 1612833 },
  { name: "Kaliningrad", population: 482443 },
  { name: "Kaluga", population: 336726 },
];

const millionPlusCitiesNew = cities.filter(function (e) {
  return e.population > 1000000;
});
console.log(millionPlusCitiesNew);

const millionPlusCities = [];
for (var i = 0; i < cities.length; i++) {
  if (cities[i].population > 1000000) {
    millionPlusCities.push(cities[i]);
  }
}
console.log(millionPlusCities);

//старый способ без метода filter()

const positiveArray = [];

for (var i = 0; i < numbersNew.length; i++) {
  if (numbersNew[i].number > 0) {
    positiveArray.push(numbersNew[i]);
  }
}

console.log(positiveArray);

const positiveArrayFilter = numbersNew.filter(function (e) {
  return e.number > 0;
});

console.log(positiveArrayFilter);

const positiveArrayFilterArrow = numbersNew.filter((e) => e.number > 0);

console.log(positiveArrayFilterArrow);

//вариант классической функции + стрелочная как аргумент в классической
function toNumbPositive(params) {
  return params.filter((e) => e.number > 0);
}

//вариант стрелочной функции
toNumbArrow = (parameters) => {
  return parameters.filter((e) => e.number > 0);
};
