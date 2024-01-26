// const min = Math.min(3, 4, 5, 60, -1);
// console.log(min);
// const max = Math.max(3, 4, 5, 60, -1);
// console.log(max);
// const arr = [2, , "334", "100", 3, 4, 5, "a5", 60, -10];
// const str = "hell";
// arr.sort(function (a, b) {
//   console.log(a, b);
//   return a - b;
// });
// 4 3
// 5 4
// 60 5
// -10 60
// -10 5
// -10 4
// -10 3
// -10
// arr.sort((a, b) => a - b);
// const max = arr[arr.length - 1];
// console.log(arr);
// console.log(max);  // ...arr
//
// function minArray(arr) {
//   return Math.min.apply(null, arr);
// }
//
// arr.sort();
// function minArray(arr) {
//   return Math.min(...arr); // Math.min(3, 4, 5, 60, -10);
// }
// const minimuValue = minArray(arr);
// console.log(minimuValue);
// console.log(arr);

// console.log(Math.PI);
// console.log(Math.sqrt(9));

// convert double to int
// console.log(Math.round(4.49)); // 4.59 = 4.6
// console.log(Math.round(4.59)); // 4.59 = 4.6
// console.log(Math.ceil(4.01));
// console.log(Math.ceil(-4.01));
// console.log(Math.floor(4.01));
// console.log(Math.floor(-4.01));
// console.log(Math.trunc(10.3434353));
// console.log(Math.sign(0));
// console.log(Math.abs(-4));
// console.log(Math.pow(10, 2));
// console.log(Math.abs)

const arr = [34, 45, 56, 67];

// const newArr = arr.map((value, index) => value * 2);
const newArr = arr.filter((value, index) => value > 50);

console.log(newArr);
