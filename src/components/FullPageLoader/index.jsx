import React from 'react'
import Spinner from '../Spinner';

const FullPageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default FullPageLoader