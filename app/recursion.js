exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileNames = [], currentDir = [];
    function directoryProcessor(dir) {
      currentDir.push(dir.dir);
      for (var file of dir.files) {
        if ((!dirName || currentDir.indexOf(dirName) != -1) && typeof file === 'string') {
          fileNames.push(file)
        } else if (typeof file !== 'string') {
          directoryProcessor(file);
        }
      }
      currentDir.pop();
    };
    directoryProcessor(data);
    return fileNames;
  },

  permute: function(arr) {
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt();
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  },

  fibonacci: function(n) {
    var series = [], initNumber = 1;
    for (var i = 0; i < n; i++) {
      if (i > 1) {
        series.push(series[i - 2] + series[i - 1])
      } else {
        series.push(initNumber);
      }
    }
    return series[series.length - 1];
  },

  validParentheses: function(n) {
    function nPair(num) {
      if (num == 0)
        return [""];

      var result = [];
      for (var i = 0; i < num; ++i) {

        var lefts = nPair(i);
        var rights = nPair(num - i - 1);

        for (var l = 0; l < lefts.length; ++l)
          for (var r = 0; r < rights.length; ++r)
            result.push("(" + lefts[l] + ")" + rights[r]);
      }
      return result;
    }
    return nPair(n);
  }
};
