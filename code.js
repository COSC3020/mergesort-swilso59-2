function iteritiveMergesort(x) {
    let n = x.length;

    // Current size of subarrays to merge, starting with 1
    for (let currSize = 1; currSize < n; currSize = 2 * currSize) {
        // Pick starting point of different subarrays of current size
        for (let lo = 0; lo < n - currSize; lo += 2 * currSize) {
            let mid = lo + currSize - 1;
            let hi = Math.min(lo + 2 * currSize - 1, n - 1);

            iteritiveMerge(x, lo, mid, hi);
        }
    }
    return x;
}

function iteritiveMerge(x, lo, mid, hi) {
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (x[mid] <= x[start2]) {
        return; 
    }

    // Two pointers to maintain the current position of both subarrays
    while (lo <= mid && start2 <= hi) {

        // If the element at the start of the first half is smaller or equal, it's in the right place
        if (x[lo] <= x[start2]) {
            lo++;
        } else {
            // Otherwise, the element from the second half needs to be inserted into the first half
            let value = x[start2];
            let index = start2;

            // Shift all elements between lo and start2 right by one position
            while (index !== lo) {
                x[index] = x[index - 1];
                index--;
            }
            x[lo] = value;

            // Update all pointers
            lo++;
            mid++;
            start2++;
        }
    }
}
