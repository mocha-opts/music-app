import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ROUTES from '../../constants/routes';
const Recommend = lazy(() => import('./RecommendPage'));

const Discovery = () => {
  return (
    <Suspense fallback={null}>
      {/* <div>{`discovery`}</div> */}
      <Recommend></Recommend>
    </Suspense>
  );
};
export default Discovery;
