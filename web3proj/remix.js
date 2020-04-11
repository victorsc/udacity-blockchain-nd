var Web3 = require("web3") ;
// var EthereumTransaction = require("ethereumjs-tx").Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545');

web3.eth.getTransactionCount("0xBC1b92Ee316E43333AcEEB88AAd642615D42162c").then(console.log);