import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <RouterProvider router={router}/>
  //</StrictMode>,
)
