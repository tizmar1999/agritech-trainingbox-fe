import React from 'react'
import { image } from '../constants/image'

export default function Camera() {
  return (
    <div className='relative bg-red-500 w-full h-full'>
        <div className='absolute top-0 left-0 w-[130px] h-full bg-black opacity-50'></div>
        <div className='absolute top-0 right-0 w-[130px] h-full bg-black opacity-50'></div>
        <img className='w-full h-full object-cover' src={image}></img>
    </div>
  )
}