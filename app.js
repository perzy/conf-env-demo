var readline = require('readline');
var config = require('conf-env')();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('package name is :', config.name); // read from all.js
console.log('current config env is : ',process.env.NODE_ENV);
console.log('current->',config.current); // read from env
console.log('local ->',config.local); // read from local.js

rl.question("Enter any key to quit ", function(answer) {
  console.log("quiting...", answer);

  rl.close();
});


