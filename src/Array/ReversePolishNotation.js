class ReversePolishNotation {
  static exec(tokens) {
    var stack = [];

    tokens.forEach(token => {
      switch (token) {
        case '+':
          var a = stack.pop();
          var b = stack.pop();
          stack.push(b + a);
          break;
        case '-':
          var a = stack.pop();
          var b = stack.pop();
          stack.push(b - a);
          break;
        case '*':
          var a = stack.pop();
          var b = stack.pop();
          stack.push(b * a);
          break;
        case '/':
          var a = stack.pop();
          var b = stack.pop();
          stack.push(b / a);
          break;
        default:
          stack.push(parseInt(token));
      }
    });

    return stack[0];
  }
}

module.exports = ReversePolishNotation;
