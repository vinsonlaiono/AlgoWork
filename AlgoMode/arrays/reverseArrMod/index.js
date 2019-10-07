// 


function reverse(arr){
    var start = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === " "){
            var end = i-1;
            while(start<end){
                let temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
            start = i+1;
        }
    }
    return arr
}
console.log(reverse(['c','o','n','d','i','n','g',' ','i','s',' ','f','u','n']))

