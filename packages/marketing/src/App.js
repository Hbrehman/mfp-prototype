import { StylesProvider } from '@material-ui/core';
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default function App() {
  return (
    <StylesProvider>
        <BrowserRouter>
        <Switch>
            <Route exact path='/pricing' component={Pricing}/>
            <Route exact path='/' component={Landing} />
        </Switch>
          </BrowserRouter>
    </StylesProvider>
  )
}
