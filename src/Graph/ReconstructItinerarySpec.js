import { ReconstructItinerary } from './ReconstructItinerary';

declare var describe: any, it: any, expect: any;

describe("Reconstruct Itinerary", () => {
  it("should work", () => {
    let tickets: string[][] = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
    let itinerary: string[] = ["JFK", "MUC", "LHR", "SFO", "SJC"];

    expect(ReconstructItinerary.exec(tickets)).toEqual(itinerary);
  });

  it("should also work", () => {
    let tickets: string[][] = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
    let itinerary: string[] = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];

    expect(ReconstructItinerary.exec(tickets)).toEqual(itinerary);
  });
});
