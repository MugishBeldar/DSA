pub fn number_is_prime(num: i32) -> bool {
	let mut counter = 0;
	let termination_at = (num as f64).sqrt().floor();
	for i in 1..=termination_at as i32 {
		if num%i==0 {
			counter+=1;
			if i!=num/i {
				counter+=1;
			}
		}
	}
	if counter == 2 {
		return true;
	} 
	return false;
}