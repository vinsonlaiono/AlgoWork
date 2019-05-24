let arr = [1,2,3,4,5];

rotateLeft = (arr, shiftBy) => {
    while(shiftBy > 0){
        let temp = arr[0];
        for(let i=0; i<arr.length; i++){
            arr[i] = arr[i+1]
        }
        arr[arr.length-1] = temp;
        shiftBy--;
    }
    return arr;
};
console.log(rotateLeft(arr, 4));
