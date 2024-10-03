function mergesort(array) {
    // Get the length of the array 
    const n = array.length;

    // Loop for subarrays
    // There size starting at one then doubling till we reach the arrLength
    for (let subSize = 1; subSize < n; subSize *= 2) {
        // Now we want to pick the start point or left Index of each subarray that will me merged in each current iteration 
        for (let leftIndex = 0; leftIndex < n; leftIndex += 2 * subSize) {
            // Calculate the mid point of the subarray for the merge step.
            const mid = Math.min(leftIndex + subSize - 1, n - 1);
            // Calculate the ending index for the second subarray
            const rightIndex = Math.min(leftIndex + 2 * subSize - 1, n - 1);
            // Call the merge function 
            merge(array, leftIndex, mid, rightIndex);
        }
    }

    function merge (array, left, mid, right) {
    
        // i is the starting index for the left subarray
        let i = left;
        // j is the starting index for the right subarray 
        let j = mid + 1;

        // merge while subarrays remain
        while  (i <= mid && j <= right) {
            // if the elements in the left and right subarrays are equal iterate i
            if (array[i] <= array[j]) {
                i++;
            } else {
                // if the elements in the right subarray is smaller then the element in the left subarray we need to swap elements
                // Save the element in the right subarray
                const temp = array[j]
                let k = j;
                // Shift all elements in the left subarray to the right inorder to create space for the temp element 
                while (k !== i) {
                    array[k] = array[k - 1];
                    k--;
                }
                // Place the smaller element in the correct position 
                array[i] = temp;
                i++;
                mid++;
                j++;
            }
        }  
    }
    return array;
}
