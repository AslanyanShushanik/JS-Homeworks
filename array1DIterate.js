function array1DIterateOP2(array, elem) {
  let indx = -1;
  for (let i = 0; i < array.length; i += 2) {
    if (elem === array[i]) {
      indx = i;
    }
    for (let j = i + 1; j <= i + 1; j++) {
      if (elem === array[j]) {
        indx = j;
      }
    }
  }
  return indx;
}

const array = [0, 1, 2, 3, 4, 5];
console.log(array1DIterateOP2(array, 4));


// a bit of workaround :D

function array1DIterateOP1(array, elem) {
  let indx = -1;
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === elem) indx = j;
    }
  }
  return indx;
}

console.log(array1DIterateOP1(array, 3));
