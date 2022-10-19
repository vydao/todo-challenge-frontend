import React from 'react'

const HomePage = React.lazy(() => import('../pages/HomePage'))


const routes = [
  {
    path: '/',
    exact: true,
    name: 'HomePage',
    component: HomePage,
  },
]

export default routes
