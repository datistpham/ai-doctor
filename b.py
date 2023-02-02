n= int(input())

a= list(map(int, input().split()))
max_sum= 0
for i in range(0, n):
    turn= 1
    max_temp= 0
    for j in range(i, n):
        if turn%2== 1:
            if(j==i):
                max_temp+= a[j]
            elif(j <= n - 1):
                max_temp+= a[j+1]
            turn+=1
        else:
            is_has= False
            for k in range(j,n):
                if(a[k]== a[j-1]):
                    j= k+ 1
                    is_has= True
                    max_temp+= a[k]
                    turn+= 1
                    break
            if is_has== False:
                break
        j+=1        
    max_sum= max(max_temp, max_sum)       

print(max_sum)