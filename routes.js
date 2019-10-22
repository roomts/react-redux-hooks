import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

// import { Container } from './styles';

export default function Routes() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" render={props => <App {...props} />} />
      </Switch>
    </Provider>
  )
}