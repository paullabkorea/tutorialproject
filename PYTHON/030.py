#함수의 클로저
x = 100
def f():
    x = 10
    def xPlus():
        nonlocal x
        x += 10
        return x
    return xPlus

f1 = f()
f2 = f()
print(f1())
print(f1())
print(f1())
print(f2())
