use dsa_rust::basic_maths::armstrong_number::armstrong_number;
use dsa_rust::basic_maths::count_all_digit_of_number::count_all_digit_of_number;
use dsa_rust::basic_maths::gcd_of_number::gcd_of_numbers;
use dsa_rust::basic_maths::gcd_of_vectore::gcd_of_vec;
use dsa_rust::basic_maths::number_is_prime::number_is_prime;
use dsa_rust::basic_maths::palindrome_number::palindrome_number;
use dsa_rust::basic_maths::print_all_divisors::print_all_divisors;
use dsa_rust::basic_maths::reverse_number::reverse_digit;

fn main() {
    println!("Basic Maths Binary!");
    println!(
        "count_all_digit_of_number(10) = {}",
        count_all_digit_of_number(10)
    );
    println!(
        "count_all_digit_of_number(100) = {}",
        count_all_digit_of_number(100)
    );
    println!(
        "count_all_digit_of_number(100) = {}",
        count_all_digit_of_number(0)
    );

    println!("reverse_number(123) = {}", reverse_digit(123));

    println!("palindrome_number(121) = {}", palindrome_number(121));
    println!("palindrome_number(123) = {}", palindrome_number(123));

    println!("gcd_of_numbers(12, 9) = {}", gcd_of_numbers(12, 9));
    println!("gcd_of_numbers(20, 15) = {}", gcd_of_numbers(20, 15));

    println!("gcd_of_vec(&[12, 9]) = {}", gcd_of_vec(&[12, 9]));
    println!("gcd_of_vec(&[20, 15]) = {}", gcd_of_vec(&[20, 15]));

    println!("armstrong_number(153) = {}", armstrong_number(153));
    println!("armstrong_number(123) = {}", armstrong_number(123));

    println!("print_all_divisors(12) = {:?}", print_all_divisors(12));
    println!("print_all_divisors(36) = {:?}", print_all_divisors(36));

    println!("number_is_prime(12) = {}", number_is_prime(12));
    println!("number_is_prime(3) = {}", number_is_prime(3));

    
}
