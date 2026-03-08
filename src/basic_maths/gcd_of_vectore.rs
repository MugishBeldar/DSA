use std::cmp;
pub fn gcd_of_vec(arr: &[i32]) -> i32 {
    let min_opt = arr.iter().min();
    let max_opt = arr.iter().max();

    let max = match max_opt {
        Some(max_opt) => max_opt.to_owned(),
        None => -1,
    };

    let min = match min_opt {
        Some(min_opt) => min_opt.to_owned(),
        None => -1,
    };

    if min == -1 || max == -1 {
        return -1;
    }

    let mut gcd = 1;

    for i in 2..=cmp::min(max, min) {
        if min % i == 0 && max % i == 0 {
            gcd = cmp::max(gcd, i);
        }
    }

    return gcd;
}
