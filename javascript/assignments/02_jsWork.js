const person = {
  name: {
    firstName: "Sakib",
    lastName: "Al Hasan",
  },
  birth: {
    age: 38,
    birthPlace: {
      zill: "Magura",
      division: "Khulna",
      country: "Bangladesh",
      road: "airport Road",
    },
    birthYear: "1946",
  },
  education: {
    depertment: "BBA",
    University: {
      name: "AIUB",
      location: {
        road: "410/1",
        place: "Kuril",
      },
    },
  },
  profession: ["Politician", "cricketer"],
  isAllrounder: true,
};
// console.log(person.name.firstName);
// console.log(person.profession[2]);
// console.log(person["name"]);
// console.log(person["name"].firstName);
// console.log(person.birth.birthPlace.country);
// console.log(person.birth.birthPlace.road);

// let arr = [];
// arr.push(person);
// arr.push(person);
// console.log(arr);

// let arr = Object.entries(person);
// console.log(arr[1][0]);

// const year = person.birth.birthYear;
// const birthYearr = Number(year);
// console.log(birthYearr);

function checkNum(value) {
  if (value === null || value === undefined || value === "") {
    return { isValid: false, number: null };
  }
  const year = Number(value);
  if (isNaN(year)) {
    return { isvalid: false, number: null };
  }
  return { isValid: true, number: year };
}
const yearInNumber = checkNum(person.birth.birthYear);
console.log(yearInNumber);

if (yearInNumber.number === null) {
  return;
} else {
  // otheroperation
}
