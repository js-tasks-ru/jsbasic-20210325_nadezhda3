function sumSalary(salaries) {
  // ваш код...
  let n = 0;
  for (let key in salaries) {
    if (typeof (salaries[key]) == 'number' && salaries[key] != Infinity && salaries[key] != -Infinity && !isNaN(salaries[key]) ) {
      n = n + salaries[key];
    };

  };
  return n;
}
