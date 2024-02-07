import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon icon={faHome} className='text-brand-primary'/>
        </button>
        <button>
        </button>
      </div>

    </div>
  )
}

export default Carousel