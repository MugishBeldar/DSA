function countAllDigit(num) {
	let count = 0;
	if (num == 0) {
		return 1;
	}
	while (num>0) {
		num = Math.trunc(num/10);
		count++;
	}
	return count;
}

console.log(countAllDigit(10));
console.log(countAllDigit(0));

// time complexity
// O(number of digit)
// number of digit = n
// O(n)

// space complexity 
// O(1)
// no extra space is used 
