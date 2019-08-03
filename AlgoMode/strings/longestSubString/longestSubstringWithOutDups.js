// Vinson Aiono
// July 28 2019
// Daily Interview Pro
// Time O(n) | Space O(n)
function longestSubStringWithOutDups(s){
    let hash = {};
    let head = 0;
    let tail = 0;
    let res = 0;
    while( head < s.length){
        console.log(head)
        if(hash[s[head]]){
            tail = tail > hash[s[head]] ? tail : hash[s[head]];
            console.log(tail)
        }
        hash[s[head]] = head;
        res = res > head - tail ? res : head - tail;
        head++;
    }
    console.log(hash)
    return res;
}

console.log(longestSubStringWithOutDups('asddfshjuytdll'))
// console.log(longestSubStringWithOutDups('abcdefgabcdef'))