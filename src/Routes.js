import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import { include } from 'named-urls'
import { Pato, Nave, Home } from 'views'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.root} element={<Home />} />
        <Route path={routes.pato} element={<Pato />} />
        <Route path={routes.nave.new} element={<Nave.NaveNew />} />
        <Route path={routes.nave.all} element={<Nave.NaveMain />} />
        <Route path={routes.nave.show} element={<Nave.NaveShow />} />
      </Switch>
    </BrowserRouter>
  )
}

export const routes = {
  root: '/',

  nave: include('/naves', {
    all: '',
    new: 'new',
    show: 'show/:naveId',
  }),

  pato: '/pato',
}

export default Routes
