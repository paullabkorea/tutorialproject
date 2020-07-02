x = [1, 2, 3, 4, 5, 6, 7, 8, 9]
#range(start:stop:step)
print(list(range(10)))
print(list(range(1, 10, 1)))
print(list(range(0, 10, 2)))
print(list(range(1, 10, 2)))
print(list(range(5, -5, -1)))
print(list(range(10, 20)))
print(type(range(10)))
'''
1. 많은 데이터를 미리 준비하지 않아도 됩니다. 
2. 필요한 시점에만 데이터를 사용합니다.
'''
x = iter(range(10))
print(next(x))
print(next(x))
print(next(x))
