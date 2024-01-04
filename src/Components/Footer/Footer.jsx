import React from 'react'
import { motion } from "framer-motion";


const footer = () => {
  return (
    <motion.div className='h-[4vh] md:h-[4vh]'>
      <div className='p-2 items-center justify-center flex gap-2 '>
          <h1 className='md:text-sm text-xs font-normal items-center justify-center flex text-gray-300 text-center' id='contact'>Lez Official Page | Frontend Developer by Javier Jimenez © 2023 All rights reserved</h1>
      </div>
    </motion.div>
  )
}

export default footer