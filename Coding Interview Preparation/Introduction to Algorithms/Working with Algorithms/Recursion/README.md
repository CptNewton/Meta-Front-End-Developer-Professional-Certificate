### In the following code, what is the base case?

```
def fibonacci(number)
	if number < 2
		number
	else
		fibonacci(number – 1) + fibonacci(number – 2)
	end
end
```

- [x] When the `number < 2`.
- [ ] When the `number > 2`.
- [ ] `fibonacci(number – 1)`.
