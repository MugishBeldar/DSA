function sumOfNNum(n, sum = 0) {
    if (n == 0) return sum;
    sum = sum + n;
    return sumOfNNum(n - 1, sum);
}

console.log(sumOfNNum(5));

// // tail recursion 

// Time Complexity: O(n) — We make n recursive calls
// Space Complexity: O(n) — But could be O(1) with tail-call optimization (TCO), which some JavaScript engines don't fully support
