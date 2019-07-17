let removeParens = function (s) {
    let str = s.split('');
    console.log(str)
    let start = -1;
    let open = 0;
    let close = 0;
    for (let i = 0; i < str.length; i++) {
        if(open == 0 && close == 0){
            
        }
        while(open !== close){

            if (str[i] == "(") {
                if (start < 0) start = i;
                open++;
            } else {
                close++;
                end = i;
            }
            console.log(open, close, start)
        }
        
    }
    console.log("Open: " + open);
    console.log("Close: " + close);
}

removeParens("(()())(())");