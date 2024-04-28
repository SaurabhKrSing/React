import React from 'react';

const CurrentTime = () => {
  let time = new Date();
  return (
    <div className='lead'>
      {time.toLocaleDateString()}, {time.toLocaleTimeString()}
    </div>
  );
};

export default CurrentTime;
