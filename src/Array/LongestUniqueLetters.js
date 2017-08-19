class LongestUniqueLetters {
  static exec(str) {
    var strNoRepeat = [];
    var longest = 0;

    for (let i = 0; i < str.length; i++) {
      var index = strNoRepeat.indexOf(str.charAt(i));
      if (index !== -1) {
        strNoRepeat = strNoRepeat.slice(index + 1);
        strNoRepeat.push(str.charAt(i));
        if (strNoRepeat.length > longest) {
          longest = strNoRepeat.length;
        }
      } else {
        strNoRepeat.push(str.charAt(i));
        if (strNoRepeat.length > longest) {
          longest = strNoRepeat.length;
        }
      }
    }

    return longest;
  }
}

module.exports = LongestUniqueLetters;
