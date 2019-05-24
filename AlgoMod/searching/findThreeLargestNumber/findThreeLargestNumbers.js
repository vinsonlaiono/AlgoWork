var findThreeLargestNumbers = (arr) => {
    var repsonse = [null, null, null]
    for(let i=0; i<arr.length;i++){
        if(arr[i]>repsonse[0]) repsonse.push(arr[i]);
    }
    console.log(repsonse)
}
findThreeLargestNumbers([4,2,3,6,6,5,6,7,8]);