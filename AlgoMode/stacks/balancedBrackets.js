
// (({}())

function balancedBracket(str){
    console.log(str);
    let brackets = {
        "{": 0,
        "(": 0,
        "[": 0,
    };
    for(let i=0; i < str.length; i++){
        if(str[i] === '{' || str[i] === '(' || str[i] === '['){
            brackets[str[i]]++;
        } else {
            if( str[i]==='}') brackets['{']--;
            if( str[i]===')') brackets['(']--;
            if( str[i]===']') brackets['[']--;
        }
    }
    return checkBrackets(brackets);
}

function checkBrackets(brackets){
    if(brackets['{'] === 0 && brackets['['] === 0 && brackets['('] === 0){
        return true;
    }
    return false;
}

console.log(balancedBracket('(())()(({}()))'));
console.log(balancedBracket('('));
console.log(balancedBracket('()'));
console.log(balancedBracket('()()'));
console.log(balancedBracket(')('));