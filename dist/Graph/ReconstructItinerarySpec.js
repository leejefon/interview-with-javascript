System.register(['./ReconstructItinerary'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReconstructItinerary_1;
    return {
        setters:[
            function (ReconstructItinerary_1_1) {
                ReconstructItinerary_1 = ReconstructItinerary_1_1;
            }],
        execute: function() {
            describe("Reconstruct Itinerary", function () {
                it("should work", function () {
                    var tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
                    var itinerary = ["JFK", "MUC", "LHR", "SFO", "SJC"];
                    expect(ReconstructItinerary_1.ReconstructItinerary.exec(tickets)).toEqual(itinerary);
                });
                it("should also work", function () {
                    var tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
                    var itinerary = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];
                    expect(ReconstructItinerary_1.ReconstructItinerary.exec(tickets)).toEqual(itinerary);
                });
            });
        }
    }
});
//# sourceMappingURL=ReconstructItinerarySpec.js.map