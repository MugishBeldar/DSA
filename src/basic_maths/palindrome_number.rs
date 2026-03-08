pub fn palindrome_number(num: i32) -> bool {
    let mut rev = 0;
    let keeper = num;
    let mut num = num;

    while num > 0 {
        let digit = num %10;
        rev = (rev * 10) + digit;
        num = num / 10;
    }

    if rev == keeper {
        return true;
    }
    return false;
}