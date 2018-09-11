exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return str2 => str + ', ' + str2
  },

  makeClosures: function(arr, fn) {
    return arr.map((item) => {
      return () => fn(item);
    });
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments: function() {
    var args = Array.from(arguments);
    return args.reduce(function (total, item) { return total + item });
  },

  callIt: function(fn, ...args) {
    return fn(...args)
  },

  partialUsingArguments: function(fn, ...args) {
    return fn.bind(null, ...args);
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        }

        return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
