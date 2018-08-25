const mrMeeseeks = require('./mrmeeseeks')
const mespeaks = require('./mespeaks.json')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`${mespeaks.greetings[Math.floor(Math.random() * mespeaks.greetings.length)]} (what is your request?) `, (answer) => {
  console.log(mespeaks.responses[Math.floor(Math.random() * mespeaks.responses.length)]);
  mrMeeseeks(answer)
  rl.close();
});
