import React from 'react';

export default props => {
  // console.log(props);
  return (
    <div>
      <p>{JSON.stringify(props, null, 2)}</p>
    </div>
  );
};
