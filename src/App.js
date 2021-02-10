// React router dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App
