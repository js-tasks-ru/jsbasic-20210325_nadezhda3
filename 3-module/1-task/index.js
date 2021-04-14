function namify(users) {
  // ваш код...
  let newArr = users.map(function (item) {
    return item.name;
  });
  return newArr;
}
