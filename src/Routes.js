import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { Pato, Nave } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.pato} element={<Pato />} />
        <Route path={routes.nave} element={<Nave />} />
      </Switch>
    </BrowserRouter>
  )
}

export const routes = {
  root: '/',
  nave: '/nave',
  pato: '/pato',
}

export default Routes
