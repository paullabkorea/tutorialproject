d = {'one':1, 'two':2, 'three':3}
print(type(d))
print(dir(d))

jeju = {'banana':4000}
seoul = jeju.copy()
jeju['banana'] = 6000
print(seoul)
print(jeju)
print(id(seoul))
print(id(jeju))
'''
jeju -> {'banana':6000}
seoul ->{'banana':6000}
'''

print(d.items())
print(d.keys())
print(d.values())

print(d.pop('one'))
print(d)
print(d.update({'five':5}))
print(d)
