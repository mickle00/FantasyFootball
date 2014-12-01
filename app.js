var teamMap = {
  1 : {'Name' : 'SeaSquawks'
      ,'Points' : [87.38, 103.74, 83.40, 65.70, 107.88, 61.52, 64.00, 108.86, 101.76, 118.78, 73.54, 96.98]}
  ,2 : {'Name' : 'Bobs Band o BadAsses'
      ,'Points' : [126.06, 76.16, 96.36, 90.58, 104.52, 98.06, 97.34, 135.96, 126.92, 129.58, 81.48, 119.76]}
  ,3 : {'Name' : 'Giddy Up'
      ,'Points' : [127.84, 107.84, 31.14, 116.92, 71.44, 140.40, 96.86, 147.20, 90.82, 99.60, 78.12, 104.16]}
  ,4 : {'Name' : 'Enter Team Name Here'
      ,'Points' : [67.36, 90.14, 100.48, 130.08, 103.54, 95.96, 110.70, 129.32, 112.10, 131.70, 139.54, 105.16]}
  ,5 : {'Name' : 'Freeze\'s Franchise'
      ,'Points' : [86.74, 129.22, 114.90, 138.72, 133.44, 130.12, 114.02, 149.46, 120.18, 108.64, 132.78, 112.20]}
  ,6 : {'Name' : 'SeaTown Legends'
      ,'Points' : [112.22, 96.54, 93.14, 125.42, 83.04, 52.94, 75.32, 93.32, 85.32, 97.76, 52.72, 132.92]}
  ,7 : {'Name' : 'The Big Duce'
      ,'Points' : [82.12, 55.28, 114.22, 90.22, 86.24, 107.40, 80.26, 99.70, 86.56, 110.98, 68.70, 83.72]}
  ,8 : {'Name' : 'Team Ritzel'
      ,'Points' : [121.14, 97.78, 104.22, 72.04, 88.54, 69.04, 76.52, 87.96, 91.06, 119.98, 96.82, 82.64]}
  ,9 : {'Name' : 'Nice Shirt Hipster'
      ,'Points' : [133.16, 110.68, 100.92, 122.16, 107.76, 117.38, 111.24, 94.54, 99.42, 120.00, 84.26, 107.88]}
 ,10 : {'Name' : 'The Brady Bunch'
      ,'Points' : [51.30, 103.34, 87.90, 107.68, 133.32, 120.82, 121.20, 136.78, 99.32, 77.84, 84.82, 123.84]}
}

var schedules = [
  [2,3,4,5,6,7,8,9,10,2,3,4,5,6]
 ,[1,10,3,4,5,6,7,8,9,1,10,3,4,5]
 ,[9,1,2,10,4,5,6,7,8,9,1,2,10,4]
 ,[8,9,1,2,3,10,5,6,7,8,9,1,2,3]
 ,[7,8,9,1,2,3,4,10,6,7,8,9,1,2]
 ,[10,7,8,9,1,2,3,4,5,10,7,8,9,1]
 ,[5,6,10,8,9,1,2,3,4,5,6,10,8,9]
 ,[4,5,6,7,10,9,1,2,3,4,5,6,7,10]
 ,[3,4,5,6,7,8,10,1,2,3,4,5,6,7]
 ,[6,2,7,3,8,4,9,5,1,6,2,7,3,8]
];

function getWinsByTeamAndSchedule(teamNumber, schedule){
  numberOfWins = 0;
  schedule.forEach(function(opponentNumber, weekNumber){
    var team = teamMap[teamNumber];
    if (teamNumber !== opponentNumber){
      var opponent = teamMap[opponentNumber];
      if (team['Points'][weekNumber] > opponent['Points'][weekNumber]) {
        numberOfWins++;
        console.log('BEAT ' + opponent['Name']);
      }
    }
  });
  console.log(numberOfWins);
  return numberOfWins;
}

function printSchedules(){
  schedules.forEach(function(schedule, index){
    document.write('Schedule ' + index +':\t' + schedule +'<br/>');
  });
}

function printTeams(){
  for (i=1; i<11; i++){
    document.write('Team ' + teamMap[i]['Name'] +':\t' + '<br/>');
    var results = [];
    schedules.forEach(function(schedule, scheduleNumber){
      var result = getWinsByTeamAndSchedule(i, schedule);
      results.push(result);
      document.write('\tSchedule ' + scheduleNumber + ': ' + result + '<br/>');
    });
    document.write('Average: ' + getAverage(results) + '<br/>');
  }
}

function getAverage(elmt){
  var sum = 0;
  for( var i = 0; i < elmt.length; i++ ){
      sum += parseInt( elmt[i], 10 ); //don't forget to add the base
  }

  var avg = sum/elmt.length;
  return avg;

}


