#max, min, sum
x = [100, 200, 300, 400]
print(max(x))
print(min(x))
print(sum(x))
print('-----')
a = 'ABC' #[1,2,3]
b = 'DEF'
c = 'GHI'
print(list(zip(a, b, c)))
for i in zip(a, b):
    print(i)

def hojun(x):
    return x * 2

print(list(map(hojun, [1, 2, 3])))
print(list(map(hojun, 'ABC')))
print(list(map(lambda x : x ** 2, [1, 2, 3])))
