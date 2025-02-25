import BoardPage from "../pages/BoardPage"
import BootStrapPage from "../pages/BootStrapPage"
import ConditionalPage from "../pages/ConditionalPage"
import CounterPage from "../pages/CounterPage"
import HelloPage from "../pages/HelloPage"
import HomePage from "../pages/HomePage"
import JSXPage from "../pages/JSXPage"
import ProfilePage from "../pages/ProfilePage"
import PropsPage from "../pages/PropsPage"


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
]
export default Routes