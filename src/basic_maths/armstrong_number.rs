pub fn armstrong_number(number: i32) -> bool {
	let mut ans = 0;
	let mut number = number;
	let keeper = number;
	
	while number > 0 {
		let digit = number%10;
		number = number / 10;
		ans = ans + (digit * digit * digit);
	}
	
	if ans == keeper {
		return true;
	}
	return false;
}