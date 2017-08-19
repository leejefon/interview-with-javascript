class ReversePolishNotation {
  static exec(tokens) {
    const stack = [];
    let a, b;

    tokens.forEach(token => {
      switch (token) {
        case '+':
          a = stack.pop();
          b = stack.pop();
          stack.push(b + a);
          break;
        case '-':
          a = stack.pop();
          b = stack.pop();
          stack.push(b - a);
          break;
        case '*':
          a = stack.pop();
          b = stack.pop();
          stack.push(b * a);
          break;
        case '/':
          a = stack.pop();
          b = stack.pop();
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
