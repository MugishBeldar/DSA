pub fn reverse_digit(num: i32) -> i32 {
    let mut rev = 0;
    let mut num = num;
    while num > 0 {
        let digit = num % 10;
        rev = (rev * 10) + digit;
        num = num / 10;
    }
    return rev;
}
