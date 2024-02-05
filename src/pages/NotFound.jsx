import React from 'react';

function Notfound() {
  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-surface-primary dark:bg-dark-primary`}>
      <h1 className='text-5xl cursor-pointer dark:text-light-primary' onClick={() => setDarkmode(!darkmode)}> 404 </h1>
      <h4 className='dark:text-light-primary'>Page Not Found</h4>
    </div>
  );
}

export default Notfound;
