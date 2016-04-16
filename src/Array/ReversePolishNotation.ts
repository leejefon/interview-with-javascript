
export class ReversePolishNotation {

    public static exec(tokens: string[]): number {
        var stack: number[] = [];

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
