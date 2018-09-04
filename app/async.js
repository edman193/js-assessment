exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => setTimeout(resolve(value), 100));
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      $.ajax(url).then((resp) => {
        resolve(resp.people.map(person => person.name).sort());
      });
    });
  }
};
