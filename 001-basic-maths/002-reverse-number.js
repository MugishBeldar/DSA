// 7. Reverse Integer
function reverse_a_number(num) {
	let rev = 0; 
	while(num>0) {
		let digit = num%10;
		rev = (rev*10) + digit;
		num = Math.trunc(num/10);
	}
	return rev;
}

console.log(reverse_a_number(12345));

// time complexity
// O(number of digit)
// number of digit = n
// O(n)

// space complexity 
// O(1)
// no extra space is used 



// leet code solution 

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num) {
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
};