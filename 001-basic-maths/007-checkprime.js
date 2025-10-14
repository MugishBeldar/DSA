function isPrime(num) {
	for (let i=2; i<=Math.sqrt(num); i++) {
		if (num%i==0 && i!=num/i) {
			return false;
		}
	}
	return true;
}
// tc = O(lon(n))
// sc = O(n)
console.log("is prime = ", isPrime(13));