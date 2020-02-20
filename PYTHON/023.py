for i  in range(101):
    if i % 2 == 0:
        continue
    print(i)
    if i > 50:
        break
else:
    print('good job')
