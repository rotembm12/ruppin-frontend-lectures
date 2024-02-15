function myFunction(value, index, array) {
  console.log("hello");
  let num = value + 5;
  let returnValue = 0;

  if (value === 3 || value === 1) {
    returnValue = 5;
  }

  return returnValue * 2;
}

const numbers1 = [3, 14, 29, 4, 1];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
