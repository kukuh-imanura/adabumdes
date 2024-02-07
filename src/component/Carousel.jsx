import React, { useEffect, useState } from 'react'

function Carousel(props) {

  const content = props.content
  const contentLength = content.length

  // Bagi Berdasarkan Index Slides
  const [index, setIndex] = useState(0)
  const slide = content[index]

  // Auto Slide
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentLength);
    }, 3000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className={`${props.className} h-50vh lg:h-75vh relative`}>

      {/* CONTENT */}
      <img src={slide.img} alt='Background' className='h-full brightness-50 object-cover' />
      <div className='absolute bottom-1/10 lg:bottom-1/5 left-1/10'>
        <h1 className='text-light-primary drop-shadow'>{slide.tittle}</h1>
        <p className='text-light-primary drop-shadow'>{slide.desc}</p>
      </div>

      {/* BUTTON */}
      <div className='px-10 h-full w-full absolute top-0 lg:flex lg:justify-between lg:block hidden'>
        <button onClick={() => (setIndex((index - 1 + contentLength) % contentLength))}>
          <i className='fa-solid fa-2xl fa-chevron-left text-light-primary/50 hover:text-light-primary'></i>
        </button>
        <button onClick={() => (setIndex((index + 1) % contentLength))}>
          <i className='fa-solid fa-2xl fa-chevron-right text-light-primary/50 hover:text-light-primary'></i>
        </button>
      </div>

    </div>
  );
}

export default Carousel