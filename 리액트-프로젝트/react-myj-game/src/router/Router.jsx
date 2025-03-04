import { createBrowserRouter } from "react-router-dom"
import LottoPage from "@/ui/pages/LottoPage"
import MainLayout from "../ui/layouts/mainLayout"
import'bootstrap/dist/css/bootstrap.min.css'

const routes=[
  {
  path:"/",
  element:<MainLayout />,
  loader:()=>'로또',
  children:[{
    path:"/",
    element:<LottoPage />,
    loader:()=>'로또',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export {router,routes}