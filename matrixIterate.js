// works for NxN matrices thou :(

function matrixIterate(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const matrixNumOfElems = column * row;

  let rowIndx = 0;

  for (let i = 0; i < matrixNumOfElems; i++) {
    let columnIndx = i % column;

    console.log(matrix[rowIndx][columnIndx]);

    if (columnIndx === column - 1) {
      rowIndx++;
    }
  }
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

matrixIterate(matrix);
