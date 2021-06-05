const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, function (err, test) {
if (err) {
    return console.log(err);
}
const nb = test.toString().split("\n").length - 1;
console.log(nb);
});