var prompt = require('prompt-sync')();

var userQuestion = prompt("What  is  your question? ");
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ['Definitely', "Don't count on it", "The signs point to no", "The signs point to yes", "Signs are unclear, try again", "It is decidedly so", "Cannot predict now", 'Outlook not so good'];

console.log(userQuestion);
console.log(eightBall[randomNumber]);