// bubblesort

function bubbleSort(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length-i; j++){
            arr[j] > arr[j+1] && swap(arr, j)
        }
    }
    return arr
}

function swap(arr, i){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
}

console.log(bubbleSort([4,10,2,6,5,1,3,9,8,7, 11]))