import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import WrapperWeb3 from './pages/WrapperWeb3/index.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <WrapperWeb3 />,
  children: [{
    path: '',
    element: <Login />
  }]
}])

export default router
