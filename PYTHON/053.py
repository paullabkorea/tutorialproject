class Test:
    def __init__(self, testdata):
        self.data = testdata
    def __sub__(self, other):
        return Test(self.data + other)

x = Test(5)
y = x - 2
print(y.data)
