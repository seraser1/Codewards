// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.
// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name
// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// Random input limits:
//    6 ≤ Players  ≤ 50
// 5000 ≤ Position ≤ 50000

function duckDuckGoose(players, goose) {
    // ...
    const i = (goose - 1) % players.length;
    return players[i].name
  }



