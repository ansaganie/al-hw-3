function myFilter(callback, context = this) {
  if (!Array.isArray(context)) {
    throw new TypeError('Method should be called in Array context');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Callback is not a function');
  }

  const filteredArray = [];

  for (let i = 0; i < context.length; i += 1) {
    const isPassed = callback(context[i], i, context);

    if (isPassed) {
      filteredArray.push(context[i]);
    }
  }

  return filteredArray;
}

function createDebounceFunction(callback, timeout) {
  const isValid = typeof callback === 'function' && typeof timeout === 'number';

  if (!isValid) {
    throw new TypeError('Invalid arguments');
  }

  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
}
