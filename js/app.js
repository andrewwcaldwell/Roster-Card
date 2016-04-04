////// Filter Function for Radio Buttons //////
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
        } //<== END
            //console.log(players[i].id);
    } //<== END Filter For Loop
    
} //<== END Flter Function


////// Highlight Function for Radio Buttons //////
function highlightPlayers(players, comparative) {
    for (var i = 0; i < players.length; i++) {
        // Highlight it.
        if (players[i].position === comparative) {
            var show = document.getElementById('p-' + players[i].id);
            show.classList.add('highlight');
        // Don't Higlight.
        } else {
            var hide = document.getElementById('p-' + players[i].id);
            hide.classList.remove('highlight');
        } //<== END
            //console.log(players[i].id);
    } //<== END Highlight For Loop
    
} //<== END Highlight Funtion


////// Start Interactions / Window Event //////
window.addEventListener('load', function () {

////// FIREBASE  PUll //////
    var Firebase = require('firebase');
    var request = new Firebase('https://team-roster.firebaseio.com/players/');

    request.on('child_added', function(viewJSON) {
        var players = viewJSON.val();
        //console.log(players);
        //console.log(players.name);
        var parent = document.getElementById('reserves');
        var form = _.template(document.getElementById('tempRoster').textContent);
        
        for (var key in players) {
            if (players.hasOwnProperty(key)) {
            //console.log(players[i]);
            //console.log('show me door NO.2');
                var data = form ( {
                    player: {
                        name: players.name,
                        position: players.position,
                        number: players.number,
                    
                    } //<== END Player[i] / Template Object Relationship
                
                }); //<== END HTML Template Structuring Function
            
            ////// DOM MANIPULATION - Create and Append //////
                var element = document.createElement('div');
                element.setAttribute('id', 'p-' + players.id);
                element.classList.add('footballer');
                element.classList.add('draggable');
                element.innerHTML=data;
                parent.appendChild(element);
    
            } //<=== END If Validation of Key
            
        }//<=== END For Loop to Read / Set Firebase Data
        
    }); //<== END Firebase "Request"
               
               
    ////// Drag -n- Drop //////

    $('.footballer').draggable({
        revert: true,
        cursor: 'crosshair',
    }); // <== END Drag Event Settings 
    
    $(".slot").droppable({
        hoverClass: "drop-hover",
        tolerance: 'fit',
        drop: function(event, ui) { 
            //$(this).html(ui.draggable.remove().html());
            $(this).droppable('widget');
            console.log(widget);
            },

    }); // <== END Drop Event Settings 
    
    
    ////// Individual Radio Button Interactions //////
    var g = document.getElementById('goalies');
    g.addEventListener('click', function () {
        highlightPlayers(players, 'G');
    }); //<== END "G" Listener
    
    var d = document.getElementById('defenders');
    d.addEventListener('click', function () {
        highlightPlayers(players, 'D');
    }); //<== END "D" Listener

    var m = document.getElementById('midfielders');
    m.addEventListener('click', function () {
        highlightPlayers(players, 'M');
    }); //<== END "M" Listener

    var f = document.getElementById('forwards');
    f.addEventListener('click', function () {
        highlightPlayers(players, 'F');
    }); //<== END "F" Listener
        
        
    ///// "All" Radio For Filter Players //////
    /* 
    var all = document.getElementById('all');
    all.addEventListener('click', function () {
        for (var i = 0; i < players.length; i++) {
        var show = document.getElementById('p-' + players[i].id);
            show.classList.remove('radioHide');
        } //<== END "All" For Loop
    });*/ //<== END "All" Listener
                
        
    var all = document.getElementById('all');
    all.addEventListener('click', function () {
        for (var i = 0; i < players.length; i++) {
            var hide = document.getElementById('p-' + players[i].id);
            hide.classList.remove('highlight');
        } //<== END "All" For Loop

    }); //<== END "All" Listener
     
});
    
/*///// ALL BULLSHIT BELOW - KEEPING FOR POTENTIAL FUTURE USE //////
    var one = document.getElementById('one');
    $('#one').droppable({
        accept: '.footballer'
    });//<== END
    
    var two = document.getElementById('two');
    $('#two').droppable({
        accept: '.footballer'
    });//<== END
    
    var three = document.getElementById('three');
    $('#three').droppable({
        accept: '.footballer'
    });//<== END
    
    var four = document.getElementById('four');
    $('#four').droppable({
        accept: '.footballer'
    });//<== END
    
    var five = document.getElementById('five');
    $('#five').droppable({
        accept: '.footballer'
    });//<== END
    
    var six = document.getElementById('six');
    $('#six').droppable({
        accept: '.footballer'
    });//<== END
    
    var seven = document.getElementById('seven');
    $('#seven').droppable({
        accept: '.footballer'
    });//<== END
    
    var eight = document.getElementById('eight');
    $('#eight').droppable({
        accept: '.footballer'
    });//<== END
    
    var nine = document.getElementById('nine');
    $('#nine').droppable({
        accept: '.footballer'
    });//<== END
    
    var ten = document.getElementById('ten');
    $('#ten').droppable({
        accept: '.footballer'
    });//<== END
    
    var eleven = document.getElementById('eleven');
    $('#eleven').droppable({
        accept: '.footballer'
    });//<== END
    
*/
