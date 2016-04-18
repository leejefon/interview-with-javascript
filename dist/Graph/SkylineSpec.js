System.register(['./Skyline'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Skyline_1;
    return {
        setters:[
            function (Skyline_1_1) {
                Skyline_1 = Skyline_1_1;
            }],
        execute: function() {
            describe("Skyline", function () {
                it("should work", function () {
                    var buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
                    var results = [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]];
                    expect(Skyline_1.Skyline.exec(buildings)).toEqual(results);
                });
            });
        }
    }
});
//# sourceMappingURL=SkylineSpec.js.map