// console.log(sum(1, 2)); // 3
// const defaultValue = 120;
//
// function sum(a, b = defaultValue) {
//   const c = 10;
//   return a + b + c;
// }
// console.log(sum(1));
//
function sum() {
  //args = argument
  // console.log(hola);
  let sum = 0;
  for (let number of arguments) {
    sum += number;
  }
  return sum;
}

console.log(sum(23, 34, 34, 56, 76));
