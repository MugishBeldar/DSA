// Example 1:
//Input:N = 12345

//Output:5

//Explanation:  The number 12345 has 5 digits.
                     
//Example 2:
//Input:N = 7789                

//Output: 4

//Explanation: The number 7789 has 4 digits.     

function countDigitv1(num) {
	let numAsStr = num+'';
	let totaldigit = numAsStr.length;
	return totaldigit;
}

console.log(countDigitv1(0))

// =========================================================================

function countDigitv2(num) {
	let count = 0;
	while (num > 0) {
		count++;
		num = Math.trunc(num/10);
	}
	return count;
}
console.log("countdigitv2:", countDigitv2(13))

// tc = O(log(n))
// sc = O(1)

// =========================================================================


function countDigitv3(num) {
	return Math.floor(Math.log10(num)) + 1;
}
console.log("countDigitv3:",countDigitv3(0))

// tc = O(log(n))
// sc = O(1)