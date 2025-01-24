import threading
import time
import pyautogui

def print_numbers():
    for i in range(1,11):
        time.sleep(1)
        print(i)

def print_lerrers():
    for letter in '가나다라마바사아자차카':
        print(letter)
 

thread_gui = threading.Thread(target=print_numbers)
thread_gui.start()
pyautogui.alert('코딩 유치원')


#함수 두개 순차 호출
#print_numbers()
#print_lerrers()

'''
thread1 = threading.Thread(target=print_numbers)
thread2 = threading.Thread(target=print_lerrers)

# 결과물이 달라짐.
# 스레드 프로그램의 결과물.
thread1.start()
thread2.start()
'''   
'''
#파라미터가 있는 함수
def first_thread(num,num2):
    for i in range(num + num2):
        print('+') 

def second_thread(num,num2):
    for i in range(num + num2):
        print('-')

thread_first = threading.Thread(target=first_thread, args=(1,100))
thread_second = threading.Thread(target=second_thread, args=(1,100))

thread_first.start()
thread_second.start()
'''
