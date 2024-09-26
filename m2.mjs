import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("Vul je geboortejaar in: "));
let toekomstJaar = parseFloat(await userInput.question("Vul in jaar in de toekomst in: "));

console.log(`In ${toekomstJaar} zal je ${toekomstJaar - geboorteJaar} of ${toekomstJaar - geboorteJaar - 1} jaar oud zijn.`);

process.exit();