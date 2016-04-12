import { ReconstructItinerary } from './ReconstructItinerary';

declare var describe: any, it: any, expect: any;

describe("Reconstruct Itinerary", () => {
    it("should work", () => {
        var tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
        var itinerary = ["JFK", "MUC", "LHR", "SFO", "SJC"];

        expect(ReconstructItinerary.exec(tickets)).toEqual(itinerary);
    });

    it("should also work", () => {
        var tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
        var itinerary = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];

        expect(ReconstructItinerary.exec(tickets)).toEqual(itinerary);
    });
});
