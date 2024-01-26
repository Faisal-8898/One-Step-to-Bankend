const sports = new Map([
  ["cricket", "bat"],
  ["bat", 5000],
  ["football", "ball"],
]);
// const obj = {
//   34: "helo",
// };
//
// console.log(obj);

// const person = new Map();
// sports.set("badminton", 3000);
// console.log(sports.get("badminton"));
// console.log(sports.size);
sports.set(349, "hello");
sports.set({ id: 1 }, "object value");
let bye = () => {
  console.log("bye");
};
sports.set(bye, "function er value ami");
console.log(sports.get(bye));

sports.forEach((value, key) => {
  console.log(key, value);
});
