'use client'
import Transition from '@/components/molecules/Transition/Transition'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const template = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AnimatePresence mode='wait'>
    <motion.div>
        <Transition/>
        {children}
    </motion.div>
    </AnimatePresence>
  )
}

export default template