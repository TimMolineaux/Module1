import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question("Vul het aantal dagen in: "));
let uren = parseFloat(await userInput.question("Vul het aantal uren in: "));
let minuten = parseFloat(await userInput.question("Vul het aantal minuten in: "));
let seconden = parseFloat(await userInput.question("Vul het aantal seconden in: "));

console.log(`Totaal aantal seconden: ${dagen * 86400 + uren * 3600 + minuten * 60 + seconden}`);

process.exit();