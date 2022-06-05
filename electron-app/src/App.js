import React, { useReducer, useMemo, useCallback, lazy, Suspense } from 'react'
import request from './utils/request'
import { GlobalStyle } from './style'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { IconStyle } from './assets/font/iconfont'
import Layout from './components/Layout'
import ROUTES from './constants/routes'

const Discovery = lazy(() => import('./pages/Discovery'))
const Videos = lazy(() => import('./pages/Videos'))

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      <Layout>
        <Suspense fallback={null}>
          <Switch>
            <Route path={ROUTES.discovery} component={Discovery} />
            <Route path={ROUTES.videos} component={Videos} />
            <Redirect from={ROUTES.root} to={ROUTES.defaultRoute} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
