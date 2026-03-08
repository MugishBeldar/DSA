function bubbleSort(arr) {
	for (let i=0; i<arr.length; i++) {
		for (let j=0; j<arr.length-1; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([7,8,4,5,5555,0]));

// time complexity: O(n^2) => for all best, worst and average cases
// space complexity: O(1) => due to inplace sorting

// improved version for best case time complexity 
function bubbleSortImpr(arr) {

    for (let i=0; i<arr.length; i++) {
        let swap = false;
        for (let j=0; j<arr.length-1; j++) {
            if (arr[j]> arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

// time complexity for this 
// best case = O(1)
// worst case and average case = O(n)

// space complexity = O(1) due to inplace sorting