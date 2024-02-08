import React from 'react'

function Navbar(props) {
  return (
    <div className={`${props.className} z-50 px-10 py-5 flex justify-between items-center`}>
      <h1 className='text-light-primary cursor-pointer'>Logo</h1>
      <button className='flex items-center gap-2 group'>
        <p className='text-light-primary group-hover:text-brand-primary/50'>Login</p>
        <i className="fa-solid fa-right-to-bracket text-light-primary  group-hover:text-brand-primary/50"></i>
      </button>
    </div>
  )
}

export default Navbar