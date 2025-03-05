import { createBrowserRouter } from "react-router-dom"
import LottoPage from "@/ui/pages/LottoPage"
import MainLayout from "../ui/layouts/mainLayout"
import'bootstrap/dist/css/bootstrap.min.css'
import RspPage from "../ui/pages/RspPage"

const routes=[
  {
  path:"/",
  element:<MainLayout />,
  loader:()=>'로또',
  children:[{
    path:"",
    element:<LottoPage />,
    loader:()=>'로또',
    },
    {
    path:"rsp",
    element:<RspPage/>,
    loader:()=>'가위바위보',
    },
    ],
  },
]

const router = createBrowserRouter(routes)

export {router,routes}