const numbers = [4, 11, -5, 17, -10, 8, 56, 0]

const numbersNew = [{
    id: 1, number: 10
  }, {
    id: 2, number: -6
  }, {
    id: 3, number: 22
  }]



onlyPos = (e) => e.filter((number) => number > 0)

console.log(onlyPos(numbers));


//Функция аргумент, которой выступает массив, она проверяет все объекты number на позитивные числа и возвращает массив только с позитивными числами
onlyPosArray = (par) => par.filter((e) => e.number > 0 )

console.log(onlyPosArray(numbersNew));


