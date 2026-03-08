pub fn understanding_recursion_by_printing_n(n: i32) {
    // let mut n = n;
    if n == 0 {
        return;
    }
    println!("{}",n);
    understanding_recursion_by_printing_n(n-1);
}
