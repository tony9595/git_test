import threading

# 모든 프로그램이 쓰레드 기반인 증거
print(threading.current_thread().name)
print("쓰레드 확인")