'use client'
import Icon from '@/components/icons/Icon'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const ProjectBtn = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const styles = {
      position: 'absolute',
      fontSize: '2.25rem',
      transition: 'all 300ms',
      transform: isHovered ? 'translateX(0.5rem)' : 'translateX(0)',
    };
  return (
    <div className='mx-auto xl:mx-0'>
        <Link href={'/work'} className='relative w-[185px] flex justify-center items-center bg-circleStar h-[190px] bg-center bg-cover bg-no-repeat group'>
        <Image src={'/rounded-text.png'} width={141} height={148} alt='' className='animate-spin-slow w-full max-w-[141px] max-h-[148px]'/>
        </Link>
        {/* <Icon name='rightArrowIcon'  style={styles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/> */}
        </div>
  )
}

export default ProjectBtn