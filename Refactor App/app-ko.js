// ----- Local Data Set - Send to Module
const teamData = [
    { 
        teamId: 0,
        teamName: 'Arsenal',
        teamNickname: 'The Gunners',
        teamLogo: 'resource/Arsenal.png', 
        teamPlayers: [
            { id: 0, name: 'Petr Cech', age: 33, number: 33, position: 'G', status: 'reserve' }, 
            { id: 1, name: 'Matthew Macey', age: 21, number: 49, position: 'G', status: 'reserve' }, 
            { id: 2, name: 'David Ospina', age: 27, number: 13, position: 'G', status: 'reserve' }, 
            { id: 3, name: 'Hector Bellerin', age: 21, number: 24, position: 'D', status: 'reserve' }, 
            { id: 4, name: 'Calum Chambers', age: 21, number: 21, position: 'D', status: 'reserve' }, 
            { id: 5, name: 'Kieran Gibbs', age: 26, number: 3, position: 'D', status: 'reserve' }, 
            { id: 6, name: 'Carl Jenkinson', age: 24, number: 25, position: 'D', status: 'reserve' }, 
            { id: 7, name: 'Laurent Koscielny', age: 30, number: 6, position: 'D', status: 'reserve' },
            { id: 8, name: 'Per Mertesacker', age: 31, number: 4, position: 'D', status: 'reserve' }, 
            { id: 9, name: 'Nacho Monreal', age: 30, number: 18, position: 'D', status: 'reserve' }, 
            { id: 10, name: 'Gabriel Paulista', age: 25, number: 5, position: 'D', status: 'reserve' }, 
            { id: 11, name: 'Mikel Arteta', age: 34, number: 8, position: 'M', status: 'reserve' }, 
            { id: 12, name: 'Ismael Bennacer', age: 18, number: 36, position: 'M', status: 'reserve' },
            { id: 13, name: 'Krystian Bielik', age: 18, number: 37, position: 'M', status: 'reserve' }, 
            { id: 14, name: 'Santi Cazorla', age: 31, number: 19, position: 'M', status: 'reserve' }, 
            { id: 15, name: 'Francis Coquelin', age: 24, number: 34, position: 'M', status: 'reserve' }, 
            { id: 16, name: 'Mohamed Elneny', age: 23, number: 35, position: 'M', status: 'reserve' }, 
            { id: 17, name: 'Mathieu Flamini', age: 32, number: 20, position: 'M', status: 'reserve' }, 
            { id: 18, name: 'Serge Gnabry', age: 20, number: 27, position: 'M', status: 'reserve' }, 
            { id: 19, name: 'Alex Iwobi', age: 19, number: 45, position: 'M', status: 'reserve' }, 
            { id: 20, name: 'Alex Oxlade-Chamberlain', age: 22, number: 15, position: 'M', status: 'reserve' }, 
            { id: 21, name: 'Aaron Ramsey', age: 25, number: 16, position: 'M', status: 'reserve' }, 
            { id: 22, name: 'Tomas Rosicky', age: 35, number: 7, position: 'M', status: 'reserve' }, 
            { id: 23, name: 'Ben Sheaf', age: 18, number: 56, position: 'M', status: 'reserve' }, 
            { id: 24, name: 'Chris Willock', age: 18, number: 59, position: 'M', status: 'reserve' }, 
            { id: 25, name: 'Jack Wilshere', age: 24, number: 10, position: 'M',  status: 'reserve' }, 
            { id: 26, name: 'Mesut Ozil', age: 27, number: 11, position: 'M',  status: 'reserve' }, 
            { id: 27, name: 'Joel Campbell', age: 23, number: 28, position: 'F', status: 'reserve' }, 
            { id: 28, name: 'Olivier Giroud', age: 29, number: 12, position: 'F', status: 'reserve' }, 
            { id: 29, name: 'Jeff Reine-Adelaide', age: 18, number: 54, position: 'F', status: 'reserve' }, 
            { id: 30, name: 'Alexis Sanchez', age: 27, number: 17, position: 'F', status: 'reserve' }, 
            { id: 31, name: 'Theo Walcott', age: 27, number: 14, position: 'F', status: 'reserve' }, 
            { id: 32, name: 'Danny Wellbeck', age: 25, number: 23, position: 'F', status: 'reserve' }
        ]
    }, 
    {
        teamId: 1,
        teamName: 'Chelsea',
        teamNickname: 'The Blues',
        teamLogo: 'resource/Chelsea.png',
        teamPlayers: [
            { id: 0, name: 'Chelsea Guy', age: 33, number: 1, position: 'G', status: 'reserve' } 
        ]
    }, 
    { 
        teamId: 2,
        teamName: 'Liverpool',
        teamNickname: 'The Reds', 
        teamLogo: 'resource/Liverpool.png',
        teamPlayers: [
        { id: 0, name: 'Liverpool Guy', age: 33, number: 1, position: 'G', status: 'reserve' }
        ] 
    }, 
    { 
        teamId: 3,
        teamName: 'Manchester City',
        teamNickname: 'The Citizens',
        teamLogo: 'resource/ManCity.png',
        teamPlayers: [
            { id: 0, name: 'ManCity Guy', age: 33, number: 1, position: 'G', status: 'reserve' }
        ]
    }, 
    {
        teamId: 4,
        teamName: 'Manchester United',
        teamNickname: 'The Red Devils',
        teamLogo: 'resource/ManUtd.png',
        teamPlayers: [
            { id: 0, name: 'ManU Guy', age: 33, number: 1, position: 'G', status: 'reserve' }
        ]
    },  
    {
        teamId: 5,
        teamName: 'Tottenham',
        teamNickname: 'The Hotspur',
        teamLogo: 'resource/Tottenham.png',
        teamPlayers: [
            { id: 0, name: 'Spur Guy', age: 33, number: 1, position: 'G', status: 'reserve' }
        ]
    }
];

// ----- Counts in Context of teamData.length
function next(i) {
    if ( i >= 0 && i != teamData.length ){ i++; } else { i = i; }
    console.log("next ->" + i);
    return i;
};
function last(i) {
    if (i == teamData.length || i > 0 ){ i--; } else { i = i; }
    console.log("last ->" + i);
    return i;
};

// ----- Start KO View Model 
function TeamSelectViewModel() {
    //const self = this;
    this.counter = ko.observable(0);
    this.next = function() {
        let current = this.counter();
        this.counter(next(current));
    };
    this.last = function() {
        let current = this.counter();
        this.counter(last(current));
    };
    this.name = ko.computed( function() { 
        let current = this.counter();
        return teamData[current].teamName 
    }, this);
    this.nickname = ko.computed( function() { 
        let current = this.counter();
        return teamData[current].teamNickname
    }, this);
    this.logoSrc = ko.computed( function() { 
        let current = this.counter();
        return teamData[current].teamLogo
    }, this);

}

// Bootstrap Knockout via applyBindings() on 'View Model'
ko.applyBindings(new TeamSelectViewModel());
//console.log(teamData[0].teamName);