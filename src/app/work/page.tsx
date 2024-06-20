import CardPage from '@/components/atoms/Card/Card'
import React from 'react'

const WorkPage = () => {
  return (
    <div className='overflow-y-scroll h-full'>
        <div className='text-center pt-10'>
        <h3 className='h1'>My <span className="text-accent">Projects</span></h3>
        </div>
        <div className='flex justify-center flex-wrap gap-10 xl:p-20'> 
        <CardPage/>
        <CardPage/>
        <CardPage/>
        <CardPage/>
        </div>
    </div>
  )
}

export default WorkPage