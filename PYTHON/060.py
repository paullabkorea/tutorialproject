name = ['a', 'b', 'c']
for i, j in enumerate(name, 100):
    print(i, j)

x = [(1, 2, (10, 20)), (3, 4, (30, 40)), (5, 6, (50, 60))]
for (i, j, (k, z)) in x:
    print(i, j, k, z)
