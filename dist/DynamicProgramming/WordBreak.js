System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WordBreak;
    return {
        setters:[],
        execute: function() {
            WordBreak = (function () {
                function WordBreak() {
                }
                WordBreak.exec = function (str, dict) {
                    var dp = Array(str.length + 1).fill(false);
                    dp[0] = true;
                    for (var i = 1; i <= str.length; i++) {
                        for (var j = 0; j < i; j++) {
                            if (dp[j] && dict.includes(str.substring(j, i))) {
                                dp[i] = true;
                                break;
                            }
                        }
                    }
                    return dp[str.length];
                };
                return WordBreak;
            }());
            exports_1("WordBreak", WordBreak);
        }
    }
});
//# sourceMappingURL=WordBreak.js.map