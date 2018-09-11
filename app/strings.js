exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var occurrence = false;
    var regexp = new RegExp('([a-zA-Z])\\1{' + (amount - 1) + '}')
    var newIndex = 0;
    function matchAmount(idx) {
      var newStr = str.substr(idx);
      var matches = regexp.exec(newStr);

      if (idx === 0 && matches.index > 0) {
        result += newStr[0];
      }

      if (matches && (!occurrence || occurrence !== matches[0] || matches.index !== 0)) {
        occurrence = matches[0];
        result += occurrence;
      }

      if (matches && newStr.length) {
        newIndex += matches.index + amount;
        matchAmount(newIndex)
      }
    }
    matchAmount(0);
    return result;
  },

  wordWrap: function(str, cols) {
    return str.replace(/\s([a-z]){2,}/gi, function(match, contents, offset, input_string) {
      return match.replace(' ', '\n');
    });
  },

  reverseString: function(str) {
    var reverseStr = '';
    function shiftStr(subStr) {
      debugger
      var newStr = subStr.slice(0, -1);
      reverseStr += subStr.slice(-1);
      if (newStr.length) {
        shiftStr(newStr);
      }
    }

    shiftStr(str);
    return reverseStr;
  }
};
