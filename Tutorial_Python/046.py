a = 13
print(bin(a)) #2진법
print(oct(a)) #8진법
print(hex(a)) #16진법
print(type(bin(a))) #2진법
print(type(oct(a))) #8진법
print(type(hex(a))) #16진법
x = 0b1101
y = 0o15
z = 0xd
print(x, y, z)
print(type(x), y, z)
print(bin(a)[2:].replace('1', '#').replace('0', '!')) #2진법
