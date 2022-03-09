const throttle = (callback, delay) => {
  let waiting = false;
  return (...arg) => {
    if (waiting) return;
    callback(...arg);
    waiting = true;
    setTimeout(() => (waiting = false), delay);
  };
};

export default throttle;
