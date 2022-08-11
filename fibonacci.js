function fibonacci(indx) {
  if (indx <= 1) {
    return 1;
  }
  fibonacci.cache = fibonacci.cache || [];
  if (!fibonacci.cache[indx]) {
    fibonacci.cache[indx] = fibonacci(indx - 1) + fibonacci(indx - 2);
  }
  return fibonacci.cache[indx];
}

console.log(fibonacci(6));
