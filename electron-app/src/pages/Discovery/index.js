import React, { useReducer, useMemo, useCallback, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ROUTES from '../../constants/routes'
const Recommend = lazy(() => import('../Discovery/Recommend'))
const SongList = lazy(() => import('../Discovery/SongList'))

const Discovery = () => {

  return (
    <Suspense fallback={null}>
      {/* <div>{`discovery`}</div> */}
      <Recommend></Recommend>
      <Switch>
        <Route exact path={ROUTES.recommend} component={Recommend}></Route>
        <Route exact path={ROUTES.songlist} component={SongList}></Route>
      </Switch>
    </Suspense>
  )
}
export default Discovery
