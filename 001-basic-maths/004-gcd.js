// gcd == hcf
function gcd(num1, num2) {
	let num1Factors = [];
	let num2Factors = [];
	let commonFactors = [];
	
	for (let i=1; i<=num1; i++) {
		if (num1%i==0) {
			num1Factors.push(i);
		}
	}
	
	for (let i=1; i<=num2; i++) {
		if (num2%i==0) {
			num2Factors.push(i);
		}
	}
	
	for (let i=0; i<num1Factors.length; i++) {
		if (num2Factors.includes(num1Factors[i])) {
			commonFactors.push(num1Factors[i])
		}
	}
	
	return Math.max(...commonFactors);
}

console.log(gcd(20,15))
// ===============================================================================

function gcdv2(n1, n2) {
	let gcd = 1;
	for (let i=1; i<Math.min(n1, n2); i++) {
		if (n1%i==0 && n2%i==0) {
			gcd = i;
		}
	}
	return gcd;
}
console.log("Gcd v2 = ", gcdv2(20,15));
// tc = O(min(n))
// sc = O(1)


// ===============================================================================
// GCD (Euclidean Algorithm)
// -------------------------
function euclideanAlgo(num1, num2) {
	while(num1>0 && num2>0) {
		if (num1>num2) {
			num1 = num1-num2;
		} else {
			num2 = num2-num1;
		}
		if (num1==0) return num2;
		return num1;
	}
}
console.log("euclidean algorith = ", euclideanAlgo(15, 15));
// tc = O(min(num1, num2))
// sc = O(1)