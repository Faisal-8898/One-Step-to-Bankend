const letters = new Set(["y", "t", "p", "y"]);
// console.log(letters);
letters.add("ball");
letters.add("34");
// console.log(letters);
// letters.forEach((value, index, set) => {
//   console.log(value);
//   console.log(set);
// });
//
// for (let i = 0; i < letters.size; i++) {
//   console.log(letters[i]);
// }
// console.log(letters.size);

// console.log(letters.values());

let convertedSet = Array.from(letters);

convertedSet.sort();

console.log(convertedSet);
