export class ReconstructItinerary {  
  public static exec(tickets: string[][], startCity = 'JFK'): string[] {
    var result: string[] = [];
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

    var reversedStack: string[] = [startCity];
    while (reversedStack.length > 0) {
      if (map[reversedStack[0]] && map[reversedStack[0]].length > 0) {
        var destination: string =  map[reversedStack[0]].shift();
        reversedStack.unshift(destination);
      } else {
        result.unshift(reversedStack[0]);
        reversedStack.shift();
      }
    }

    return result;
  }
}
