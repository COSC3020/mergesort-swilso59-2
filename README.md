# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

Looking at our implementation we have:
- Outer loop: $\log_{2}(n)$ subsize starts at $1$ and doubles with each iteration to $n$ the length or the array 
- Inner loop: $n$ The number of iterations of the inner loop is proportional to the total number of elements in the array $n$
- Merge function: $n$ Takes adjacent subarrays and shifts elements when needed then merges them. In the worst case the 
  function will need to merge and shift every element. Which mean that the merge step takes quadradic time.

Time complexity of $T(n) \in O(n^{2}\log_{2}(n))$

I started trying to complete this project on my own. I was having trouble getting my function to pass the test code. I tried to use chat GPT to help me find and fix the problem but Nothing seemed to work. This lead me to looking at my previous repository as I remember having a similar issue before. I think I could have probably just had some sort of spelling error as my implementation was not far off from what I had before. I also wanted to take a look at some other students repositories to see how they are implementing there functions and analysising them. Here are the repositories I looked at that I found helpful with both the implementation and understanding the analysis. 

https://github.com/COSC3020/mergesort-swilso59-1
https://github.com/COSC3020/mergesort-IshitaPatel18
https://github.com/COSC3020/mergesort-SamuelGlz-1
https://github.com/COSC3020/mergesort-KobeLimon21

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

