const getDiff = (startDate, endDate) => {
  const diff = Math.abs(new Date(startDate) - new Date(endDate));

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};
console.log(getDiff(new Date(2021, 8, 1, 22, 25, 10), new Date(2020, 8, 20, 10, 20, 3))); // 346d 12h 5m 7s
