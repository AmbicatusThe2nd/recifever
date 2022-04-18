import React, { lazy, Suspense } from 'react';

const LazyRecipe = lazy(() => import('./Recipe'));

const Recipe = props => (
  <Suspense fallback={null}>
    <LazyRecipe {...props} />
  </Suspense>
);

export default Recipe;
