// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Error from './components/Error'

// Semantic UI css
import 'semantic-ui-css/semantic.min.css'

// Routes
import routes from './routes'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact
            render={(props) => <route.component {...props} />}
          />
        ))}
        {/* Error 404 */}
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
