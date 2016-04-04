////// Filter Function for Position Buttons //////
function filterPlayers(players, comparative) {
    // Show it.
    if (players.position === comparative) {
        var show = document.getElementById('p-' + players.id);
        show.classList.remove('radioHide');
    // Hide it.
    } else {
        var hide = document.getElementById('p-' + players.id);
        hide.classList.add('radioHide');
    } //<== END
    
} //<== END Flter Function


////// Highlight Function for Position Buttons //////
function highlightPlayers(players, comparative) {
    // Highlight it.
    if (players.position === comparative) {
        var show = document.getElementById('p-' + players.id);
        show.classList.add('highlight');
    // Don't Higlight.
    } else {
        var hide = document.getElementById('p-' + players.id);
        hide.classList.remove('highlight');
    } //<== END
    
} //<== END Highlight Funtion


////// Start Interactions / Window Event //////
window.addEventListener('load', function () {

////// FIREBASE  PUll //////
    var Firebase = require('firebase');
    var request = new Firebase('https://team-roster.firebaseio.com/players');
    
    request.on('child_added', function(viewJSON) {
        var players = viewJSON.val();
        //console.log(players);
        //console.log(players.name);
        var parent = document.getElementById('reserves');
        var form = _.template(document.getElementById('tempRoster').textContent);
        
        //console.log(Object.keys(players));
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
        element.innerHTML = data;
        parent.appendChild(element);
    
        
         ////// Individual Position Button Interactions //////
        var g = document.getElementById('goalies');
        g.addEventListener('click', function () {
            console.log('Goalies Clicked');
            highlightPlayers(players, 'G');
        }); //<== END "G" Listener
    
        var d = document.getElementById('defenders');
        d.addEventListener('click', function () {
            console.log('Defenders Clicked');
            highlightPlayers(players, 'D');
        }); //<== END "D" Listener

        var m = document.getElementById('midfielders');
        m.addEventListener('click', function () {
            console.log('Midfielders Clicked');
            highlightPlayers(players, 'M');
        }); //<== END "M" Listener

        var f = document.getElementById('forwards');
        f.addEventListener('click', function () {
            console.log('Forwards Clicked');
            highlightPlayers(players, 'F');
        }); //<== END "F" Listener
        
        
        ///// "All" Button For Filter Players //////
        /* 
        var all = document.getElementById('all');
        all.addEventListener('click', function () {
            var show = document.getElementById('p-' + players.id);
            show.classList.remove('radioHide');
        });*/ //<== END "All" Listener
                
        
        var all = document.getElementById('all');
        all.addEventListener('click', function () {
            console.log('All Clicked');
            var hide = document.getElementById('p-' + players.id);
            hide.classList.remove('highlight');
        }); //<== END "All" Listener
        var holder = ""
        ////// Drag -n- Drop //////
        $('.footballer').draggable( {
            containment: 'document',
            revert: true,
            cursor: 'crosshair',  
        });//<== END Droppable

        
        ////// Function for Callback to Set Droppables //////
        function populate(slotId, line) {
            $(slotId).droppable({
                hoverClass: 'drop-hover',
                tolerance: 'pointer',
                accept: '.footballer',
                drop: function(event, ui) {
                    console.log();
                    $(this).addClass('FULL');
                    $(this).droppable('option','accept','none');
                    $(this).text('');
                    var dropped = ui.draggable;
                    $(dropped).detach().css({top: -2,left: +10}).appendTo(this);
                
                    var parent = document.getElementById(line)
                    var Num = document.createElement('li');
                    Num.textContent = '#' + players.number;
                    Num.classList.add('bubble');
                    parent.appendChild(Num);
                } //<== END Drop Event Settings
            }) //<== END Droppable
        } //<== END Function for Call Backs
        
////// Function Call Backs to Set the "Field" //////        
        populate('#one', 'line4');
        populate('#two', 'line3');
        populate('#three', 'line3');
        populate('#four', 'line3');
        populate('#five', 'line3');
        populate('#six', 'line2');
        populate('#seven', 'line2');
        populate('#eight', 'line2');
        populate('#nine', 'line2');
        populate('#ten', 'line1');
        populate('#eleven', 'line1');
        
    }); //<== END Firebase "Request"
    
}); //<== END BASE FUNCTION