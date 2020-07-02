'''
현실             code
숫자   ->    class 'int'
문자   ->    class 'str'
자동차  ->   class Car():
'''
class  Car(object):
    maxSpeed = 300
    maxPeople =  5
    def move(self,  x):
        print(x, '의 스피드로 움직이고 있습니다.')
    def stop(self):
        print('멈췄습니다.')

k5 = Car()
k3 = Car()
k5.move(10)
k3.move(5)
k5.stop()
k3.stop()
print(k5.maxSpeed)
print(k3.maxSpeed)
print(type(k5))
print(type(k3))
#print(dir(k5))
#print(dir(k3))
