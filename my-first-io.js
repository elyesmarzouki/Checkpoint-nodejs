const fs = require("fs");

const test = fs.readFileSync(process.argv[2]);
const nb = test.toString().split("\n").length - 1;
console.log(nb);