result = 0
for i in range(101):
    result += i
print(result)

for i in range(0, 101, 2):
    result += i
print(result)

for i in range(101):
    if i % 2 ==0:
        result += i
print(result)
