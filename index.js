function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
// const game = gameObject();
function numPointsScored(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  } else if (game.away.players[playerName]) {
    return game.away.players[playerName].points;
  }
}
console.log(numPointsScored("Alan Anderson"));

//retrieving shoe sizes of players

function shoeSize(playerName) {
  if (gameObject().home.players[playerName]) {
    return gameObject().home.players[playerName].shoe;
  } else if (gameObject().away.players[playerName]) {
    return gameObject().away.players[playerName].shoe;
  }
}
console.log(shoeSize("Ben Gordon"));

//retrieving team colors both home and away teams
function teamColors(teamName) {
  if (teamName === gameObject().home.teamName) {
    return gameObject().home.colors;
  } else if (teamName === gameObject().away.teamName) {
    return gameObject().away.colors;
  }
}
console.log(teamColors("Brooklyn Nets"));

//Retriveing team names
function teamNames() {
  const homeTeam = gameObject().home.teamName;
  const awayTeam = gameObject().away.teamName;
  const teamsArray = [homeTeam, awayTeam];
  return teamsArray;
}
console.log(teamNames());

function playerNumbers(teamName) {
  let teamPlayers = [];
  let game = gameObject();
  if (teamName === game.home.teamName) {
    for (let player in game.home.players) {
      teamPlayers.push(game.home.players[player].number);
    }
  } else if (teamName === game.away.teamName) {
    for (let player in game.away.players) {
      teamPlayers.push(game.away.players[player].number);
    }
  }
  return teamPlayers;
}
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    let playerStats = {};
    const game = gameObject();
    if (game.home.players[playerName]) {
      playerStats = game.home.players[playerName];
    } else if (game.away.players[playerName]) {
      playerStats = game.away.players[playerName];
    }
    return playerStats;
  }
console.log(playerStats("Alan Anderson"));
  
function bigShoeRebounds() {
    let biggestShoeSize = 0;
    let rebounds = 0;
    const game = gameObject();
  
    for (let team in game) {
      for (let player in game[team].players) {
        const shoeSize = game[team].players[player].shoe;
        if (shoeSize > biggestShoeSize) {
          biggestShoeSize = shoeSize;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
  
    return rebounds;
  }
  
  console.log(bigShoeRebounds());
