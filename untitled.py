#!/bin/python
def partition(ar):    
    return ""

m = input()
ar = [4, 5, 3, 7, 2]

def partition(Arr, start, last):
    i = start + 1
    #print "l: ", last
    #j = start + 1
    pivot = Arr[start]
    
    for j in range(start,last+1):
        #print Arr
        if(Arr[j] < pivot):
            Arr[i],Arr[j] = Arr[j],Arr[i]
            #print "Exchange: ", Arr
            i += 1
        #print "I is: ", Arr[i] ," J is: ", Arr[j], "P is: ", pivot
        #print j
    Arr[start], Arr[i-1] = Arr[i-1], Arr[start]
    print "Ar is: ", ar
    return i - 1


def quicksort(Arr, start, last):
    if start < last:
        current_piv = partition(Arr,0,len(Arr)-1)
        quicksort(Arr,start, current_piv-1)
        quicksort(Arr,current_piv + 1, last)
    #print "List is: ", Arr

#quicksort(ar,0,len(ar)-1)
partition(ar,0,len(ar)-1)
#print "List is: ", ar