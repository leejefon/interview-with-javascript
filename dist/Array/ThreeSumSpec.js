System.register(['./ThreeSum'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ThreeSum_1;
    return {
        setters:[
            function (ThreeSum_1_1) {
                ThreeSum_1 = ThreeSum_1_1;
            }],
        execute: function() {
            describe("ThreeSum", function () {
                it("should work", function () {
                    var arr = [-1, 0, 1, 2, -1, -4];
                    var results = [
                        [-1, -1, 2],
                        [-1, 0, 1]
                    ];
                    expect(ThreeSum_1.ThreeSum.exec(arr)).toEqual(results);
                });
            });
        }
    }
});
//# sourceMappingURL=ThreeSumSpec.js.map