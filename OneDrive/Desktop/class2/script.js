const game = {
    team1: 'Bayern Munich',
    gK_1 :  "manuel Never",
    fieldplayers_1 :  [
        "pavard",
        "martinez", 
        "Alaba",
        "Davies",
        "Kinmich",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski",
        "setup"
       
   ],
team2: "Borrussia Dortmound",
 gK_2 :  "Burki",
 fieldplayers_2 :  [
   
    "Schutz",
    "Mummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze"
],

 players1Finals :[
    "Never",
    "pavard",
    "martinez", 
    "Alaba",
    "Davies",
    "Kinmich",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    "Thiago",
    "Coutinho",
    "Perisic"
    
],
    allplayers :[
        [
        "Never",
        "pavard",
        "martinez", 
        "Alaba",
        "Davies",
        "Kinmich",
        "Coman",
        "Muller",
        "Gnarby",
        "Lewandowski"
    ],
    [
        "Burki",
        "Schutz",
        "Mummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
        "perisic"
    ]
],
score: '4:0',
scored:["Lewandwaski", "Gnarty", "Muller" ,"Lewandwaski"],
date: "Nov 9th, 2037",


 odds:{
    team1 : [1,33],
    x : [3,25],
    team2 : [6,5],
  
},
printGoals: function(){
    
    console.log(game.scored[0], 1)
    console.log(game.scored[1], 1)
    console.log(game.scored[2], 1)
    console.log(game.scored[3], 1)
    console.log(game.team1, "is more likely to win the game")
//    if (game.odds.team1 >= game.odds.team2){
//     console.log (game.team1, "wins");
//    }
//    else {
//     console.log (game.team2, "wins");
//    }
}
};


 game.printGoals();



// function findSeven(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toString().includes('7')) {
//             return "Boom!";
//         }
//     }
//     return "There is no 7 in the array.";
// }

// // Example usage:
// const numbers1 = [1, 2, 3, 4, 5, 6, 97, 8, 9];
// const numbers2 = [1, 2, 3, 4, 5, 57, 8, 9];

// console.log(findSeven(numbers1)); // Output: "Boom!"
// console.log(findSeven(numbers2)); // Output: "There is no 7 in the array."
