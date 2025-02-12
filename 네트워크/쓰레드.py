import threading


class NumbersThread(threading.Thread):
    def __init__(self,n1,n2):
        super().__init__()
        self.n1 =n1
        self.n2 =n2
    
    def run(self):
        for i in range(self.n1,self.n2):
            print(i)

class LettersThread(threading.Thread):
    def __init__(self):
        super().__init__()
    
    def run(self):
        for i in '가나다라마바사아자차':
            print(i)

nt = NumbersThread(1,10)
nl = LettersThread()

nt.start()
nl.start()