System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReversePolishNotation;
    return {
        setters:[],
        execute: function() {
            ReversePolishNotation = (function () {
                function ReversePolishNotation() {
                }
                ReversePolishNotation.exec = function (tokens) {
                    var stack = [];
                    tokens.forEach(function (token) {
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
                };
                return ReversePolishNotation;
            }());
            exports_1("ReversePolishNotation", ReversePolishNotation);
        }
    }
});
//# sourceMappingURL=ReversePolishNotation.js.map