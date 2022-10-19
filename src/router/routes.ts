import React from 'react'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const Login = React.lazy(() => import('../pages/Login'))


const routes = [
  {
    path: '/',
    exact: true,
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
  },
]

export default routes
