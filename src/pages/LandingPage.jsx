import React from 'react'
import Carousel from '../component/Carousel'

function LandingPage() {

  // TODO : Buat Tabel News di Database
  const carouselContent = [
    {
      img : "/assets/images/bg/gravityfalls.jpg",
      tittle : "Slide 1",
      desc : "This is Slide 1"
    },
    {
      img : "/assets/images/bg/night.jpg",
      tittle : "Slide 2",
      desc : "This is Slide 2"
    },
    {
      img : "/assets/images/bg/post.jpg",
      tittle : "Slide 3",
      desc : "This is Slide 3"
    },
  ]

  return (
    <>
      <Carousel className="" content={carouselContent}/>
    </>
  )
}

export default LandingPage