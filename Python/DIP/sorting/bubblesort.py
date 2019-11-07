# bubblesort

def bubblesort(arr):
    isSorted = False
    count = 0
    while not isSorted:
        isSorted = True
        for i in range(len(arr) - 1 - count):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                isSorted = False
        count += 1
    return arr   

print([4,2,3,1,7,4,6,6,6,3,3,5])
print(bubblesort([4,2,3,1,7,4,6,6,6,3,3,5]))
    
