import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";

function Carousel(props) {
  const content = props.content;
  const contentLength = content.length;

  // Bagi Berdasarkan Index Slides
  const [index, setIndex] = useState(0);
  const slide = content[index];

  // Auto Slide
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((prevIndex) => (prevIndex + 1) % contentLength), 3000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(intervalId);
  }, [contentLength]);

  return (
    <div className={`${props.className} h-50vh lg:h-75vh relative`}>
      <Navbar className="bg-brand-primary/50 z-50" />

      <div className="h-full absolute top-0 -z-50">
        {/* CONTENT */}
        <img src={slide.img} alt="Background" className="h-full brightness-50 object-cover" />
        <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full px-1/10 text-center">
          <h1 className="text-light-primary drop-shadow w-1/2">{slide.tittle}</h1>
          <p className="text-light-primary drop-shadow w-3/4 line-clamp-2">{slide.desc}</p>
        </div>

        {/* BUTTON */}
        <div className="px-10 h-full w-full absolute top-0 lg:flex lg:justify-between lg:block hidden">
          <button onClick={() => setIndex((index - 1 + contentLength) % contentLength)}>
            <i className="fa-solid fa-2xl fa-chevron-left text-light-primary/50 hover:text-light-primary"></i>
          </button>
          <button onClick={() => setIndex((index + 1) % contentLength)}>
            <i className="fa-solid fa-2xl fa-chevron-right text-light-primary/50 hover:text-light-primary"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
