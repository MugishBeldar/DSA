function armstrong(num) {
	let sum = 0;
	let backup = num;
	while (num>0) {
		let lastDgt = num % 10;
		sum = sum + (lastDgt * lastDgt * lastDgt);
		num = Math.trunc(num / 10);
	}
	
	if (sum == backup) {
		return true;
	}
	return false;
}
console.log("Is Argmstrong Num = ", armstrong(153));
// tc = O(log(n))
// sc = O(1)