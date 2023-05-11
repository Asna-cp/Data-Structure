// Merges two already sorted arrays

//Defines a function merge that takes two arrays as arguments.

const merge = (left, right) => {
    let results = [];
    //Initializes an empty array results and two pointers i and j to 0.
    let i = 0;
    let j = 0;

    //Compares the elements at indices i and j of the two arrays and pushes the
    // smaller one onto the results array. The pointers i and j are incremented 
    //after each comparison to move to the next element.
    while (i < left.length && j < right.length) {
      if (left[i] > right[j]) results.push(right[j++]);
      else results.push(left[i++]);
    }
    //After one array has been exhausted, the remaining elements of the other array are simply appended to the end of the results array
    while (i < left.length) results.push(left[i++]);
    while (j < right.length) results.push(right[j++]);
    //Returns the merged array.
    return results;
  };
  
  // Merge Sort
  
  const mergeSort = (arr) => {
    //If the array has one or fewer elements, it is already sorted, so return it.
    if (arr.length <= 1) return arr;

    //Otherwise, split the array in two and recursively call mergeSort on each half to obtain sorted subarrays left and right
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };
  
  console.log(mergeSort([10, 24, 76, 73, 72, 1]));