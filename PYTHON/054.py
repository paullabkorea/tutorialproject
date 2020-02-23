class  Car(object):
    maxSpeed = 300
    maxPeople =  5
    def move(self,  x):
        print(x, '의 스피드로 움직이고 있습니다.')
    def stop(self):
        print('멈췄습니다.')

class C1:
    pass

class C2:
    pass

class C3:
    pass

class HyCar(Car, C1, C2, C3):
    battery = 300
    batteryKM = 300

k5 = Car()
hyk5 = HyCar()
print(hyk5.maxSpeed)
