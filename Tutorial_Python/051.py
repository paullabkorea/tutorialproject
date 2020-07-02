'''
클래스  변수와 인스턴스 변수
'''
#클래스 변수
class  Car(object):
    kinds = []
    def addkinds(self, name):
        self.kinds.append(name)
    maxSpeed = 300
    maxPeople =  5
    def move(self,  x):
        print(x, '의 스피드로 움직이고 있습니다.')
    def stop(self):
        print('멈췄습니다.')

#인스턴스 변수
class  Car(object):
    def addkinds(self, name):
        self.kinds = []
        self.kinds.append(name)
    maxSpeed = 300
    maxPeople =  5
    def move(self,  x):
        print(x, '의 스피드로 움직이고 있습니다.')
    def stop(self):
        print('멈췄습니다.')

k5 = Car()
k3 = Car()
k5.addkinds('k5')
k3.addkinds('k3')
print(k5.kinds)
