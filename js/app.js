//Filter Function for Radio Buttons
function filterPlayers(players, comparative) {
    for (var i = 0; i < players.length; i++) {
        // Show it.
        if (players[i].position === comparative) {
            var show = document.getElementById('p-' + players[i].id);
            show.classList.remove('radioHide');
            // Hide it.
        } else {
            var hide = document.getElementById('p-' + players[i].id);
            hide.classList.add('radioHide');
        }
    //console.log(players[i].id);
    }
}
// Highlight Function for Radio Buttons
function highlightPlayers(players, comparative) {
    for (var i = 0; i < players.length; i++) {
        // Highlight it.
        if (players[i].position === comparative) {
            var show = document.getElementById('p-' + players[i].id);
            show.classList.add('highlight');
            // Dont Higlight.
        } else {
            var hide = document.getElementById('p-' + players[i].id);
            hide.classList.remove('highlight');
        }
    //console.log(players[i].id);
    }
}

//// Start Interactions / Window Event
window.addEventListener('load', function () {
    //var players = require('./players');
    //console.log(players);
    
/// Firebase Pull Attempt
    var Firebase = require('firebase');
    var players = new Firebase('https://team-roster.firebaseio.com/players/');
    
    players.on('value', function(viewJSON) {
        console.log(viewJSON.val());
    });
    
    
    var parent = document.getElementById('reserves');
    var form = _.template(document.getElementById('tempRoster').textContent);
    
    console.log(players.id);
    
    for (var i = 0; i < players.length; i++) {
        //console.log(players[i].id);
        
        
        var data = form ({
            player: {
                name: players[i].id.name,
                position: players[i].id.position,
                number: players[i].id.number,
            }
        });
        
    //console.log(data);
    var element = document.createElement('div');
    element.setAttribute('id', 'p-' + players[i].id);
    element.classList.add('footballer');
    element.classList.add('draggable');
    element.innerHTML=data;
    parent.appendChild(element);
    
    }
    $('.footballer').draggable( {
        revert: true,
        cursor: 'crosshair',
    });  
    
    $(".slot").droppable({
        hoverClass: "drop-hover",
        tolerance: 'fit',
        drop: function(event, ui) { 
            //$(this).html(ui.draggable.remove().html());
            $(this).droppable('widget');
            console.log(widget);
            },
        //out: function(event, ui){
            //$(this).droppable('option', 'accept', '.drag-item');
            //} 
    });
    
    
    // Radio Button Interactions
    var g = document.getElementById('goalies');
    g.addEventListener('click', function () {
        highlightPlayers(players, 'G');
    });
    
    var d = document.getElementById('defenders');
    d.addEventListener('click', function () {
        highlightPlayers(players, 'D');
    });

    var m = document.getElementById('midfielders');
    m.addEventListener('click', function () {
        highlightPlayers(players, 'M');
    });
    
    var f = document.getElementById('forwards');
    f.addEventListener('click', function () {
        highlightPlayers(players, 'F');
    });
    /// All Radio For Filter Players 
    /* 
    var all = document.getElementById('all');
    all.addEventListener('click', function () {
        for (var i = 0; i < players.length; i++) {
        var show = document.getElementById('p-' + players[i].id);
            show.classList.remove('radioHide');
        }
    });
    */    
    var all = document.getElementById('all');
    all.addEventListener('click', function () {
        for (var i = 0; i < players.length; i++) {
        var hide = document.getElementById('p-' + players[i].id);
            hide.classList.remove('highlight');
        }
    });
    
    
    // Firebase set code from Form.js
    /*
    
    var fbPlayer = new Firebase('https://team-roster.firebaseio.com/players/' + newPlayer.id);
        fbPlayer.set(newPlayer, function () {
            console.log('New dude added');
    */
    
    /*
    var one = document.getElementById('one');
    $('#one').droppable({
        accept: '.footballer'
    });
    
    var two = document.getElementById('two');
    $('#two').droppable({
        accept: '.footballer'
    });
    
    var three = document.getElementById('three');
    $('#three').droppable({
        accept: '.footballer'
    });
    
    var four = document.getElementById('four');
    $('#four').droppable({
        accept: '.footballer'
    });
    
    var five = document.getElementById('five');
    $('#five').droppable({
        accept: '.footballer'
    });
    
    var six = document.getElementById('six');
    $('#six').droppable({
        accept: '.footballer'
    });
    
    var seven = document.getElementById('seven');
    $('#seven').droppable({
        accept: '.footballer'
    });
    
    var eight = document.getElementById('eight');
    $('#eight').droppable({
        accept: '.footballer'
    });
    
    var nine = document.getElementById('nine');
    $('#nine').droppable({
        accept: '.footballer'
    });
    
    var ten = document.getElementById('ten');
    $('#ten').droppable({
        accept: '.footballer'
    });
    
    var eleven = document.getElementById('eleven');
    $('#eleven').droppable({
        accept: '.footballer'
    });
    */   
});