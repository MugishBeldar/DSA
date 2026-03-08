function armstrongNumber(number) {
	let ans = 0;
	let keeper = number;
	while (number>0) {
		let digit = number %10;
		number = Math.trunc(number/10);
		ans = ans + (digit * digit * digit);
	}
	if (ans == keeper) {
		return true;
	}
	return false;
	
}

// time complexity
// divison operation perform so time complexity in the log form 
// loops run per digit
// division by 10 each digit
// O(long(n)) 

// space complexity
// constant variables used they not growable 
// O(1)

console.log(armstrongNumber(153));
console.log(armstrongNumber(123));