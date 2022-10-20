import 'bootstrap/dist/css/bootstrap.min.css'
import Header from 'pages/Header'
import PermissionRoute from 'router/PermissionRoute'
import routes from 'router/routes'

import { Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Loading from 'components/Loading'

import './App.scss'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ToastContainer closeOnClick pauseOnHover hideProgressBar autoClose={3000} newestOnTop={false} rtl={false} />
        <Switch>
          <Suspense fallback={<Loading />}>
            <div className="app">
              <Header />
              <Container>
                {routes.map((route, index) => (
                  <PermissionRoute
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                    key={index}
                  />
                ))}
              </Container>
            </div>
          </Suspense>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
