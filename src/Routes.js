import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { include } from 'named-urls'
import { Pato, Nave } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.pato} element={<Pato />} />
        <Route path={routes.nave.new} element={<Nave.NaveNew />} />
        <Route path={routes.nave.all} element={<Nave.NaveMain />} />
      </Switch>
    </BrowserRouter>
  )
}

export const routes = {
  root: '/',

  nave: include('/naves', {
    all: '',
    new: 'new',
  }),

  pato: '/pato',
}

export default Routes
