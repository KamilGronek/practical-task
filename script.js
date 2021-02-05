//2.
var numbers = [1, 2, 32, 56, 55, 34, 32, 11, 19, 17, 58, 66, 13];

const getResult = (numbers) => {
  return numbers
    .map((number) => number)
    .filter((number) => number % 2 == 0)
    .filter((number) => number < 50)
    .map((number) => number * 2);
};

var results = getResult(numbers);
console.log(results);

//3.
function twoParameters(firtParameter, secondParemeter) {
  let countFirtParameter = firtParameter.length;
  let countsecondParemeter = secondParemeter.length;

  let concat = firtParameter.concat(" ", secondParemeter);

  if (countFirtParameter > 11 && countsecondParemeter > 11) {
    return null;
  } else {
    return concat;
  }
}

twoParameters("kamil", "gronek");

//4.
// const i = 0;
// switch (i) {
//   case 0: {
//     i = 20;
//   }
// }
// console.log(`i: ${i}`);

// Odp: W odpowiedżi dostaniemy błąd, ponieważ nie możemy zmienić wartości constant - (const = 0;)

//5.
const dd = new Date();

dd.setDate(dd.getDate() + 1);
dd.setMonth(dd.getMonth() + 2);

let year = dd.toISOString().slice(0, 4);
let month = dd.toISOString().slice(5, 7);
let day = dd.toISOString().slice(8, 10);

let newDate = [year, month, day].join("/");
console.log(newDate);
