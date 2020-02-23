x  =  10
def xplus(y):
    y += 10
    return y
x = xplus(x)
print(x)
'''
x  =  10
def xplus():
    global x
    x += 10
xplus()
print(x)
'''
