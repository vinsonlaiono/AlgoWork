// July 2019
// Vinson Aiono

// Given a string of parenthesis characters, build a function 
// to remove outer most parenthesis

// Time O(n) | Space 0(1)
function removeOuterParens(S){
    let counter = 0;
    let temp = "";
    for( let c of S){
        c === '(' ? counter++ : counter--
        if(counter === 1 && c === '(' || counter === 0 && c === ')') continue;
        temp += c;
    }
    return temp;
}

console.log(removeOuterParens("(()())(())"));
console.log(removeOuterParens("()()(())(((())))))))()()"));
console.log(removeOuterParens("(())(())()()((()))()()(())"));
console.log(removeOuterParens("((()()))"));
console.log(removeOuterParens(")()("));//needs refactoring for this edge case