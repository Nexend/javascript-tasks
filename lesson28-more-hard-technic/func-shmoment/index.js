const shmoment = curValue => {
  const res = curValue;

  const operationWithDates = {
    add(date, number) {
      if (date === 'years') {
        res.setFullYear(res.getFullYear() + number);
      }
      if (date === 'months') {
        res.setMonth(res.getMonth() + number);
      }
      if (date === 'days') {
        res.setDate(res.getDate() + number);
      }
      if (date === 'hours') {
        res.setHours(res.getHours() + number);
      }
      if (date === 'minutes') {
        res.setMinutes(res.getMinutes() + number);
      }
      if (date === 'seconds') {
        res.setSeconds(res.getSeconds() + number);
      }
      if (date === 'milliseconds') {
        res.setMilliseconds(res.getMilliseconds() + number);
      }
      return this;
    },
    subtract(date, number) {
      if (date === 'years') {
        res.setFullYear(res.getFullYear() - number);
      }
      if (date === 'months') {
        res.setMonth(res.getMonth() - number);
      }
      if (date === 'days') {
        res.setDate(res.getDate() - number);
      }
      if (date === 'hours') {
        res.setHours(res.getHours() - number);
      }
      if (date === 'minutes') {
        res.setMinutes(res.getMinutes() - number);
      }
      if (date === 'seconds') {
        res.setSeconds(res.getSeconds() - number);
      }
      if (date === 'milliseconds') {
        res.setMilliseconds(res.getMilliseconds() - number);
      }
      return this;
    },
    result() {
      return new Date(res);
    },
  };
  return operationWithDates;
};

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17, 0))
  .add('minutes', 2)
  .add('days', 8)

  .result();

console.log(result);
