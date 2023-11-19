const team = {
    _players: [
{firstName: 'Juan',lastName: 'Martinez', age: 30}, 
{firstName: 'Pedro', lastName: 'Gutierrez', age: 19}, 
{firstName: 'Ysla', lastName: 'Gonzalez', age: 24},
],
    _games: [
        {opponent: 'Lions', teamPoints: 110, opponentPoints: 97},
        {opponent: 'Sharks', teamPoints: 230, opponentPoints: 45},
        {opponent: 'Sperm Whales', teamPoints: 100, opponentPoints: 400},
    ],

    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge){
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        }
        this._players.push(player);
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        }
        this._games.push(game);
    }

};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);
