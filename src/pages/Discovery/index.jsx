import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ROUTES from '../../constants/routes';
const Recommend = lazy(() => import('./Recommend'));
const SongList = lazy(() => import('./SongList'));

const Discovery = () => {
  return (
    <Suspense fallback={null}>
      {/* <div>{`discovery`}</div> */}
      <Recommend></Recommend>
      <Routes>
        <Route exact path={ROUTES.recommend} component={Recommend}></Route>
        <Route exact path={ROUTES.songlist} component={SongList}></Route>
      </Routes>
    </Suspense>
  );
};
export default Discovery;
