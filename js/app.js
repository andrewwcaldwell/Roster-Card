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

window.addEventListener('load', function () {
    var players = require('./players');
    //console.log(players);
    
    var parent = document.getElementById('reserves');
    var form = _.template(document.getElementById('tempRoster').textContent);
    
    for (var i = 0; i < players.length; i++) {
        var data = form ({
            player: {
                name: players[i].name,
                position: players[i].position,
                number: players[i].number,
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
        containment: 'document',
        revert: true,
        cursor: 'crosshair',
        //snap: true,
        //snapMode: inner,
    });  
    
    $('.slot').droppable({
        hoverClass: 'drop-hover',
        tolerance: 'pointer',
        drop: function(event, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);
            $(droppedOn).text('');
            $(dropped).detach().css({top: 0,left: 0, 'z-index': 1}).appendTo(droppedOn);
        },
        
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