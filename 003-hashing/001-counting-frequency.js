function freqCount(arr) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]] = map[arr[i]] + 1;
        } else {
            map[arr[i]] = 1;
        }
    }

    let maxKey = null;
    let maxFreq = 0;

    for (const [key, value] of Object.entries(map)) {
        if (value > maxFreq) {
            maxFreq = value;
            maxKey = key;
        }
    }

    return {
        maxKey: Number(maxKey),
        frequency: maxFreq
    };
}

console.log(freqCount([10, 5, 10, 15, 10, 5]));

// Time Complexity: O(N), where N is the number of elements in the array. Each element is processed once.

// Space Complexity: O(N), for storing frequencies of unique elements in the unordered_map.