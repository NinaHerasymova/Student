"use strict"

const quickSort = (arr) => {
   
    if (arr.length > 0) {  
    var left = [], right = [], pivot = arr[0];  
    for (var i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== 'number' || isNaN(arr[i]) == true) {
        return 'Not all elements are comparable';
    }
        if(arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }return arr
}
