/**
 * Debounce function, taken from lodash
 * @param {Function} func The debounced function.
 * @param {int} wait Time to debounce in ms.
 * @param {boolean} immediate Should this immediately fire?
 * @return {Function} The wrapped, debounced function.
 */
export function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}