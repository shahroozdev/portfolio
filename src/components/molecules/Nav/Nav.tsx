'use client'
import Icon from '@/components/icons/Icon'
import { navData } from '@/constant/constant'
import { Navbartype } from '@/types/types'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const path = usePathname()
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-88  xl:h-max py-6 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((item:Navbartype, idx:number)=>{

        return( 
          <Link key={idx} href={item?.path} className={`${path===item.path && 'text-accent'} relative flex items-center group  hover:text-accent transition-all duration-300`}>
            <div className='absolute pr-14 right-0 hidden items-center xl:group-hover:flex'>
            <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
            <div className='text-[12px] leading-none font-semibold capitalize'>{item?.name}</div>
            </div>
            <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0  absolute right-[48px]'></div>
            </div>
            <div>
              {item?.icon}
              </div>
            </Link>
        )
      })}

    </div>
    </nav>
  )
}

export default Nav