// Sorting Algorithms

// Merge Sort

const mergeSort = (array, callback) => {
  if (array.length < 2) {
    return array;
  }
  let midIdx = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0, midIdx), callback);
  let right = mergeSort(array.slice(midIdx), callback);
  return mergeArray(left, right, callback);
};

const mergeArray = (arr1, arr2, callback) => {
  if (callback === undefined) {
    callback = (a, b) => {
      if (a > b) {
        return 1;
      } else if (a === b) {
        return 0;
      } else {
        return -1;
      }
    };
  }

  let result = [];
  while (arr1.length > 0 && arr2.length > 0 ) {
    if (callback(arr1[0], arr2[0]) === -1) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1).concat(arr2);
};

// Test Cases for Merge Sort
console.log(mergeSort([5,4,3,2,1], (a,b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}));
console.log(mergeSort([8,7,6,5,4,3,2,1]));
console.log(mergeSort([5,7,2,7,1,6,24,6,3]));

// Bubble Sort
