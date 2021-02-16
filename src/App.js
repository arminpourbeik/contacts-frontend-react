// React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Error from './components/Error'

// Semantic UI CSS
import 'semantic-ui-css/semantic.min.css'

// Routes
import routes from './routes'

// Utils
import { isAuthenticated } from './utils/isAuthenticated'

const RenderRoutes = (route) => {
  if (route.needsAuth && !isAuthenticated()) return <Redirect to='/login' />

  document.title = route.title || 'Contacts'

  return (
    <Route
      path={route.path}
      exact
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
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
