// 125. Valid Palindrome
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const testString = 'A man, a plan, a canal: Panama';

// ============================================
// METHOD 1: TWO-POINTER APPROACH (Most Efficient)
// ============================================
// Time Complexity: O(n)
// Space Complexity: O(n) - for cleaned string
var isPalindrome_TwoPointer = function (s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
};

// ============================================
// METHOD 2: RECURSIVE APPROACH
// ============================================
// Time Complexity: O(n)
// Space Complexity: O(n) - for call stack + cleaned string
var isPalindrome_Recursive = function (s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(str, left, right) {
        if (left >= right) return true;  // Base case
        if (str[left] !== str[right]) return false;
        return checkPalindrome(str, left + 1, right - 1);  // Recursive call
    }
    
    return checkPalindrome(cleaned, 0, cleaned.length - 1);
};

// ============================================
// METHOD 3: REVERSE & COMPARE APPROACH
// ============================================
// Time Complexity: O(n)
// Space Complexity: O(n) - for cleaned string + reversed string
var isPalindrome_ReverseCompare = function (s) {
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// ============================================
// TESTING ALL METHODS
// ============================================
console.log('=== Testing: "A man, a plan, a canal: Panama" ===');
console.log('Method 1 (Two-Pointer):', isPalindrome_TwoPointer(testString));
console.log('Method 2 (Recursive):', isPalindrome_Recursive(testString));
console.log('Method 3 (Reverse & Compare):', isPalindrome_ReverseCompare(testString));

console.log('\n=== Time & Space Complexity Comparison ===');
console.log('Two-Pointer:        Time: O(n), Space: O(n)');
console.log('Recursive:          Time: O(n), Space: O(n) [call stack]');
console.log('Reverse & Compare:  Time: O(n), Space: O(n)');
console.log('\n✓ Two-Pointer is most efficient (no extra reverse operation)');