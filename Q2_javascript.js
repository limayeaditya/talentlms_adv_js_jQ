var qTeams = {aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
    };
    var sortedQTeams = [];
    for (var team in qTeams){
      sortedQTeams.push([team,qTeams[team]]); 
    }
    
    sortedQTeams.sort(function(a,b){
                  return b[1] - a[1];
                  })
    
    console.log(sortedQTeams)