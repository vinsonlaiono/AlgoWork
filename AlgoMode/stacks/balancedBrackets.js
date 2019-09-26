
// (({}()))

function balancedBracket(str){
    console.log(str);
    let brackets = {};
    for(let i=0; i < str.length; i++){
        if(str[i] in brackets){
            brackets[str[i]]++;
        } else {
            brackets[str[i]] = 1;
        }
        if(str[i] === '}'){brackets['{']--;}
        if(str[i] === ')'){brackets['(']--;}
        if(str[i] === ']'){brackets['[']--;}
    }
    if(brackets['}'] === 0 || brackets['['] === 0 || brackets['('] === 0){
        return true;
    }
    return false;
}

console.log(balancedBracket('(({}()))('));