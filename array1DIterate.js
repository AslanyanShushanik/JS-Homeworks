// this feels unnecessary

function array1DIterateOP1(array) {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
    }
  }
}

let array = [0, 1, 2, 3, 4, 5];

array1DIterateOP1(array);

// this feels terrible

function array1DIterateOP2(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      console.log(array[i]);
    }
    for (let j = 0; j < array.length; j++) {
      if (j % 2 !== 0 && j === i + 1) {
        console.log(array[j]);
      }
    }
  }
}

array1DIterateOP2(array);
