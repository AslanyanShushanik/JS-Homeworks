function merge(arr0, arr1, arr2, arr3, arr4) {
  let indx = [0, 0, 0, 0, 0];
  let mergedArr = [];
  while (
    arr0[indx[0]] ||
    arr1[indx[1]] ||
    arr2[indx[2]] ||
    arr3[indx[3]] ||
    arr4[indx[4]]
  ) {
    let minVal = Math.min(
      arr0[indx[0]] || Infinity,
      arr1[indx[1]] || Infinity,
      arr2[indx[2]] || Infinity,
      arr3[indx[3]] || Infinity,
      arr4[indx[4]] || Infinity
    );
    mergedArr.push(minVal);

    let minArrIndx = [
      arr0[indx[0]],
      arr1[indx[1]],
      arr2[indx[2]],
      arr3[indx[3]],
      arr4[indx[4]],
    ].indexOf(minVal);
    indx[minArrIndx]++;
  }

  return mergedArr;
}

console.log(merge([1, 2, 3, 4, 5], [2, 4, 6, 7], [6], [67, 88], [1, 44, 55]));
