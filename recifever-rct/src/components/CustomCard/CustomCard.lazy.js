import React, { lazy, Suspense } from 'react';

const LazyCustomCard = lazy(() => import('./CustomCard'));

const CustomCard = props => (
  <Suspense fallback={null}>
    <LazyCustomCard {...props} />
  </Suspense>
);

export default CustomCard;
