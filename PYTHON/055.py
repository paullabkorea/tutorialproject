#MRO : 매서드 검색 순서
class One : x = 1
class Two(One) : pass
class Three(One) : x = 2
class Four(Two, Three) : pass

i = Four()
print(i.x)
