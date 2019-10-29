class SLL:
    def __init__(self):
        self.head = None

    def length(self):
        count = 0
        runner = self.head
        while runner:
            count += 1
            runner = runner.next
        return count
    def getLast(self):
        runner = self.head
        while runner.next:
            runner = runner.next
        return runner

    def add(self, value):
        if not self.head:
            self.head = Node(value)
            return self
        else:
            runner = self.head
            while runner.next:
                runner = runner.next
            runner.next = Node(value)
            return self
    def display(self):
        runner = self.head
        while runner:
            print(runner.val)
            runner = runner.next
        return
    def create(self, val):
        values = [int(i) for i in range(2, val+1)]
        self.head = Node(1)
        node = self.head
        for val in values:
            node.next = Node(val)
            node = node.next
        return self

class Node:
    def __init__(self, value):
        self.val = value
        self.next = None

