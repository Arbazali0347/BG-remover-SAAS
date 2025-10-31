import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={assets.logo} alt="" />

      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        © 2025 <a href="https://arbazali.framer.website" target="_blank" className="underline">arbazali.framer.website</a> | All rights reserved.
      </p>

      <div className='flex gap-2'>
        <a href="https://arbazali.framer.website" target="_blank">
          <img width={40} src={assets.facebook_icon} alt="Facebook" />
        </a>

        <a href="https://linkedin.com/in/arbaz-ali-290917325/" target="_blank">
          <img width={40} src={assets.linkedin_icon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  )
}

export default Footer
