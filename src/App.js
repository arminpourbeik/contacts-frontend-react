import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Error } from './components'
import 'semantic-ui-css/semantic.min.css'
import routes from './routes'
import { isAuthenticated } from './utils/isAuthenticated'
import './styles/App.scss'

const RenderRoutes = (route) => {
  if (route.needsAuth && !isAuthenticated()) return <Redirect to='/login' />

  document.title = route.title || 'Contacts'

  return (
    <Route
      path={route.path}
      exact={true}
      render={(routeProps) => <route.component {...routeProps} />}
    />
  )
}

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RenderRoutes {...route} key={index} />
        ))}
        <Route path='*' exact>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
