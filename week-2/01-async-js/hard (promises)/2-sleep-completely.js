/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let startTime = Date.now();
  return new Promise(function (resolve) {
    while (Date.now() - startTime < milliseconds) {
      // synchronous func to halts JS thread for n secs
    }
    resolve();
  });
}

module.exports = sleep;
