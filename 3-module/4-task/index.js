function showSalary(users, age) {
  // ваш код...
  let ageRange = users.filter(item => item.age <= age);
  let nameBalance = ageRange.map(item => item.name + ', ' + item.balance);
  let usersStr = nameBalance.join('\n')
  return usersStr;
}
