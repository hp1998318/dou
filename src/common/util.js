// 防抖函数
export function debounce(fun, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}
// 节流函数
export function throttle(fun, wait) {
  let pre = 0;
  let now = null;
  return function (...args) {
    now = Date.now();
    if (now - pre >= wait) {
      fun.apply(this, args);
      pre = now;
    }
  };
}
