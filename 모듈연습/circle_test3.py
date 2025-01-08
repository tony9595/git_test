from circle import  ci_circle as cc # 'as ~~' 가져올 함수명을 '~~'로 바꿔서 사용한다.

def ci_circle(r): #import한 함수명이 파일안의 함수명과 같으면 파일속 함수가 실행된다.
    print("hello"+str(r))

print(cc(4))
ci_circle(4)