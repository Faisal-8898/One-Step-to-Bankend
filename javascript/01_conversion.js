const str = "34a";

const convertedIntoNumber = checkIsItNumberOrNot(str);

if (convertedIntoNumber.convertedNumber === null) {
} else {
}

function checkIsItNumberOrNot(value) {
  if (value === null || value === undefined) {
    return { statusMsg: "not a valid Number", convertedNumber: null };
  }
  const convertedIntoNumber = Number(str);
  if (isNaN(convertedIntoNumber)) {
    return { statusMsg: "not a valid Number", convertedNumber: null };
  }
  return { statusMsg: "valid Number", convertedNumber: convertedIntoNumber };
}
