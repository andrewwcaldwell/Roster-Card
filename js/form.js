/* jslint browser: true */
//var Firebase = require('firebase');

function Player(name, age, number, position) {
    this.id = 'id'/*How do we do this?*/;
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

    

});