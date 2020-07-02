name = 'leehojun'
age = 15
n = 99999999999.99999999999
print('제 이름은 %s 입니다. 제 나이는 %d 입니다.' % (name, age))
print(s % (name, age))
print('제 이름은 {} 입니다. 제 나이는 {} 입니다.' .format(name, age))
print('제 이름은 {0} 입니다. 제 나이는 {0} 입니다.' .format(name, age))
s = '제 이름은 {name} 입니다. 제 나이는 {age}입니다.'
print(s.format(name='hojun', age= 15))
print('{} X {} = {}'.format(2,3,6))
print('{0:4} X {1:4} = {2:4}'.format(2,3,6))
print('{0:<4} X {1:<4} = {2:<4}'.format(2,3,6))
print('{0:.3f}'.format(1/4.0))
print('{0:.4f}'.format(1/4.0))
print('{0:,.3f}'.format(n))
