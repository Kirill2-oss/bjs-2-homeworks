"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
      return [];
  } else if (discriminant === 0) {
      let root = -b / (2 * a);
      return [root];
  } else {
      let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
  }
}

let a = 1;
let b = -3;
let c = 2;
let roots = solveEquation(a, b, c);
console.log("Roots:", roots);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = percent / 100 / 12;
    let loanBody = amount - contribution;
    let monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
     let totalAmount = monthlyPayment * countMonths;
    totalAmount = Math.round(totalAmount * 100) / 100;
     return totalAmount;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749 – 529
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0 contribution, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52