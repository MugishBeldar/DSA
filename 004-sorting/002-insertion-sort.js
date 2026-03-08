function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i;

        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([55,3,0,5,8,1,9]))

// time complexity
// | Case                        | Complexity |
// | --------------------------- | ---------- |
// | Best Case (already sorted)  | **O(n)**   |
// | Average Case                | **O(n²)**  |
// | Worst Case (reverse sorted) | **O(n²)**  |

// space complexity 
// O(1) due to inplace sorting


