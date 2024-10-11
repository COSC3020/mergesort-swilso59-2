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
- Outer loop: This loop runs $\log_{2}(n)$ times due to the currSize doubling each iteration
- Inner loop: This loop runs $n$ times as it processes all elements of the array. esentially using the subarrays to cover the entire 
  array of size $n$
- merge function: In this fucntion we have a while loop that shifts all elements between lo and start2 to the right one space
- This gives us a worst-case runtime $\Theta(n^{2}\log_{2}(n))$ 

I started trying to complete this project on my own. I was having trouble getting my function to pass the test code. I tried to use chat GPT to help me find and fix the problem but Nothing seemed to work. This lead me to looking at my previous repository as I remember having a similar issue before. I think I could have probably just had some sort of spelling error as my implementation was not far off from what I had before. I also wanted to take a look at some other students repositories to see how they are implementing there functions and analysising them. Here are the repositories I looked at that I found helpful with both the implementation and understanding the analysis. It was pointed out that my work resembled the work from my previous repository. So, I decided start from the begining again. This gave me a good refesher on this assignment. I then went back to the sorting lectures and reviewed the material for mergesort. I ended up using the example code provided in the lecture and got it so that it passed the test-code provided. After I had a working version of a recursive mergesort. I went throught the code replacing parts of it that used recursion with iteration. I then made changes the the merge function so that instead of using a temp array we shift all the elements in the orignial array. This in-place merge function is what causes us to get a worst case  runtime of $\Theta(n^{2}\log_{2}(n))$. 

I have adjusted the code.test.js file to include a recursive version of the mergesort function that I initially started with from the lecture slides. I also created functions to measure the runtime of both the recursive and iterative versions of mergesort using different-sized arrays in the worst case (reverse order) and compared the actual runtimes with the values obtained from calculating the time complexity of each mergesort. Although the actual runtimes differ significantly from the calculated time complexity. When comparing the growth rate as the array size $n$ increases, the growth patterns align. When $n$ is doubled the recursive version’s runtime roughly doubles. This indicates linear growth. In the iterative version doubling $n$ results in the runtime increasing by about 4x. This indicates quadratic growth. With this updated testcode we can see that for large enough $n$ the mergesort functions follow the growth rate predicted by their time complexity.

https://github.com/COSC3020/mergesort-swilso59-1
https://github.com/COSC3020/mergesort-IshitaPatel18
https://github.com/COSC3020/mergesort-SamuelGlz-1
https://github.com/COSC3020/mergesort-KobeLimon21

https://www.w3schools.com/jsref/met_console_time.asp

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

