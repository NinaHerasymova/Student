"use strict"
let arr=[1, 3,9,56, 560,506,45, 13, 28, 22];

const defaultSortingAlgorithm =(a, b)=> {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

const quickSort =(
    unsortedArray,
    sortingAlgorithm = defaultSortingAlgorithm)=> {

    var sortedArray = [ ...unsortedArray ];
    let recursiveSort= (start, end)=> {

      if (end - start < 2) {
        return;
      }

      let pivotValue = sortedArray[end];
      let splitIndex = start;
      for (let i = start; i < end; i++) {
        let sort = sortingAlgorithm(sortedArray[i], pivotValue);

        if (sort === -1) {

          if (splitIndex !== i) {
            let temp = sortedArray[splitIndex];
            sortedArray[splitIndex] = sortedArray[i];
            sortedArray[i] = temp;
          }

          splitIndex++;
        }

      }

      sortedArray[end] = sortedArray[splitIndex];
      sortedArray[splitIndex] = pivotValue;

      recursiveSort(start, splitIndex - 1);
      recursiveSort(splitIndex + 1, end);
    };

    recursiveSort(0, unsortedArray.length - 1);
    console.log(sortedArray);
  };

quickSort(arr);