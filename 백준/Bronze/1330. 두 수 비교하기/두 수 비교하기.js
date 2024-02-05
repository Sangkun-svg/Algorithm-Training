const fs = require("fs");
const [A,B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
if(A < B) console.log("<");
if(A > B) console.log(">");
if(A == B) console.log("==");
