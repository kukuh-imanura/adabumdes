import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

function Carousel(props) {
  return (
    <div className={`${props.class} h-75vh`}>

      {/* CONTENT */}
      <div className={`bg-[${props.img}]`}>
        <h1>{props.tittle}</h1>
        <p>{props.desc}</p>
      </div>

      {/* BUTTON */}
      <div className='px-10 h-full flex justify-between'>
        <button>
          <ChevronLeft size="32px" className='hover:accent-brand-primary'/>
        </button>
        <button>
          <ChevronRight size="32px"/>
        </button>
      </div>

    </div>
  )
}

export default Carousel