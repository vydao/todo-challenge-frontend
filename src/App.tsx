
import { Suspense } from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css'
import routes from 'router/routes'
import PermissionRoute from 'router/PermissionRoute'
import Loading from 'components/Loading'
import './App'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
      <ToastContainer closeOnClick pauseOnHover hideProgressBar autoClose={3000} newestOnTop={false} rtl={false} />
      <Switch>
        <Suspense fallback={<Loading />}>
        {routes.map((route, index) => (
          <PermissionRoute
          path={route.path}
          exact={route.exact}
          name={route.name}
          component={route.component}
          key={index}
          />
          ))}
        </Suspense>
      </Switch>
      </BrowserRouter>
      </Suspense>
  )
}

export default App