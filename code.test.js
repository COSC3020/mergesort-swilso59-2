const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Recursive mergesort 
function msort(x, lo, hi, tmp) {
    if (lo >= hi) return;
    var mid = Math.floor((lo + hi) / 2);
    msort(x, lo, mid, tmp);
    msort(x, mid + 1, hi, tmp);
    recursiveMerge(x, lo, mid, hi, tmp);
}

function recursiveMergesort(x) {
    
    if (x.length <= 1) return x;
    
    var tmp = [];
    msort(x, 0, x.length - 1, tmp);
    return x; 
}

function recursiveMerge(x, lo, mid, hi, tmp) {
    var a = lo, b = mid + 1;
    for (var k = lo; k <= hi; k++) {
        if (a <= mid && (b > hi || x[a] <= x[b])) { 
            tmp[k] = x[a++]; 
        } else {
            tmp[k] = x[b++];
        }
    }
    for (var k = lo; k <= hi; k++) {
        x[k] = tmp[k];
    }
}

// Given test 
const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(iterativeMergesort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

jsc.assert(testSort);

// Function to get the exact runtime in milliseconds
function getTimeInMs(sortFunction, array) {
    const start = performance.now();
    sortFunction(array.slice());
    const end = performance.now();
    return end - start;
}

const worstCaseArray = (size) => {
    const arr = [];
    for (let i = size; i > 0; i--) {
        arr.push(i);  // Add the current value to the array
    }
    return arr;
};

// Function to calculate theoretical time complexities
function iterativeComplexity(n) {
    return n * n * Math.log2(n);
}

function recursiveComplexity(n) {
    return n * Math.log2(n); 
}

// Function to get the average runtime over multiple iterations
function getAverageTime(sortFunction, array, iterations = 5) {
    let total = 0;
    for (let i = 0; i < iterations; i++) {
        total += getTimeInMs(sortFunction, array);
    }
    return total / iterations; // Average time
}

function compareRuntimesWithComplexity() {
    const sizes = [10, 20, 500, 1000, 10000, 20000, 100000, 200000];
    const iterations = 5;

    sizes.forEach(size => {
        const arr = worstCaseArray(size);
        console.log(`\nTesting Worst-Case Array: Size = ${size}`);

        // Get average runtimes for iterative and recursive merge sort
        const iterativeTime = getAverageTime(iterativeMergesort, arr, iterations);
        const recursiveTime = getAverageTime(recursiveMergesort, arr, iterations);

        // Calculate theoretical complexities
        const iterativeComplexityValue = iterativeComplexity(size);
        const recursiveComplexityValue = recursiveComplexity(size);

       // Display the results using string concatenation
        console.log('Iterative Merge Sort average time: ' + iterativeTime.toFixed(3) + ' ms');
        console.log('Recursive Merge Sort average time: ' + recursiveTime.toFixed(3) + ' ms');
        console.log('Expected iterative time complexity (n^2 * log2(n)): ' + iterativeComplexityValue.toFixed(3));
        console.log('Expected recursive time complexity (n * log2(n)): ' + recursiveComplexityValue.toFixed(3));

    });
}

compareRuntimesWithComplexity();
