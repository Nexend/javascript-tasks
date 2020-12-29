const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']; // Индекс недель начинается с Воскресенья [0, 1, 2, 3, 4, 5, 6]

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
