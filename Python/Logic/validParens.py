string = "(()){}[]"
print(len(string))

def validParens(string):
    plist=[]
    for i in range(len(string)):
        if string[i] == "(" or string[i] == "{" or string[i] == "[":
            plist.append(string[i])
        if string[i] == ")" and plist[len(plist)-1] == "(" or string[i] == "}" and plist[len(plist)-1] == "{" or string[i] == "]" and plist[len(plist)-1] == "[":
            plist.pop()
    if len(plist) == 0:
        return True
    else:
        return False
print(validParens(string))