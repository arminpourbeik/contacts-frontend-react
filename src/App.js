// React router dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Error from './components/Error'

// Semantic UI css
import 'semantic-ui-css/semantic.min.css'

// Routes
import routes from './routes'

// Utils
import { isAuthenticated } from './utils/isAuthenticated'

const RenderRoutes = (route) => {
  if (route.needsAuth && !isAuthenticated()) return <Redirect to='/login' />

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
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
