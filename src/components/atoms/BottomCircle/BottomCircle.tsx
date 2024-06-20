import Image from 'next/image'
import React from 'react'
import circles from '../../../../public/circles.png'

const BottomCircle = () => {
  return (
    <div className='absolute w-[200px] xl:[300px] mix-blend-color-dodge bottom-0 -right-4 animate-pulse duration-75 z-10'>
        <Image src={circles} width={260} height={200} alt='' className='w-full h-full'/>
    </div>
  )
}

export default BottomCircle