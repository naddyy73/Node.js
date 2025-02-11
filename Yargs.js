const { alias } = require('yargs');
// First, install yargs with: npm install yargs

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .option('name', {
    alias: 'n',
    type: 'string',
    description: 'Your name',
    demandOption: true, 
  })
  .help()
  .argv;

console.log(`Hello, ${argv.name}!`);
