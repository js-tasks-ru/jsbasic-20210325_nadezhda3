function truncate(str, maxlength) {
  // ваш код...
   if (str.length + 1 > maxlength) {
    let shortStr = str.slice(0, maxlength - 1);
    return shortStr + '…'
  } else {
    return str;
  }
}
