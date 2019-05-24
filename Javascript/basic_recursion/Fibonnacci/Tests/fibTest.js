// import { getNthFib } from '../recursiveFibonacci';
const program = require('./recursiveFibonacci')

let runMe = () => {
    if(program.getNthFib(0) == 0) console.log("Test Case #0 pass")
    else console.log("Test 0 fail");
    if(program.getNthFib(1) == 0) console.log("Test Case #1 pass")
    else console.log("Test 1 fail");
    if(program.getNthFib(2) == 1) console.log("Test Case #2 pass")
    else console.log("Test 2 fail");
    if(program.getNthFib(3) == 1) console.log("Test Case #3 pass")
    else console.log("Test 3 fail");
    if(program.getNthFib(4) == 2) console.log("Test Case #4 pass")
    else console.log("Test 4 fail");
    if(program.getNthFib(5) == 3) console.log("Test Case #5 pass")
    else console.log("Test 5 fail");
    if(program.getNthFib(6) == 5) console.log("Test Case #6 pass")
    else console.log("Test 6 fail");
    if(program.getNthFib(7) == 8) console.log("Test Case #7 pass")
    else console.log("Test 7 fail");
    if(program.getNthFib(8) == 13) console.log("Test Case #8 pass")
    else console.log("Test 8 fail");
    if(program.getNthFib(9) == 21) console.log("Test Case #9 pass")
    else console.log("Test 9 fail");
    if(program.getNthFib(10) == 34) console.log("Test Case #10 pass")
    else console.log("Test 10 fail");
    if(program.getNthFib(11) == 55) console.log("Test Case #11 pass")
    else console.log("Test 11 fail");
    if(program.getNthFib(12) == 89) console.log("Test Case #12 pass")
    else console.log("Test 12 fail");
    if(program.getNthFib(13) == 144) console.log("Test Case #13 pass")
    else console.log("Test 13 fail");
    if(program.getNthFib(14) == 233) console.log("Test Case #14 pass")
    else console.log("Test 14 fail");
    if(program.getNthFib(15) == 377) console.log("Test Case #15 pass")
    else console.log("Test 15 fail");
    if(program.getNthFib(16) == 610) console.log("Test Case #16 pass")
    else console.log("Test 16 fail");
    if(program.getNthFib(17) == 987) console.log("Test Case #17 pass")
    else console.log("Test 17 fail");
    if(program.getNthFib(18) == 1597) console.log("Test Case #18 pass")
    else console.log("Test 18 fail");
}

runMe()