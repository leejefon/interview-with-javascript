System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LongestUniqueLetters;
    return {
        setters:[],
        execute: function() {
            LongestUniqueLetters = (function () {
                function LongestUniqueLetters() {
                }
                LongestUniqueLetters.exec = function (str) {
                    var strNoRepeat = [];
                    var longest = 0;
                    for (var i = 0; i < str.length; i++) {
                        var index = strNoRepeat.indexOf(str.charAt(i));
                        if (index !== -1) {
                            strNoRepeat = strNoRepeat.slice(index + 1);
                            strNoRepeat.push(str.charAt(i));
                            if (strNoRepeat.length > longest) {
                                longest = strNoRepeat.length;
                            }
                        }
                        else {
                            strNoRepeat.push(str.charAt(i));
                            if (strNoRepeat.length > longest) {
                                longest = strNoRepeat.length;
                            }
                        }
                    }
                    return longest;
                };
                return LongestUniqueLetters;
            }());
            exports_1("LongestUniqueLetters", LongestUniqueLetters);
        }
    }
});
//# sourceMappingURL=LongestUniqueLetters.js.map