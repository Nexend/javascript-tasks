// good
function createLogger() {
  const messages = [];
  function warn(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }
  function error(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }
  function log(text) {
    messages.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }
  function getRecords(type) {
    const sorted = messages.sort((a, b) => a.dateTime < b.dateTime);
    return type ? sorted.filter(item => item.type === type) : sorted;
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
}


// not good (2 sort, 2 return, type === undefined)
// function createLogger() {
//   const logger = [];
//   function warn(text) {
//     logger.push({
//       message: text,
//       dateTime: new Date(),
//       type: "warn",
//     });
//   }
//   function error(text) {
//     logger.push({
//       message: text,
//       dateTime: new Date(),
//       type: "error",
//     });
//   }
//   function log(text) {
//     logger.push({
//       message: text,
//       dateTime: new Date(),
//       type: "log",
//     });
//   }
//   function getRecords(type) {
//     if (type === undefined) {
//       return logger.sort((a, b) => b.dateTime - a.dateTime);
//     }
//     return logger
//       .filter((item) => item.type === type)
//       .sort((a, b) => b.dateTime - a.dateTime);
//   }
//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// }
const logger = createLogger();
logger.log("User logged in");
logger.warn("User try to restricted page");
logger.log("User logged out");
logger.error("Unexpected error on the site");
logger.getRecords(); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger.getRecords("log"); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger.getRecords("error"); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger.getRecords("warn"); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
console.log(logger.getRecords("error"));
