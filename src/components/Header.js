import React from 'react'
import { logo } from '../constants/image'

export default function Header() {
  return (
    <div className='bg-rtlblue-dark h-[64px] flex items-center justify-start pl-6 space-x-2'>
      <img src={logo} alt='logo'/>
    </div>
  )
}
