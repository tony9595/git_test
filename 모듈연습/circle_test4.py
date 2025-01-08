import circle as cc #as를 사용해 모듈명도 변경이 가능하다.

# import numpy as np 데이터 분석에 가장 많이 쓰이는 모듈 2가지지
# import pandas as pd 관습적으로 두가지는 np, pd로 변경해서 사용한다.

r = float(input("반지름 입력 :"))
ar = cc.ar_circle(r)
print("원의 넓이 :",ar)