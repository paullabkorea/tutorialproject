file = open('sample.txt', 'r')
'''
file.write('\n')
file.write('helloworld')
file.close()
'''
#print(dir(file))
#print(file.readlines())
#print(file,readline())
#print(file,readline())
print(file.read())
file.close()