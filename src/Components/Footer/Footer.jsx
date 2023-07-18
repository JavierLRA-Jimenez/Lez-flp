import React from 'react'
import {RxTextAlignTop} from 'react-icons/rx'

const footer = () => {
  return (
    <section className='h-[8vh] md:h-[8vh]'>
      <div className='p-5 items-center justify-center flex gap-3 '>
          <a href='#body' className=''><RxTextAlignTop className='bg-gray-500 rounded-full w-30 p-2 flex box-content cursor-pointer'/></a>
          <h1 className='text-sm font-semibold items-center justify-center flex text-gray-200' id='contact'>Lez Official Page | Frontend Developer by Javier Jimenez © 2023 All rights reserved</h1>
      </div>
    </section>
  )
}

export default footer