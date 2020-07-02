#재귀함수
def f(n):
    if n > 1:
        return n * f(n-1)
    else:
        return 1

print(f(5))
'''
f(5) 5*f(4) f(4)=24
f(4) 4*f(3) f(3)=6
f(3) 3*f(2) f(2)=2
f(2) 2*f(1) f(1)=1
f(1) 1
'''
