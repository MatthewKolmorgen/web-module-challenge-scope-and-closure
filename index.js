// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 
 * 1. What is the difference between counter1 and counter2?
counter1 uses it's scope to figure out what it needs to do. counter2 uses a global variable to pass the variable into the function.
 
 * 2. Which of the two uses a closure? How can you tell?
 counter1, it declares count within it's scope so when you run it the count will icrement by 1 each time it's called.
  
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 counter1 would be preferable when you don't want to reset your counter. counter2 would be prefereable when you do want to reset your counter.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}




/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.floor(Math.random()* 3)
  return score
}
console.log(inning());




/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(currentInning, num1){
  let currentScore = {
    home: 0,
    away: 0,
  }
  for(let i = 0; i < num1; i++){
    currentScore.home += currentInning();
    currentScore.away += currentInning();
  }
  return currentScore
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings


and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(currentInning, num1) {
  let currentScore = {
    homeTeam: 0,
    awayTeam: 0,
  }

  for (let i = 0; i < num1; i++) {
    currentScore.homeTeam = currentScore.homeTeam + currentInning();
    currentScore.awayTeam = currentScore.awayTeam + currentInning();
    
    if (i === 0) {
      console.log(`${i+1}st inning: ${currentScore.awayTeam}-${currentScore.homeTeam}`);
    } else if(i === 1) {
      console.log(`${i+1}nd inning: ${currentScore.awayTeam}-${currentScore.homeTeam}`);
    } else if(i === 2) {
      console.log(`${i+1}rd inning: ${currentScore.awayTeam}-${currentScore.homeTeam}`);
    } else {
      console.log(`${i+1}th inning: ${currentScore.awayTeam}-${currentScore.homeTeam}`);
    }
  }
  console.log(`Final Score: ${currentScore.awayTeam} - ${currentScore.homeTeam}`);
  return currentScore
}

console.log(scoreboard(inning, 9));