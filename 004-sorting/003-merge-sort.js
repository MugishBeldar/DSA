function mergeSort(array) {
  // Base case: If the array has 0 or 1 element, it is already sorted
  if (array.length <= 1) return array;

  // Split the array into two halves
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  // Recursively sort the left and right halves, then merge them
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
 
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      sortedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  sortedArray.push(...left.slice(leftIndex));
  sortedArray.push(...right.slice(rightIndex));
  return sortedArray;
}

// Test the implementation
console.log(mergeSort([8, 4, 3, 7, 6, 1, 2, 5]));