// to run this file ->  node 01_basics/variables.js

const accountid=14453  //once the value is assigned we cant change that value
let accountEmail="vinayak@gmail.com"
var accountPassword="12345"
accountcity="dharwad"

console.log(accountid);
console.table([accountid,accountEmail,accountPassword,accountcity]) //to get console data in a table format

// what is the difference between var and let 
// Variables declared by let are only available inside the block where they're defined. 
// Variables declared by var are available throughout the function in which they're declared.
// scope {} ex if(){..}
/*prefer not to use var
because of issue in block scope and functional scope */

//undefined
let name;
