function reverseArray(arr, revArr, ind) {
    if (ind == 0)  {
        revArr.push(arr[ind]);
        return revArr;
    }
    revArr.push(arr[ind]);
    return reverseArray(arr, revArr, ind - 1);
}

console.log(reverseArray([1,2,3], [], 2));
