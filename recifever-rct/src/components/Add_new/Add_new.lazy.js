import React, { lazy, Suspense } from 'react';

const LazyAdd_new = lazy(() => import('./Add_new'));

const Add_new = props => (
  <Suspense fallback={null}>
    <LazyAdd_new {...props} />
  </Suspense>
);

export default Add_new;
