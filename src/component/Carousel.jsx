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
      <Navbar className="w-full absolute top-0" />

      <img src={slide.img} alt="Background" className="h-full w-full brightness-50 object-cover" />

      <div className="h-full w-full absolute top-0 flex items-center justify-around">
        <button onClick={() => setIndex((index - 1 + contentLength) % contentLength)}>
          <i className="fa-solid fa-2xl fa-chevron-left text-light-primary/10 hover:text-light-primary"></i>
        </button>

        {/* CONTENT */}
        <div className="text-center w-1/2">
          <h2 className="text-light-primary drop-shadow lg:text-h1">{slide.tittle}</h2>
          <p className="text-light-primary drop-shadow line-clamp-2">{slide.desc}</p>
          <button className="bg-brand-primary/50 hover:bg-brand-primary/40 px-3 py-2 mt-3 rounded-lg text-light-primary">Read More</button>
        </div>

        <button onClick={() => setIndex((index + 1) % contentLength)}>
          <i className="fa-solid fa-2xl fa-chevron-right text-light-primary/10 hover:text-light-primary"></i>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
