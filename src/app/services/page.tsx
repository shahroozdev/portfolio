import BottomCircle from '@/components/atoms/BottomCircle/BottomCircle'
import BulbAnime from '@/components/atoms/BulbAnime/BulbAnime'
import ServiceSlider from '@/components/molecules/ServiceSlider/ServiceSlider'
import React from 'react'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
       <BottomCircle />
       <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                <h2 className='h2 xl:mt-8'>My Services<span className='text-accent'>.</span></h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloribus rerum, fugiat optio libero quam maiores cumque laudantium dicta, eum sunt eveniet omnis aspernatur ducimus dolor doloremque! Deserunt, ex harum?
                </p>
            </div>
            <div className='w-full xl:max-w-[65%]'>
            <ServiceSlider/>
            </div>
        </div>
       </div>
       <BulbAnime/>
    </div>
  )
}

export default Services