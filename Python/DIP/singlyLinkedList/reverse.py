from sll import *
list = SLL()
list.create(10)

def reverse(list):
    prev = None
    curr = list.head
    while curr != None:
        runner = curr.next
        curr.next = prev
        prev = curr
        curr = runner
    list.head = prev

reverse(list)

list.display()