function getMinMax(str) {
  // ваш код...
  
  let arrDeleteSpace = str.split(' '); 
  let returnStr = arrDeleteSpace.join(',');
  let arrDeleteComma = returnStr.split(',');


  let arrNumber = arrDeleteComma.map(function (item) {
    if (item != '') {
      return Number(item);
    };
  });
  

  let arrFilter = arrNumber.filter(function (item) {

    if (typeof (item) == 'number') {
      return item;
    }
  });
  

  let arrSort = arrFilter.sort((a, b) => a - b);
 
  let min1 = arrSort.splice(0, 1);

  let max1 = arrSort.splice(-1);

  let min2 = Number(min1);

  let max2 = Number(max1);

  let result = {
    min: min2,
    max: max2,
  };

  return result;

}


