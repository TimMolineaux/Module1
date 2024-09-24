import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let name = await userInput.question("Vul jouw naam in: ");
let age = await userInput.question("Vul jouw leeftijd in: ");
let favoriteGame = await userInput.question("Vul jouw favoriete game in: ");

console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');

process.exit();