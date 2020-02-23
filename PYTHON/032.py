#리스트 기초
l = [100, 200, 300, 400]
print(l[0])
#print(자료형[index]) <- indexing
print(l[0:2])
#print(자료형[start:stop:step]) <- slicing
l[0] = 1000
print(l)
l[0:2] = [3000, 3000]
print(l)
print(l[::-1])
print(l + l)
print(l * 3)
del l[0]
print(l)
l[0:1] = []
print(l)
