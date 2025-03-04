import { CounterProvider } from "../context/CounterContext"
import AxiosClient from "../pages/AxiosClient"
import AxiosGetPage from "../pages/AxiosGetPage"
import BoardPage from "../pages/BoardPage"
import BootStrapPage from "../pages/BootStrapPage"
import ConditionalPage from "../pages/ConditionalPage"
import ContextNotUsePage from "../pages/ContextNotUsePage"
import ContextUsedPage from "../pages/ContextUsedPage"
import CounterContextPage from "../pages/CounterContextPage"
import CounterPage from "../pages/CounterPage"
import ClassNameUsePage from "../pages/cssPage/ClassNameUsePage"
import InlineStylePage from "../pages/cssPage/InlineStylePage"
import StyledComponentPage from "../pages/cssPage/StyledComponentPage"
import GradeinputPage2 from "../pages/Gradeinput2Page"
import GradeinputPage from "../pages/GradeinputPage"
import HelloPage from "../pages/HelloPage"
import HomePage from "../pages/HomePage"
import InputPage from "../pages/InputPage"
import JSXPage from "../pages/JSXPage"
import ProfilePage from "../pages/ProfilePage"
import PropsPage from "../pages/PropsPage"
import UseEffectPage from "../pages/UseEffectPage"
import UseRef1Page from "../pages/UseRef1Page"
import UseRef2Page from "../pages/UseRef2Page"


// React Routes, Route 사용시 배열로 관리하기
const Routes = [
  {
    path:'/',
    element:<HomePage/>,
    title:'Home',
  },
  {
    path:'/profile',
    element:<ProfilePage/>,
    title:'profile',
  },
  {
    path:'/board',
    element:<BoardPage/>,
    title:'board',
  },
  {
    path:'/hello',
    element:<HelloPage/>,
    title:'hello',
  },
  {
    path:'/Jsx',
    element:<JSXPage/>,
    title:'Jsx문법',
  },
  {
    path:'/conditional',
    element:<ConditionalPage/>,
    title:'조건부렌더링',
  },
  {
    path:'/bootstrap',
    element:<BootStrapPage/>,
    title:'부트스트랩',
  },
  {
    path:'/props',
    element:<PropsPage/>,
    title:'프롭스',
  },
  {
    path:'/usestate',
    element:<CounterPage/>,
    title:'usestate',
  },
  {
    path:'/useEffect',
    element:<UseEffectPage/>,
    title:'useEffect',
  },
  {
    path:'/useref',
    element:<UseRef1Page/>,
    title:'useref-1',
  },
  {
    path:'/useref2',
    element:<UseRef2Page/>,
    title:'useref-2',
  },
  {
    path:'/axiosget',
    element:<AxiosGetPage/>,
    title:'axios-get',
  },
  {
    path:'/axiosclient',
    element:<AxiosClient/>,
    title:'axios-Client',
  },
  {
    path:'/input',
    element:<InputPage/>,
    title:'input',
  },
  {
    path:'/grade',
    element:<GradeinputPage/>,
    title:'성적-input',
  },  
  {
    path:'/grade2',
    element:<GradeinputPage2/>,
    title:'성적-input(다중입력)',
  },
  {
    path:'/styled-css',
    element:<InlineStylePage/>,
    title:'인라인스타일',
  },
  {
    path:'/use-css',
    element:<ClassNameUsePage/>,
    title:'css파일적용',
  },
  {
    path:'/styled',
    element:<StyledComponentPage/>,
    title:'styled-components',
  },
  {
    path:'/contextnotuse',
    element:<ContextNotUsePage/>,
    title:'컨택스트API-사용안함',
  },
  {
    path:'/contextused',
    element:<ContextUsedPage/>,
    title:'컨택스트API-사용',
  },
  {
    path:'/count_context',
    element:
    (<CounterProvider>
    <CounterContextPage/>
    </CounterProvider>),
    title:'컨택스트API-카운터',
  },
]
export default Routes