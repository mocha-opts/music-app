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
        <Route path={ROUTES.recommend} element={Recommend}></Route>
        <Route path={ROUTES.songlist} element={SongList}></Route>
      </Routes>
    </Suspense>
  );
};
export default Discovery;
