function camelize(str) {
  // ваш код...
  let arrWords = str.split('-');
  
  let arrCamel = arrWords.map(function(item, index) {
    if (index == '0'){
      return item;
    } else {
      return item.slice(0, 1).toUpperCase() + item.slice(1)
    }}
    );
  
  
  let strCamel = arrCamel.join('');

  return strCamel;

}
