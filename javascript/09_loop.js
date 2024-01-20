// let i = 0;
// for (; ; i++) {
//   console.log(i);
// }
//
const person = {
  name: "Zinia",
  age: 21,
  height: 0,
  weight: 0,
};

// const person1 = [2, 1, 3, 4, 5];

// for (let key in person) {
//   console.log(person[key]);
// }
//

// for eachEach basic way to implementation
// person.forEach(myfunction);
//
// function myfunction(value, index, array) {
//   console.log(value);
//   console.log(array);
// }

// person.forEach(function myfunction(value, index, array) {
//   console.log(value);
//   console.log(array);
// });

// person.forEach(function (value, index, array) {
//   console.log(value);
//   console.log(array);
// });

// person.forEach((value, index, array) => {
//   console.log(value);
//   console.log(array);
// });
//
// for (let key in person) {
//   console.log(person[key]);
// }
// for (let element in person1) {
//   console.log(person1[element]);
// }

// console.log(person1.reduceRight);

// Array.prototype.play = "hello bhai playing";
// Array.prototype.book = "Himu";
// const arr = new Array(23, 34, 34, 45);
//
// console.log(arr.book);
//
// for (let index in arr) {
//   console.log(arr[index]);
// }
//
// for (let [index, value] of arr.entries()) {
//   console.log(index, value);
// }

// const str = "hello";
//
// for (let element in str) {
//   console.log(str[element]);
// }

// for (let key of person) {
//   console.log(key);
// }
// console.log(typeof arr.toString());

// const arr1 = [1, 3, 4, "hello"];
// arr1[0] = function hello() {
//   return console.log("hjkjkello");
// };
// console.log(arr1[0]());

// for(let i = 0 ;i < 3)
// const i = 0;
// const i = 1;
// const person1 = [2, 1, 3, 4, 5];
// console.log(person1.length);
// console.log(person1.at(2));
// console.log(typeof person1.join(" * "));
// person1.push(55);
// person1.unshift(55);
// person1.pop();
// person1.shift();
// console.log(person1);

// const arr = [2, 1, 3, 4, 5];
// const prr = [55, 66, 44];
//
// const arr2 = arr.concat(prr);
// console.log(arr2);
// const arr3 = [...arr, ...prr];
// console.log(arr3);

const fruits = ["banana", "orange", "mango", "annkalnf", "bolololo"];
// fruits.splice(1, 1, "lemon");
// const prr = fruits.toSpliced(2, 1);
// console.log(prr);
// console.log(fruits);
// console.log(fruits.slice(1, 2));
// first element works aslike index starting point 1.
// 2nd element represent aslike before 2 , that means 1;
// console.log(fruits);

// let indexofMango = fruits.lastIndexOf("annkalnf");
// console.log(indexofMango);
// console.log(fruits.includes("annkalnF"));
// fruits.sort();
// fruits.reverse();
// fruits.sort().reverse();
// fruits.reverse().sort();
const arr = [110, 20, 13, 4, 5, 6];
arr.sort(function (a, b) {
  return b - a;
});
console.log(arr);
const str = "hello";
