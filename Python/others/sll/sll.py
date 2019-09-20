class Node:
    def __init__(self, value):
        self.val = value
        self.next = None
class List:
    def __init__(self):
        self.head = None
        self.tail = None
    def display(self):
        string = ""
        runner = self.head
        while(runner):
            string += str(runner.val) + " "
            runner = runner.next
        return string
    def push(self, val):
        if(self.head == None):
            self.head = Node(val)
        else:
            runner = self.head
            while(runner.next != None):
                runner = runner.next
            runner.next = Node(val)
            tail = runner.next
            self.tail = tail
myList = List()

myList.push(1)
myList.push(2)
myList.push(3)
myList.push(4)
myList.push(5)
myList.push(6)
myList.push(7)

print(myList.display())
print("head: " + str(myList.head.val))
print("tail: " + str(myList.tail.val))