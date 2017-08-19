import test from 'ava';
import ReconstructItinerary from './ReconstructItinerary';

test('Reconstruct Itinerary', (t) => {
  const tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
  const itinerary = ["JFK", "MUC", "LHR", "SFO", "SJC"];

  t.deepEqual(ReconstructItinerary.exec(tickets), itinerary);
});

test('Reconstruct Itinerary', (t) => {
  const tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
  const itinerary = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];

  t.deepEqual(ReconstructItinerary.exec(tickets), itinerary);
});
