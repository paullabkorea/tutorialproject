l = [100, 200, 300]
t = (100, 200, 300)
print(id(l))
def chage(i):
    print(id(i))
    i[0] = 10000
chage(l)
print(l)
