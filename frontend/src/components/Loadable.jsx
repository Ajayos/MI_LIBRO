import React, { Suspense } from 'react';
import Loader from './Loader';

const Loadable = (importFunc) => {
  const Component = React.lazy(importFunc);

  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
