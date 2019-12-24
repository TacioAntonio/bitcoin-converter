#!/usr/bin/env node

const program = require('commander');
const packageJSON = require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(packageJSON.version)
  .description('Convert Bitcoint to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Value in Bitcoin to convert. (Default: 1)')
  .parse(process.argv);

convertBTC(program.currency, program.amount);
