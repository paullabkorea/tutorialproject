s = {100, 200, 300, 400}
ss = {10}
sss = {400, 500}
#print(type(s))
#print(dir(s))
#1. 교집합(&)
print(s & sss)
print(s.intersection(sss))
#2. 합집합(|)
print(s | sss)
print(s.union(sss))
#3. 차집합(-)
print(s - sss)
print(s.difference(sss))
#값의 추가
s.add(1000)
print(s)
#값의 삭제
s.remove(100)
print(s)
#여러개의 값을 추가
s.update({1, 2, 3})
print(s)
