//exporting external modules

// const mod = require('./2-name')
// const sayHi = require('./app')
// require('./4-function_req')
// // sayHi(mod.john)         //since error shows john not defined => define it here
// // sayHi('susie')

//built-in modules:
//os
// const os = require('os')
// const user = os.userInfo()
// console.log(user);
// console.log(`system uptime is ${os.uptime()}`);
// const currentSystem = {
//     name:os.type(),
//     release:os.release(),
//     freemem:os.freemem(),
//     totalmem:os.totalmem()

// }
// console.log(currentSystem);

//fs - synchronous approach - TASKS GET EXEC. LINE-BY-LINE
// const {readFileSync, writeFileSync} = require('fs'); //no need to write const.prop...

// const first = readFileSync('./pompoko/text.txt', 'utf8')   //utf8 is used for encoding
                                                              //else all result will be hexadecimal
// writeFileSync('./pompoko/text1.txt',`here is the result: ${first}`)
// //if no file => create the new one
// //if file already => overwrite contents 

//fs - asynchronous - READ/WRITE IS SKIPPED AND BEFORE + AFTER ARE EXEC. 1ST
// const {readFile, writeFile} = require('fs');
// readFile('./pompoko/text.txt', 'utf-8', (err, result) => { //using different approach
                                                              //involving callbacks
//     if (err) {console.error(err); return;}
//     console.log(result);
// })

//http
const http = require('http');
const server = http.createServer((req, res)=>{
    console.log(req);
    res.write("welcome home")
    res.end()
    
})
server.listen(5000)
