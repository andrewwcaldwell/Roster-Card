/* jslint browser: true */
var players = require('./players');
var Firebase = require('firebase');


function Player(name, age, number, position) {
    this.id = Math.round(Math.random() * 1000);
    this.name = name;
    this.age = age;
    this.number = number;
    this.position = position;
    this.status = 'reserve';
    
    return this;
}

window.addEventListener('load', function () {
    // var players = require('./players');
    var submit = document.getElementById('addButton');
    submit.addEventListener('click', function () {
        //console.log('push it');
        var pName = document.getElementById('playerName').value;
        var pAge = document.getElementById('playerAge').value;
        var pNumber = document.getElementById('playerNumber').value;
        var pPosition = document.getElementById('playerPosition').value;
        var newPlayer = new Player(pName, pAge, pNumber, pPosition);
        console.log(newPlayer);
        
    });

    var currentPlayers = new Firebase('https://team-roster.firebaseio.com/players/' + players[i].id);

/*
// THIS IS THE CODE THAT LOADED THE INITIAL ROSTER INTO FIREBASE
// DO NOT RUN/UNCOMMENT THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for (var i = 0; i < players.length; i++) {
        var newb = new Player(players[i].name, players[i].age, players[i].number, players[i].position);
        var friday = new Firebase('https://team-roster.firebaseio.com/players/' + newb.id);
        friday.set(newb);
    }
*/    
});