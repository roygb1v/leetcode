const smallestKElements = (arr, k) => {
    const res = [];
    let index = null;
    let min = Infinity;
    while (k > 0) {
        for (let i = 0; i < arr.length; i += 1) {
            let num = arr[i];
            if (num < min) {
                min = num;
                index = i;
            }
        }
        res.push(min);
        min = Infinity;
        arr[index] = Infinity;
        k -= 1;
    }
    return res;
}

// If k is small then time complexity is O(1) and iterating through array is O(n) therefore time complexity is O(n) for this algorithm.
// If k is large, then time complexity is O(h x n) or O(n^2)
// This algorithm mutates the input so it will be preferable to create a new copy of the arr however this will double space complexity which is not feasible
// for large arr size and/or limited memory size.
