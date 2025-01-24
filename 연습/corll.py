a = []
print("글을 입력해주세요. 입력이 완료되면 q를 눌러주세요.")
stop = True
while stop:
    print("입력이 완료되면 q를 눌러주세요.")
    while True:
        i = input() +'\n'
        if i in ['q','Q']:
            stop = False
            break
        else:
            a.append(i)


strings = ''

print(a)
for i in range(len(a)):
    strings = strings + a[i] 
