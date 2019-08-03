function romanToInt(str){
    const romans = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    let num = romans[str[str.length-1]];
    let seq = 0;
    for(var i=str.length-2; i >= 0; i--){
        if(romans[str[i]] === romans[str[i+1]] && seq > 1){
          return "Enter a valid roman numeral"  
        }  else seq++;
        if(romans[str[i]] >= romans[str[i+1]]){
            num += romans[str[i]]
        } else {
            num -= romans[str[i]]
        }
    }
    return num
}