#from people import name,age
#from people import *
#import people as p
#import dir1.dir2.people
from . import name , age
from .. import name, age

print(p.name, p.age)

