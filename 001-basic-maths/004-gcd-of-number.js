function gcdOfNumber(num1, num2) {
    let gcd = 1;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = Math.max(gcd, i);
        }
    }
    return gcd;
}

// time complexity 
// O(n) ==> n = Min(num1, num2) goop goes till smaller number 

// space complexity 
// O(1) ==> constand gcd variable used to store costant value not growable

console.log(gcdOfNumber(12, 9));
console.log(gcdOfNumber(20, 15))