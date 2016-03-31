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
    //element.setAttribute('id', 'draggable');
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