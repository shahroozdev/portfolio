import Image from 'next/image'
import React from 'react'

const BulbAnime = () => {
  return (
    <div className='absolute -left-28 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'><Image src={'/bulb.png'} alt='bulbanime' width={240} height={200} className='w-full h-full'/></div>
  )
}

export default BulbAnime