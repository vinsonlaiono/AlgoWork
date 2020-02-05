# construct a tree with letters
class Node:
    def __init__(self, value):
        self.val = value
        self.left = None
        self.right = None

class Tree:
    def __init__(self):
        self.root = None
    def printVals(self):
        q = [self.root]
        res = ""
        count = 0
        while len(q) > 0:
            cur = q.pop(0)
            res += cur.val
            if cur.left:
                q.append(cur.left)
            if cur.right:
                q.append(cur.right)
            res += '\n'
            print(res)
            res = ""
