class LetterMapping {
  static exec(num) {
    const letterMapping = [
      'A', 'B', 'C', 'D', 'E',
      'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y',
      'Z'
    ];

    if (!num) return [];

    const result = [];

    if (num <= 26) {
      result.push(letterMapping[num - 1]);
    }

    const first = letterMapping[parseInt(Number(num).toString().charAt(0)) - 1];
    const rest1 = this.exec(parseInt(Number(num).toString().slice(1)));
    for (const i in rest1) {
      result.push(first + rest1[i]);
    }

    const secondIndex = parseInt(Number(num).toString().substr(0, 2)) - 1;
    if (secondIndex < 26) {
      const second = letterMapping[secondIndex];
      const rest2 = this.exec(parseInt(Number(num).toString().slice(2)));
      for (const j in rest2) {
        result.push(second + rest2[j]);
      }
    }

    return result;
  }
}

module.exports = LetterMapping;
