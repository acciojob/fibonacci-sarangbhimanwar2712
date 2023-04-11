function fibonacci(num) {
// your code here
	if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else {
    let fib = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
  }
}

module.exports = fibonacci;
