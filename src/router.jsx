import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import WrapperWeb3 from './pages/WrapperWeb3/index.jsx'
import Me from './pages/Me'
import RequiredAuth from './pages/RequiredAuth'
import loaderRequireAuth from './pages/RequiredAuth/loaderRequiredAuth'
import Profile from './pages/Profile'

const router = createBrowserRouter([{
  path: '/',
  element: <WrapperWeb3 />,
  children: [{
    path: '',
    element: <Login />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: '@me',
    loader: loaderRequireAuth,
    element: (
      <RequiredAuth>
        <Me />
      </RequiredAuth>
    )
  },
  {
    path: 'profile',
    loader: loaderRequireAuth,
    element: (
      <RequiredAuth>
        <Profile />
      </RequiredAuth>
    )
  }]
}])

export default router
