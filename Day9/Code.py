# Python Implementation
import time
with open("input") as f:
    content = f.readlines()
content = [int(k.split('\n')[0]) for k in content]


# Part 1
def helper(array, target):
    for i in range(len(array)):
        for j in range(i+1, len(array)):
            if(array[i] + array[j] == target):
                return True
    return False

for i in range(25,len(content)):
    if(not helper(content[i-25:i], content[i])):
        break

ans = content[i]
sum = 0
i=0
j=0
start_time = time.time()
for i in range(0, len(content)-2):
    for j in range(i+1, len(content)-1):
        sum = 0
        for k in range(i,j+1):
            sum += content[k]
        if(sum == ans):
            break
    else:
        continue
    break
end_time = time.time()
print("Part 1: ",ans)
ans = max(content[i:j+1]) + min(content[i:j+1])
print("Part 2: ", ans)
print('completed in ', (end_time - start_time), " s")