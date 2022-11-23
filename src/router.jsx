import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import WrapperWeb3 from './pages/WrapperWeb3/index.jsx'
import Dashboard from './pages/Dashboard'
import RequiredAuth from './pages/RequiredAuth'

const router = createBrowserRouter([{
  path: '/',
  element: <WrapperWeb3 />,
  children: [{
    path: '',
    element: <Login />
  },
  {
    path: 'dashboard',
    element: <RequiredAuth><Dashboard /></RequiredAuth>
  }]
}])

export default router
