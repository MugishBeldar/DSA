pub fn print_all_divisors(num: i32) -> Vec<i32> {
    let mut divisors: Vec<i32> = Vec::new();
    divisors.push(1);
    divisors.push(num);
    let loop_end = (num as f64).sqrt().floor();
    for i in 2..=loop_end as i32 {
        if num % i == 0 {
            divisors.push(i);
            if i != num / i {
                divisors.push(num / i);
            }
        }
    }
    return divisors;
}
