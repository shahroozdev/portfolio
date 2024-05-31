'use client'
import Transition from '@/components/molecules/Transition/Transition'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React from 'react'

const TransitionDiv = () => {
    const router:any =useRouter()
  return (
    <AnimatePresence mode='wait'>
        <motion.div key={router}>
            <Transition/>
        </motion.div>
    </AnimatePresence>
  )
}

export default TransitionDiv