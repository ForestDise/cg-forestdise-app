import React from 'react'
import ErrorHeader from '../components/error/ErrorHeader';
import ErrorContent from '../components/error/ErrorContent';

function Error() {
  return (
    <div className="font-bodyFont bg-white">
      <ErrorHeader />
      <ErrorContent />
    </div>
  );
}

export default Error