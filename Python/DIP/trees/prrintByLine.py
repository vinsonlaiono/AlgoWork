from constructTree import *

myList = Tree()

list = Node('a')
list.left = Node('b')
list.right = Node('c')
list.left.left = Node('d')
list.left.right = Node('e')
list.right.left = Node('f')
list.right.right = Node('g')

myList.root = list
# print(list.val)
# print(list.left.val)
# print(list.right.val)
# print(list.left.left.val)
# print(list.left.right.val)
# print(list.right.left.val)
# print(list.right.right.val)

myList.printVals()