from random import randint
import os

# 유저 생성
class User:
    # 이용자 수 확인, 유저 회원번호
    count = 0 
    user_info = dict()

    def __init__(self, id =None):
        #회원번호 생성.
        while True:
            num = randint(1, 9999)
            user_key = User.user_info.get(num)         
            if user_key == None:  # 중복방지
                self.num = num
                break

        while True:
            try:
                id = input("사용하실 ID를 입력해주세요. : ")
                print(f"{id}님의 방문을 환영합니다. \n[{id}님의 회원번호는 {self.num}입니다.]")
                break
            except Exception as e:
                print("오류 발생",e)

        self.id = id
        User.user_info[num] = id        
        User.count += 1

    def get_userinfo(self):
        return User.user_info[self.num]

    def __del__(self):
        print(f"{self.id}님의 정보가 삭제되었습니다.")
        User.count -= 1
    
    def __str__(self):
        return f"{self.id}님의 회원번호는{self.num}입니다."
    
    

# 게시판
class Post(User):
    post_num = 1
    posts =[]
    coment =[]
    num = 5
    login = False
    
    def __init__(self,title =None,content=None):
        User.__init__(self)
        self.title = title
        self.content = content
        self.pic = None
        self.unum = None
    
    # 회원 확인.
    def check(self):
        while True:
            try:
                cek_log_na = input("사용자 이름을 입력해주세요. : ")
                cek_log_nu = int(input("사용자의 회원번호를 입력해주세요. : "))
                use_cek = User.user_info.get(cek_log_nu)
                if use_cek != None:
                    if use_cek == cek_log_na:
                        print(f"{use_cek}님 환영합니다.")
                        self.unum = cek_log_nu
                        Post.login = True
                        break
                    elif use_cek != cek_log_na:
                        print("사용자님의 이름이 다릅니다 다시 확인해주세요.")
                        continue
                else:
                    print("사용자님의 회원번호가 다릅니다. 다시 확인해주세요.")
                    continue
            except:
                print('잘못된 입력입니다. 다시입력해주세요.')
                continue


    def menu(self):
        self.check()
        os.system('cls')
        while Post.login:
            os.system('cls')
            print("1.작성  " ,end="")
            print("2.조회  " ,end="")
            print("3.수정  " ,end="")
            print("4.삭제  " ,end="")
            print("5. 종료\n")
            print("_________________게시물_________________")
            self.view_post()
            print(f"________________(</{int(Post.num/5)}/>)_________________")
            self.pic = input("명령 입력 : ")

            if self.pic in ['1','2','3','4','5']:
                self.pic = int(self.pic)
            else:
                pass
            if self.pic == 1:
                os.system('cls')
                self.make_post()
            elif self.pic == 2:
                self.find_post()
            elif self.pic == 3:
                self.fix_post()
            elif self.pic == 4:
                while True:
                    try:
                        delnum = int(input("삭제하실 게시글의 번호를 입력해주세요."))
                        delnum -= 1
                    except ValueError:
                        print('잘못된 접근입니다.')
                        break
                    if self.unum != Post.posts[delnum]['user']:
                        print("수정 권한이 없습니다.")
                        break 
                    elif delnum < 0 or delnum > len(Post.posts):
                        print("잘못 입력하셨습니다. 다시 입력해주세요")
                        continue
                    else:
                        # 댓글 삭제
                        self.del_coment(delnum)
                        # 게시글 삭제
                        del Post.posts[delnum]
                        delnum = None
                        break
            elif self.pic == 5:
                os.system('cls')
                print("프로그램을 종료합니다.")
                break


    
    # 게시글 생성
    def make_post(self):
        while True:
            try:
                self.title = input(f"[{Post.post_num}번째 게시물] 제목을 입력해주세요 : ")
                break
            except:
                continue
        num = 1
        stop = True
        conten = []
        while stop:
            try:
                print("내용을 입력하고 완료되면 'q'를 눌러주세요. ")
                while True:
                    con_dic = {}
                    i = input()
                    if i.lower() in ['q']:
                        stop =False
                        break
                    else:
                        con_dic['id'] = num
                        con_dic['con'] = i
                        con_dic['done']=False
                        conten.append(con_dic)
                        num +=1
                os.system('cls')
            except Exception as e:
                print("오류 발생",e)
                continue                    
        Post.posts.append({'id':Post.post_num,'title':self.title, 'content':conten, 'user': self.unum})
        Post.post_num += 1

    #게시글 수정
    def fix_post(self):
        while True:
            stop = True
            try:
                fix_num = int(input("수정하실 게시물의 번호를 입력해주세요 : ")) - 1
                if self.unum != Post.posts[fix_num]['user']:
                    print("========================================")
                    print("          수정  권한이 없습니다.          ")
                    print("========================================")
                    stop =False
                    break
                elif fix_num > len(Post.posts):
                    print("========================================")
                    print("         해당 게시물이 없습니다.          ")
                    print("========================================")
                    continue
                break
            except:
                continue        
        while stop:
            try:
                os.system('cls')
                self.title = input("수정하실 제목을 입력해주세요 : ")
                break
            except:
                continue
        conten = []
        con_dic = {}
        num = 1
        while stop:
            try:
                print("내용을 입력하고 완료되면 'q'를 눌러주세요. ")
                
                while True:
                    i = input()
                    if i.lower() in ['q']:
                        stop =False
                        break
                    else:
                        con_dic['id'] = num
                        con_dic['con'] = i
                        con_dic['done']=False
                        conten.append(con_dic)
                        self.coment = conten
                        num +=1
            except Exception as e:
                print("오류 발생",e)
                continue
        self.content = conten
        if not(stop):
            Post.posts[fix_num]['title'] = self.title
            Post.posts[fix_num]['content'] = self.content
            os.system('cls')
    
    # 조회
    def find_post(self,i=None):
        stop = True
        while stop:
            try:
                i = int(input("조회하실 게시물의 번호를 입력해주세요 : "))
                os.system('cls')
                find_num = i-1
                print("게시물 조회합니다.\n")
                while True:
                    if Post.posts[find_num]:
                        print(f"제목 : {Post.posts[find_num]['title']} \n _______________내용_________________ ")
                        for item in Post.posts[find_num]['content']:
                            if item['done'] is True:
                               print(f"{item['id']}. {item['con']}\t\t[O]")
                            else:
                                print(f"{item['id']}. {item['con']}\t\t[X]")
                        if [coment_i['id'] for coment_i in Post.coment if coment_i['id'] == Post.posts[find_num]['id']]:
                            print('_____________________________________')
                            self.show_coment(i)
                    elif find_num < 0:
                        print('다시 입력해주세요')
                        continue
                    print('_____________________________________')
                    ask_re = input("댓글작성 \t종료[Y] \t 완료[DO]\n >")
                    if ask_re.upper() in ['Y','ㅛ']:
                        print("-검색 종료-")
                        stop = False
                        break
                    elif ask_re.upper() in ['DO']:
                        self.ck_do(find_num)
                    else:
                        self.make_coment(i,ask_re)
            except ValueError:
                print("잘못된 입력입니다.")
                continue
            except IndexError:
                nofinedask_re = input("찾으시는 게시물이 없습니다.\n종료하시겠습니까?[Y/N]")
                if nofinedask_re.upper() in ['Y','ㅛ']:
                    print("-검색 종료-")
                    stop = False
                continue    
        
    # 게시물 표시
    def view_post(self):
        if self.pic == None:
            pass
        elif (self.pic == '<' and Post.num-5 < 5) or (self.pic == '>' and Post.num >= len(Post.posts)):
            print("========================================")
            print("           범위를 초과했습니다.           ")
            print("========================================")
        elif self.pic == '<' and Post.num >= 10:
            Post.num = Post.num-5
        elif self.pic == '>' and Post.num < len(Post.posts):
            Post.num = Post.num+5

        for i in range(Post.num-5,Post.num):
            if i < len(Post.posts):
                if i < 9:
                    print(f"0{i+1}. 제목 : {Post.posts[i]['title']}  작성자 : <{User.user_info[Post.posts[i]['user']]}>")
                else:
                    print(f"{i+1}. 제목 : {Post.posts[i]['title']}  작성자 : <{User.user_info[Post.posts[i]['user']]}>")
            elif i >= len(Post.posts):
                if i < 9:
                    print(f"0{i+1}. 등록된 게시물이 없습둥")
                else:
                    print(f"{i+1}. 등록된 게시물이 없습둥")

        #댓글 생성
    def make_coment(self, num, coment = None):
        pos_id = Post.posts[num-1]['id']
        while True:
            if coment == None:
                try:
                    coment = input("댓글을 입력해주세요 : ")
                    break
                except Exception as e:
                    print("오류 발생",e)
                    continue
            else:
                Post.coment.append({'id':pos_id, 'coment':coment, 'user': self.unum})
                os.system('cls')
                break

    #댓글 조회
    def show_coment(self, num):
        num -= 1
        for item in list(Post.coment):
            if item['id'] == Post.posts[num]['id']:
                print(f"{User.user_info[item['user']]} : {item['coment']}")

    #댓글 삭제
    def del_coment(self, num):
        pos_id = Post.posts[num]['id']
        Post.coment = [item for item in Post.coment if item['id'] != pos_id]
    
    # 완료처리
    def ck_do(self,num):
        while True:
            try:
                do = int(input("완료한 일정의 번호를 입력해주세요\n>"))
                for item in Post.posts[num]['content']:
                    if item['id'] == do:
                        item['done'] = True
                ag = input("더 입력하시겠습니까?[Y/N]")
                if ag.upper() in ['N']:
                    break
                else:
                    continue
            except Exception as e:
                print("오류 발생",e)


        

    def __del__(self):
        pass
           



a = Post()
a.menu()

