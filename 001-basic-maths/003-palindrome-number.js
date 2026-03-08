// 9. Palindrome Number
function palindrome_number(num) {
	let rev = 0;
	let keeper = num;
	while (num>0) {
		let digit = num%10;
		rev = (rev*10) + digit;
		num = Math.trunc(num/10);
	}
	if (rev === keeper) return true;
	return false;
}

console.log(palindrome_number(121));
console.log(palindrome_number(123));