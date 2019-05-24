function ListNode(value){
    this.val = value;
    this.next = null;
}

l1 = new ListNode(1)
l1.next = new ListNode(7)
l1.next.next = new ListNode(9)

l2 = new ListNode(3)
l2.next = new ListNode(6)
l2.next.next = new ListNode(2)

var reverse = function(n, z){
    let ans = 0;
    let len = n.toString().length
    let runner = z
    // console.log(runner)
    while(n){
        let temp = n%10;
        runner.val = temp;
        runner.next = new ListNode(temp)
        runner = runner.next;
        ans +=  temp * Math.pow(10, len-1);
        len--;
        n = Math.floor(n / 10);
    }
    // console.log(ans)
    return z;
}

var add = (arr) => {
    var tempLen = arr.length;
    var sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i] * Math.pow(10, tempLen-(i+1))
    }
    return sum
}

var addTwoNumbers = (l1, l2) => {
    let runner1 = l1;
    let runner2 = l2;
    arr1 = [];
    arr2 = [];
    while(runner1){
        arr1.push(runner1.val)
        arr2.push(runner2.val)
        runner1 = runner1.next;
        runner2 = runner2.next;
    }
    
    let a = add(arr1);
    let b = add(arr2);
    let z = new ListNode();
    let rev = reverse(a+b, z)
    return rev
}

let print = (list) => {
    if(!list){
        console.log("List is empty")
    } else {
        let runner = list
        while(runner) {
            console.log(runner.val)
            runner = runner.next
        }
    }
}

print(addTwoNumbers(l1, l2))

console.log("Answer: ", addTwoNumbers(l1, l2))

m = new ListNode()

if(m.val != null){
    console.log("This is true")
}