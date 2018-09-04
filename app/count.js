exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;
    var assign_num = () => {
      console.log(start++);
      if (start <= end)
        timeout = setTimeout(assign_num, 100);
    }

    assign_num();

    return {
      cancel: () => timeout && clearTimeout(timeout)
    }
  }
};
