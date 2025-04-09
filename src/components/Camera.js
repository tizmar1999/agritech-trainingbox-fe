import React from 'react'

export default function Camera({streamedImage}) {

  return (
    <div className='relative w-full h-full'>
        <img className='w-full h-full object-contain' src={streamedImage} alt='realtime-camera'></img>
    </div>
  )
}