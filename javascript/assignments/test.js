function fibo(n) {
  let a = 1,
    b = 2;
  for (let i = 2; i <= n; i++) {
    let c = a + b; // 4 0 1 1
    a = b;
    b = c;
  }
  return a;
}

const str = "hello"; // a = 2
console.log(str.charCodeAt(1));
for (let i = 0; i < str.length; i++) {
  const numberofchar = str.charCodeAt(i) - "a".charCodeAt(0); //97
  // console.log(fibo(numberofchar));
}
