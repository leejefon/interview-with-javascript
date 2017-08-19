export class LetterCombinationsOfPhoneNumber {
  static phoneNumberMapping = {
    0: [''],
    1: [''],
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z']
  };

  static exec(phone) {
    if (phone.length === 1) return this.phoneNumberMapping[phone];

    var result = [];

    var rest = this.exec(phone.slice(1));

    for (var a of this.phoneNumberMapping[phone.charAt(0)]) {
      for (const i in rest) {
        result.push(a + rest[i]);
      }
    }

    return result.length === 0 ? rest : result;
  }
}
