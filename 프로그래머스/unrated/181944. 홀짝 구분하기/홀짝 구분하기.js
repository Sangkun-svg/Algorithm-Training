const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(Number(input) % 2 === 0 ? input + " is even" : input + " is odd")
}).on('close', function () {
    n = Number(input[0]);
});