function factorial(num) {
    if (num == 1 || num == 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(0))

// // ✗ NOT tail recursion - multiplication happens AFTER
// return num * factorial(num - 1);
//      └─ This computation must wait for factorial(num-1) to return!

// // ✓ Tail recursion - computation happens BEFORE
// return factorial(num - 1, accumulator);

// Time Complexity: O(n) — 5 calls for factorial(5)
// Space Complexity: O(n) — Stack grows with recursion depth (NO tail-call optimization available)