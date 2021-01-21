const { nouns } = require('./nouns');
const { verbs } = require('./verbs');
const { adjectives } = require('./adjectives');

let randomNumber = arr => {
    return Math.floor(Math.random()*arr.length)
}

const madlib = nome => {
    let noun = nouns[randomNumber(nouns)];
    let verb = verbs[randomNumber(verbs)];
    let adjective = adjectives[randomNumber(adjectives)];
    console.log(`${verb[0].toUpperCase()+verb.substring(1)} ${nome[0].toUpperCase()+nome.substring(1)}, the ${adjective} ${noun}!`);
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Your name please: ', name => {
    madlib(name);
    readline.close();
  });
