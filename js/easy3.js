const minNum = 1;
const maxNum = 100000000;
const answer = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

while (running){
    
    guess = window.prompt(`Pick a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
}