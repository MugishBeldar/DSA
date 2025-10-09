// Broute force approach is simple run loop from 1 to num and check reminder 0 if yes then it is divisors on num push it in to array loops goes until i goes to num (i==num)

// Optimal approach
function printAllDivisiors(num) {
	let divisors = [];
    let sqrt = Math.sqrt(num);
	for (let i=1; i<=sqrt; i++) {
		if (num%i==0 && i != num/i) {
			divisors.push(num/i);
			divisors.push(i);
		} 
		if (num%i==0 && i == num/i) {
			divisors.push(num/i)
		}
	}
	return divisors;
}
console.log("Print all divisior = ", printAllDivisiors(36));
// tc = O(sqrt(num))
// sc = O(2*sqrt(num))
// Intutions
// 1 * 36 = 36<--- when we divide 36 by one then get reminder 0 then i is divisor and dividand 36 is also divisor then push both in array 
// 2 * 18 = 36<--- ""
// 3 * 12 = 36<--- ""
// 4 * 9 = 36 <--- ""
// 6 * 6 = 36 <--- 6 is squar of 36 then we need take only one 6 