function highestAndLowestFreq(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }

    let maxFreq = -Infinity;
    let maxFreqKey;
    let lessFreq = Infinity;
    let lessFreqKey;

    for (const [key, value] of Object.entries(map)) {
        if (value > maxFreq) {
            maxFreq = value;
            maxFreqKey = key;
        }
        if (value < lessFreq) {
            lessFreq = value;
            lessFreqKey = key;
        }
    }

    return {
        [`${maxFreqKey}`]: maxFreq,
        [`${lessFreqKey}`]: lessFreq,
    }
}

console.log(highestAndLowestFreq([1]))