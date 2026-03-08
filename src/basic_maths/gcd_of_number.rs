
use std::cmp;
pub fn gcd_of_numbers(num1: i32, num2: i32) -> i32 {
	let min = cmp::min(num1, num2);
	let mut gcd = 1;
	for i in 2..=min {
		if num1%i==0 && num2%i==0 {
			gcd = cmp::max(gcd, i);
		}
	}
	return gcd;
}

// time complexity ==> same as js 
// space complexity ==> same as js