
// handle delay of an operation for particular period time in millisecond (pass as argument)
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/* perform exponential Backoff strategy
 * @params: func : function that will be called on every retry
 * @param: func_arg: argument to  func @param
 * @params: retries: total number of retry with default value = 3
 * @delayTime: starting delay time with defualt value = 1000ms
 * @return: void
 */
const exponentialBackoff = async (func, func_arg = null, retries = 3, delayTime = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await func(func_arg);
    } catch (error) {
      if (i < retries - 1) {
        const backoffTime = delayTime * Math.pow(2, i);
        console.log(`Retry ${i + 1} failed. Retrying in ${backoffTime}ms...`);
        await delay(backoffTime);
      } else {
        throw error;
      }
    }
  }
};

module.exports = { 
  exponentialBackoff
};

