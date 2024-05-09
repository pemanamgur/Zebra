import React from 'react'

function Home() {
  return (
    <div className=' flex flex-col gap-12  p-8'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-3xl font-bold'>Zebra Zordan </h1>
            <h2 className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, delectus!</h2>
            <p className='text-lg'>Please contact me using the form at the bottom of the page to discuss your event! </p>
            
        </div>
        <div className='flex ' >
        <div >
            <img src="https://static.wixstatic.com/media/593ea9_d35c74fd173c41c2abcff30624ec1f5d~mv2.jpg/v1/fill/w_409,h_347,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_E2012_JPG.jpg" 
           
            alt="" />
        </div>
        <p
        className=''
        
        >
        I make balloon animals with the intention of making a visual spectacle that will impress my own self, and ultimately the guests at your event.
        
        I have been a balloon artist since March 2016, dedicating myself to making it my expertise.
        
        My approach aims to unify details alluding to realism and abstract concepts with cartoon-like aesthetics typical to balloon art, making it a unique experience </p>
    </div>
    <div className='flex'>
       
        <p 
        >
        Formally trained with oil painting technique in 2008, I have adapted to the face paint medium to deliver eye catching variations of popular designs.  

I consciously use high quality, hypo allergenic products, and am willing to tailor the designs I offer to match the theme of your event. 

I look forward to bringing joy to you and your guests!</p>
         <div className=' '>
            <img src="https://static.wixstatic.com/media/593ea9_6d707de105c44526b81901c299d8d603~mv2.jpeg/v1/fill/w_234,h_318,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/593ea9_6d707de105c44526b81901c299d8d603~mv2.jpeg" alt=""
            className=' '
            />
        </div>
    </div>
    </div>
  )
}

export default Home
