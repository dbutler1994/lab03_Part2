/*
Code explained:  fs library is loaded to handle file-system related operations. 
The readFileSync() function is synchronous and blocks execution until finished. 
This function blocks the program until it reads the entire file and then only it proceeds to end the program. 
This is why ::::End of program execution by node.js:::: is printed last. 
*/

var fs = require("fs");
var filedata = fs.readFileSync("myexternal.txt");
console.log(filedata.toString());
console.log(":::::End of program execution by node.js:::::");

console.log("\n");

/*
Explanation: fs library is loaded to handle file-system related operations. 
The readFile() function is asynchronous and control return immediately to the next instruction in the program while the function keeps running in the background. 
A callback function is passed which gets called when the task running in the background are finished.
*/
fs.readFile("myexternal.txt", function(err, fdata){
    if(err){
        return console.error(err);
    }
    console.log(fdata.toString());
})
console.log(":::::Start of program execution by node.js:::::");