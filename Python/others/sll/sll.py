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
            return self
        else:
            runner = self.head
            while(runner.next != None):
                runner = runner.next
            runner.next = Node(val)
            tail = runner.next
            self.tail = tail
            return self
            
    def reverse(self):
        if self.head == None:
            return -1
        else:
            prev = None
            curr = self.head
            while(curr != None):
                runner = curr.next
                curr.next = prev
                prev = curr
                curr = runner
            self.head = prev
            return self
    
myList = List()

myList.push(1).push(2).push(3).push(4).push(5).push(6).push(7)

print(myList.display())
print("head: " + str(myList.head.val))
print("tail: " + str(myList.tail.val))
print("Reverse list: ")
myList.reverse()
print(myList.display())