import React from 'react'
import Testimonial from '../components/Testimonial'
import HomeImage from '../components/HomeImage'

function Home() {
  return (
    <>
    <main>
   <HomeImage />
   <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Paragraph Column (Left on larger screens) */}
        <div className="order-2 md:order-1">
          <p className="text-lg text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum elit non ligula
            molestie, vel aliquet urna ultrices. Sed nec nisi ut arcu eleifend consequat.
          </p>
        </div>

        {/* Image Column (Right on larger screens) */}
        <div className="order-1 md:order-2">
          <img src="https://static.wixstatic.com/media/593ea9_d35c74fd173c41c2abcff30624ec1f5d~mv2.jpg/v1/fill/w_614,h_521,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_E2012_JPG.jpg" alt="Image" className="rounded-lg" />
        </div>

      </div>
    </div>
    <Testimonial />
    </main>
 
   </>
  )
}

export default Home
