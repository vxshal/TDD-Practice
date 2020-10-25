const sum = function(a, b) {
    return a + b;
};

const product = function(a, b) {
    return a * b;
};

const min = function(a, b) {
    if (a < b || a === b) {
        return a;
    } else {
        return b;
    }
};

const max = function(a, b) {
    if (a > b || a === b) {
        return a;
    } else {
        return b;
    }
};

const head = function(arr) {
    if(arr.length) return arr[0];

    return null;
};

const tail = function(arr) {
    if(arr.length) return arr[arr.length - 1];

    return null;
};

const mid = function(arr) {
    let len = arr.length;

    if(!len) return null;

    // even length: return an array of middle 2 values
    // otherwise, return exact middle value
    if(len % 2 === 0) {
        return arr.slice(len / 2 - 1, len / 2 + 1);
    } else {
        return arr[Math.floor(len / 2)];
    }
};

const total = function(nums) {
    let sum = 0;

    for (num of nums) {
        sum += num;
    }

    return sum;
};

const average = function(nums) {
    if (!nums.length) return null;

    return total(nums) / nums.length;
};

const smallest = function(nums) {
    if (!nums.length) return null;

    let small = nums[0];

    for (num of nums) {
        if (num < small) {
            small = num;
        }
    }

    return small;
};

const largest = function(nums) {
    if (!nums.length) return null;

    let large = nums[0];

    for (num of nums) {
        if (num > large) {
            large = num;
        }
    }

    return large;
};

const merge = function(arr1, arr2) {
    const len1 = arr1.length;
    const len2 = arr2.length;

    if(!len1 && !len2) {
        return null;
    }

    let merged = [];

    for(let i = 0; i < max(len1, len2); i++) {
        if (arr1[i]) merged.push(arr1[i]);
        if (arr2[i]) merged.push(arr2[i]);
    }

    return merged;
};

module.exports = {
    sum,
    product,
    min,
    max,
    head,
    tail,
    mid,
    total,
    average,
    smallest,
    largest,
    merge
};
