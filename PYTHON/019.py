x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
y = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for i in x:
    print(i)

print(1 in x)
print(3 in x)
print(5 in x)
print(7 in x)

for i in 'leehojun':
    print(i)
'''
for i in 15:
    print(i)
'''

for i in x:
    for j in y:
        print('{} X {} = {}' .format(i, j, i*j))
