import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    console.log('Desc mount');
  }, []);
  return <div>Description</div>;
};
