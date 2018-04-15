import React from 'react';

export default props => {
  // console.log(props);
  return (
    <div>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
