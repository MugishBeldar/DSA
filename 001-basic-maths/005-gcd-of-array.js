// 1979. Find Greatest Common Divisor of Array
// Example 1:

// Input: nums = [2,5,6,9,10]
// Output: 2
// Explanation:
// The smallest number in nums is 2.
// The largest number in nums is 10.
// The greatest common divisor of 2 and 10 is 2.
// Example 2:

// Input: nums = [7,5,6,8,3]
// Output: 1
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 8.
// The greatest common divisor of 3 and 8 is 1.
// Example 3:

// Input: nums = [3,3]
// Output: 3
// Explanation:
// The smallest number in nums is 3.
// The largest number in nums is 3.
// The greatest common divisor of 3 and 3 is 3.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let gcd = 1;
    for (let i=2; i<=min; i++) {
        if (min%i==0 && max%i==0) {
            gcd = Math.max(gcd ,i);
        }
    }
    return gcd;
};

// time complexity 
// O(n) ==> Min(min, max) ==> loop goes to the minimum of min and max of given array

// space complexity
// O(1) ==> constan variable used like min max and gcd which are not grwoable

console.log(findGCD([2,5,6,9,10])); // ans 2
console.log(findGCD([7,5,6,8,3])); // 1
console.log(findGCD([3,3])); // 3