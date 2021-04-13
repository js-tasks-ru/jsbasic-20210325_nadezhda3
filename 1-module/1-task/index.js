function factorial(n) {
  // ваш код...

  if (n == 0 || n == 1) {
    return 1;
  } else {
    let i = n;
    while (n > 1) {
      i = i * (n - 1);
      n--;
    }
    return i;
  };
}
