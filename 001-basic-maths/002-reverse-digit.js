
// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1

function reverseNumberv1(num) {
	let reverse = 0 ;
    let isNegative = num < 0;
    if (isNegative) {
        num = -num;
    }
	while (num > 0) {
	let digit = num%10;
	reverse = digit + ( reverse * 10 );
	num = Math.trunc(num/10);
	}
    if (reverse > Math.pow(2,31)-1 || reverse < -Math.pow(2,31)) {
        return 0;
    }
    return isNegative ? -reverse : reverse;
}
console.log(reverseNumberv1(123));

// tc = O(log(n))
// sc = O(1)