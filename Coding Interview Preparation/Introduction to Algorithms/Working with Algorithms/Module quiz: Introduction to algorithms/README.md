### 1. Insertion sort is an example of divide and conquer?

- [ ] True.
- [x] False.

### 2. Given an array of 6 numbers `[6,8,19,48,9,90]` and applying `insertion sort`, how many swaps must occur before the array is sorted?

- [x] 2.
- [ ] 4.
- [ ] 6.

### 3. What time complexity is required to do a linear search?

- [ ] `O(1)`.
- [ ] `((log (n))`.
- [x] `O(n)`.

### 4. Why do we need Big-O notation to evaluate our programs?

- [x] Because measuring time is relative to a person’s computer, so a relative metric is required.
- [ ] Because sorting is complicated, and we need a complicated metric.
- [ ] Because sorting requires that things are moved around to save space.

### 5. What is parallelization?

- [x] It is about running code at the same time in threads or on separate computers.
- [ ] It is about calling functions repetitively until they have achieved a base case.
- [ ] It is about writing your code in one go.

### 6. Why would you decide to use recursion?

- [x] It lends itself well to a divide and conquer approach.
- [ ] Recursion reduces the pressure on the compiler by making less stack calls.
- [ ] It looks cool and makes your code seem more intelligent.

### 7. Why does Memoization work well with dynamic programming?

- [ ] It takes up less space in the hard drive.
- [ ] Because it takes a lot of memory to run some programs and memoization allows you to store data in smaller sizes.
- [x] It requires less compiling because it stores previous results, reducing the load on the CPU.

### 8. How are the principles of dynamic programming and greedy algorithms at odds with one another?

- [ ] Because dynamic programming will react with more agility to a program, while the greedy approach will be slower and more self-centered.
- [x] The principle of dynamic programming is to exhaustively compute the best solution, while a greedy approach will favor take the immediate best option.
- [ ] The greedy algorithm will use up CPU by monopolizing resources.

### 9. Why is a binary search conducted in `O(log n)` time?

- [ ] It is not, it is conducted in `O(n)`.
- [ ] Because as it searches it sorts the elements.
- [x] Regardless of the size of the input, at every step the number of calculations is halved.

### 10.

```
def fibonacci(number)
    if number < 2
        number
    else
        fibonacci(number - 1) + fibonacci(number - 2)
    end
end
```

In the Fibonacci pseudocode above how many recursive instances can be seen?

- [ ] 0.
- [ ] 1.
- [x] 2.
