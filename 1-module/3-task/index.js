function ucFirst(str) {
  // ваш код...
  let firstStr = str.slice(0, 1).toUpperCase();
  let n = str.length;
  let endStr = str.slice(1, n + 1);
  let newStr = firstStr + endStr;
  return newStr;
}
