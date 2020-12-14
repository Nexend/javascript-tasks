export const withdraw = (clients, balances, client, amount) => {
  const indexOfPerson = clients.indexOf(client);
  let result = 0;

  if (balances[indexOfPerson] >= amount) {
    result = balances[indexOfPerson] - amount;
  } else {
    return -1;
  }
  return result;
};

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "John", 50));

console.log(withdraw(["Ann", "John", "User"], [1400, 87, -6], "User", 10));
