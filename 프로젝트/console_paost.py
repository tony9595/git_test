from random import randint

# 유저 생성
class User:
    # 이용자 수 확인, 유저 회원번호
    count = 0 
    numlist = []

    def __init__(self, id =None):
        self.id = id
        #회원번호 생성.
        while True:
            num = randint(1, 9999)         
            if num not in User.numlist:  # 중복방지
                User.numlist.append(num)
                break
        self.num = num
        User.count += 1
        self.id = id

    def set_id(self):
        while True:
            try:
                self.id = input("사용하실 ID를 입력해주세요. : ")
                print(f"{self.id}님의 방문을 환영합니다.")
                break
            except:
                continue


    def get_userinfo(self):
        info = {self.num:self.id}
        return info

    def __del__(self):
        print(f"{self.id}님의 정보가 삭제되었습니다.")
        User.count -= 1
    
    def __str__(self):
        return f"{self.id}님의 회원번호는{self.num}입니다."
    

class Post(User):
    post_num = 1
    
    def __init__(self,title =None,content=None):
        User.__init__(self)
        self.title = title
        self.content = content
        self.posts =[]

    def memu(self):
        while True:
            print("1.작성  " ,end="")
            print("2.조회  " ,end="")
            print("3.수정  " ,end="")
            print("4.삭제  " ,end="")
            print("5. 종료")
            pic = int(input())
            if pic == 1:
                self.make_post()
            elif pic == 2:
                self.find_post()
            elif pic == 3:
                self.fix_post()
            elif pic == 4:
                while True:
                    delnum = int(input("삭제하실 게시글의 번호를 입력해주세요.")) - 1
                    if delnum < 0 or delnum > len(a.posts)-1:
                        print("잘못 입력하셨습니다. 다시 입력해주세요")
                        continue
                    else:
                        del self.posts[delnum]
                        print(f"{self.posts[delnum][0]}")
                        break
            elif pic == 5:
                break

    
    #생성
    def make_post(self):
        while True:
            try:
                self.title = input(f"[{Post.post_num}번째 게시물] 제목을 입력해주세요 : ")
                break
            except:
                continue

        stop = True
        while stop:
            try:
                print("내용을 입력하고 완료되면 'q'를 눌러주세요. ")
                conten =[]
                total = ''
                while True:
                    i = input()
                    if i.lower() in ['q']:
                        stop =False
                        break
                    else:
                        i_n = i +'\n'
                        conten.append(i_n)
                for i in range(len(conten)):
                    total = total + conten[i]
                self.content = total
            except:
                print("무언가 알수 없는 오류")
                continue                    


        self.posts.append([self.title, self.content])
        Post.post_num += 1


    #수정
    def fix_post(self):
        while True:
            try:
                i = int(input("수정하실 게시물의 번호를 입력해주세요 : "))
                break
            except:
                continue        
        while True:
            try:
                self.title = input("수정하실 제목을 입력해주세요 : ")
                break
            except:
                continue
        stop = True
        while stop:
            try:
                print("내용을 입력하고 완료되면 'q'를 눌러주세요. ")
                conten =[]
                total = ''
                while True:
                    i = input()
                    if i.lower() in ['q']:
                        stop =False
                        break
                    else:
                        i_n = i +'\n'
                        conten.append(i_n)
                for i in range(len(conten)):
                    total = total + conten[i]
                self.content = total
            except:
                print("무언가 알수 없는 오류")
                continue                    
        self.posts[i] = [self.title, self.content]

    
    # 검색
    def find_post(self):
        while True:
            try:
                i = int(input("조회하실 게시물의 번호를 입력해주세요 : "))
                find_num = i-1
                print("게시물 조회합니다.\n")
                if self.posts[find_num]:
                    print(f"제목 : {self.posts[find_num][0]} \n _________내용_________\n\n {self.posts[find_num][1]}")
                elif find_num < 0:
                    print('다시 입력해주세요')
                    continue
                
                ask_re = input("게시물을 더 찾으시겠습니까?[Y/N]")
                if ask_re.upper() in ['N','ㅜ']:
                    print("-프로그램 종료-")
                    break
            except IndexError:
                nofinedask_re = input("찾으시는 게시물이 없습니다.\n종료하시겠습니까?[Y/N]")
                if nofinedask_re.upper() in ['N','ㅜ']:
                    print("-프로그램 종료-")
                    break
                continue    

    def __del__(self):
        pass
           






a = Post()
a.set_id()
print(a)


a.memu()


