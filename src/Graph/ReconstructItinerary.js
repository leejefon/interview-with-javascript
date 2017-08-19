class ReconstructItinerary {
  static exec(tickets, startCity = 'JFK') {
    var result = [];
    var map = {};

    for (const i in tickets) {
      if (!map[tickets[i][0]]) {
        map[tickets[i][0]] = [];
      }
      map[tickets[i][0]].push(tickets[i][1]);
    }

    for (const key in map) {
      map[key].sort();
    }

    var reversedStack = [startCity];
    while (reversedStack.length > 0) {
      if (map[reversedStack[0]] && map[reversedStack[0]].length > 0) {
        var destination =  map[reversedStack[0]].shift();
        reversedStack.unshift(destination);
      } else {
        result.unshift(reversedStack[0]);
        reversedStack.shift();
      }
    }

    return result;
  }
}

module.exports = ReconstructItinerary;
