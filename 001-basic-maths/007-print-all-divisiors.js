function printAllDivisors(number) {
    let divisors = [1, number];

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            divisors.push(i);

            // avoid duplicate for perfect square
            if (i !== number / i) {
                divisors.push(number / i);
            }
        }
    }

    return divisors;
}

console.log(printAllDivisors(3));


// time complexity
// loop goes tin math sqrt hence √n = O(√n)
// space complexity
// divisors array use which can grow till divisors.length < number hence 2√n => O(√n)
