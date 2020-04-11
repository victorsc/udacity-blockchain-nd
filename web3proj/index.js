// var Web3 = require('web3');

// var url = 'HTTP://127.0.0.1:7545';

// var web3 = new Web3(url);

// web3.eth.getAccounts().then(accounts => console.log(accounts));

/*##########################
CONFIGURATION

##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") ;
var EthereumTransaction = require("ethereumjs-tx").Transaction;
var web3 = new Web3('HTTP://127.0.0.1:7545');

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = "0xeE1FB96e2e8Ab78DFb3CeA001956CC48b5aEDAF0";
var receivingAddress = "0x266c4F2f23934384b07500f2e8b39382F60e23db";

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

/*##########################
CREATE A TRANSACTION

##########################*/
function ascii_2_0xhex(num){
    return "0x" + num.toString(16)
  }
//the receivingAddress is already in the proper format
var rawTransaction = { 
nonce: ascii_2_0xhex(4), 
to: receivingAddress, 
gasPrice: ascii_2_0xhex(20000000), 
gasLimit: ascii_2_0xhex(30000), 
value: ascii_2_0xhex(1000000000000000000), 
data: "0x00" 
}

// -- Step 4: Set up the transaction using the transaction variables as shown 

// -- Step 5: View the raw transaction 
console.log(rawTransaction);

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// Note: They haven't changed because they need to be signed...

/*##########################
Sign the Transaction

##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = '68d831a685dc252a1c9e3d3a964e13ee4f39f7d2954c0c39621e2bd2d15362fc';
var privateKeySenderHex = new Buffer(privateKeySender, 'hex');
var transaction = new EthereumTransaction(rawTransaction);
transaction.sign(privateKeySenderHex);

// /*#########################################
// Send the transaction to the network

// #########################################*/

// // -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);
