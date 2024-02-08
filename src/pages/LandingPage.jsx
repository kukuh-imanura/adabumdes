import React from 'react'
import Carousel from '../component/Carousel'

function LandingPage() {

  // TODO : Buat Tabel News di Database
  const carouselContent = [
    {
      img : "/assets/images/bg/gravityfalls.jpg",
      tittle : "Slide 1",
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero autem, consectetur eaque, deserunt accusamus nostrum nisi voluptate ea, ab alias reprehenderit adipisci ratione ut. Quibusdam tenetur laborum repudiandae tempore recusandae."
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
    <div className=''>
      <Carousel className="" content={carouselContent}/>
    </div>
  )
}

export default LandingPage