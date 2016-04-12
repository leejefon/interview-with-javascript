System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReconstructItinerary;
    return {
        setters:[],
        execute: function() {
            ReconstructItinerary = (function () {
                function ReconstructItinerary() {
                }
                ReconstructItinerary.exec = function (tickets, startCity) {
                    if (startCity === void 0) { startCity = 'JFK'; }
                    var result = [];
                    var map = {};
                    for (var i in tickets) {
                        if (!map[tickets[i][0]]) {
                            map[tickets[i][0]] = [];
                        }
                        map[tickets[i][0]].push(tickets[i][1]);
                    }
                    for (var key in map) {
                        map[key].sort();
                    }
                    var reversedStack = [startCity];
                    while (reversedStack.length > 0) {
                        if (map[reversedStack[0]] && map[reversedStack[0]].length > 0) {
                            var destination = map[reversedStack[0]].shift();
                            reversedStack.unshift(destination);
                        }
                        else {
                            result.unshift(reversedStack[0]);
                            reversedStack.shift();
                        }
                    }
                    return result;
                };
                return ReconstructItinerary;
            }());
            exports_1("ReconstructItinerary", ReconstructItinerary);
        }
    }
});
//# sourceMappingURL=ReconstructItinerary.js.map