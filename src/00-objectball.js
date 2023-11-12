function gameObject() {
  const gameStats = {
     home: { 
        teamName: 'Brooklyn Nets', 
          colors: 'black, white', 
            players: { 
                'Alan Anderson': { 
                    number: 0, 
                    shoe: 16,
                    points: 22, 
                    rebounds: 12, 
                    assists: 12, 
                    steals: 3, 
                    blocks: 1, 
                    slamDunks: 1 
                }, 
                'Reggie Evans': { 
                    number: 30, 
                    shoe: 20, 
                    points: 12, 
                    rebounds: 15, 
                    assists: 12,
                    steals: 12, 
                    blocks: 12, 
                    slamDunks: 7 
                }, 
                'Brook Lopez': {
                    number: 11, 
                    shoe: 17, 
                    points: 17, 
                    rebounds: 19, 
                    assists: 10, 
                    steals: 3, 
                    blocks: 1, 
                    slamDunks: 15 
                },
                'Mason Plumlee': { 
                    number: 1, 
                    shoe: 19, 
                    points: 26, 
                    rebounds: 12, 
                    assists: 6, 
                    steals: 3, 
                    blocks: 8,
                    slamDunks: 5 
                }, 
                'Jason Terry': { 
                    number: 31, 
                    shoe: 15, 
                    points: 19, 
                    rebounds: 2, 
                    assists: 2, 
                    steals: 4, 
                    blocks: 11, 
                    slamDunks: 1 
                } 
            } 
        },
        
    away: {
      teamName: 'Charlotte Hornets', 
        colors: 'Turquoise, Purple', 
          players: { 
                'Jeff Adrien': { 
                    number: 4, 
                    shoe: 18, 
                    points: 10, 
                    rebounds: 1, 
                    assists: 1, 
                    steals: 2, 
                    blocks: 7, 
                    slamDunks: 2 
                }, 
                'Bismak Biyombo': {
                    number: 0, 
                    shoe: 16, 
                    points: 12, 
                    rebounds: 4, 
                    assists: 7, 
                    steals: 7, 
                    blocks: 15, 
                    slamDunks: 10 }, 
                'Desagna Diop': {
                    number: 2,
                    shoe: 14, 
                    points: 24, 
                    rebounds: 12, 
                     assists: 12, 
                    steals: 4, 
                     blocks: 5, 
                    slamDunks: 5
                     }, 
                'Ben Gordon': { 
                    number: 8, 
                    shoe: 15, 
                    points: 33, 
                    rebounds: 3, 
                    assists: 2, 
                    steals: 1, 
                    blocks: 1, 
                    slamDunks: 0 
                }, 
                'Brendan Haywood': { 
                    number: 33, 
                    shoe: 15, 
                    points: 6, 
                    rebounds: 12, 
                    assists: 12, 
                    steals: 22, 
                    blocks: 5,
                    slamDunks: 12 } }
        }
    }
    return gameStats;
}

console.log(gameObject())

const homeTeam = gameObject().home
const awayTeam = gameObject().away

const allPlayers = {...homeTeam.players, ...awayTeam.players}

function numPointsScored(playerName) {
    
    console.log(allPlayers)
        for( const player in allPlayers){
            
            if(player === playerName){
                return allPlayers[playerName].points 
            }
            console.log(allPlayers[playerName].points)

        }
    }

function shoeSize(playerName){
   for (const player in allPlayers){
      console.log(player)  
    if(player === playerName){
        console.log(allPlayers[playerName].shoe )
            return allPlayers[playerName].shoe 
        }
    }
 }

shoeSize('Jason Terry')

function teamColors(teamName){
    
    console.log(teamName)

    if(homeTeam.teamName === teamName){
        console.log(homeTeam.colors)
            return homeTeam.colors 
    }
    
    else if(awayTeam.teamName === teamName){
        console.log(awayTeam.colors)
        return awayTeam.colors 
    }
}

teamColors('Brooklyn Nets');

function teamNames(){
 return   [awayTeam.teamName, homeTeam.teamName] 
}

console.log([awayTeam.teamName, homeTeam.teamName])


function playerNumbers(teamName){
    const playerNumbers = []
           if(homeTeam.teamName === teamName){
            for (const playerName in homeTeam.players){
                console.log(homeTeam.players[playerName].number)
                playerNumbers.push(homeTeam.players[playerName].number);
            }
        
            return  playerNumbers
    }
    
    else if(awayTeam.teamName === teamName){
        for (const playerName in awayTeam.players){
        console.log(awayTeam.players[playerName].number)
        playerNumbers.push(awayTeam.players[playerName].number)
         
    }
    return playerNumbers
    }        
}

console.log(playerNumbers('Charlotte Hornets'))

function playerStats(playerName){

    for (const player in allPlayers){
     if(player === playerName){
            return allPlayers[playerName]
        }
    }
}

console.log(playerStats('Brook Lopez'))

function bigShoeRebounds(){
    let playerName = 'Alan Anderson'
        for(const player in allPlayers){
        if(allPlayers[playerName].shoe < allPlayers[player].shoe){
             playerName = player
            }
        }
        return allPlayers[playerName].rebounds
    }

    console.log(bigShoeRebounds())


    function mostPointsScored(){
        let playerName = 'Alan Anderson'
            for(const player in allPlayers){
                if(allPlayers[playerName].points < allPlayers[player].points){
                    playerName = player
                   }
               }
               return allPlayers[playerName].points
   }

   console.log(mostPointsScored());

   function winningTeam(){
    const game = gameObject()
    let teamPoints ={ home: 0, away: 0}
    for(const teamName in game){
        const players = game[teamName].players
        for (const player in players){
            teamPoints[teamName] +=players[player].points
        }  
     }
        if (teamPoints.home > teamPoints.away){
        return game.home.teamName
    }
    else {
        return game.away.teamName
    }
}

console.log(winningTeam());


function playerWithLongestName(){
    let longestName = ''
    for (const player in allPlayers){
      if(player.length > longestName.length){
        longestName = player
        }
    }
    return longestName
}
console.log(playerWithLongestName());

function playerWithMostSteals(){
    const game = gameObject()
    let playerSteals = {name:"" , steals: 0}
     for (const player in allPlayers){
    if(allPlayers[player].steals > playerSteals.steals){
        playerSteals.name = player
        playerSteals.steals = allPlayers[player].steals
        }
    }
        console.log(playerSteals)
        return playerSteals.name
    }

    console.log(playerWithMostSteals());

    function doesLongNameStealATon(){
        let mostSteals = playerWithMostSteals();
        let longName = playerWithLongestName();
       return (longName === mostSteals)
        
    }
    
    console.log(doesLongNameStealATon());
    