import TransitionDiv from '@/components/molecules/Transition/transitionDiv'
import React, { ReactNode } from 'react'

const TransitionProvider = ({children}:{children:ReactNode}) => {
  return (
    <>
        <TransitionDiv/>
        {children}
    </>
  )
}

export default TransitionProvider