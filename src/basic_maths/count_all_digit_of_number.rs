pub fn count_all_digit_of_number(num: i32) -> i32 {
    let mut count = 0;
    let mut num = num;
    if num == 0 {
        return 1;
    }
    while num > 0 {
        num = num / 10;
        count += 1;
    }
    return count;
}
