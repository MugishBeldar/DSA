function numberIsPrime(number) {
	let counter=0;
	for (let i=1; i<=Math.floor(Math.sqrt(number)); i++) {
		if (number%i==0) {
			counter++;
			if (i!=number/1) {
				counter++;
			}
		}
	}
	if (counter==2) return true;
	return false;
}

console.log(numberIsPrime(7));

// time complexity
// loop goes tin math sqrt hence O(logn)
// space complexity
// divisors array use which can grow till divisors.length < number hence O(n)