class Node{
    constructor(value){
        this.val = value;
        this.next = null;
    }
}

function solution(l1, l2){
    l1Sum = getListSum(l1);
    l2Sum = getListSum(l2);
    
    return l1Sum + l2Sum;
}

function getListSum(list){
    let runner = list;
    let sum = 0;
    while(runner){
        sum = (sum*10) + runner.val;
        runner = runner.next;
    }
    return sum;
}

function reverseNum(num){
    
}

var l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

var l2 = new Node(5)
l2.next = new Node(6)
l2.next.next = new Node(4)

console.log(solution(l1, l2)) // This number needs to be return in reversed order