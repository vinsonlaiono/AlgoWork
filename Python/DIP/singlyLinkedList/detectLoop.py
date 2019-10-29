from sll import *

list = SLL()
list.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9).add(10)

last.next = list.head.next.next.next.next.next

def detectLoop(list):
    slow = list.head.next
    fast = list.head.next.next
    while slow != fast: 
        slow = slow.next
        fast = fast.next.next
    slow = list.head
    while slow != fast: 
        slow = slow.next
        fast = fast.next.next
    return slow

detectLoop(list) 