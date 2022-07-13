import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoPersonOutline, IoNewspaperOutline } from 'react-icons/io5'
import NavLogo from '../public/assets/navLogo.png'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 bg-opacity-80 backdrop-blur-md fixed'>
      {' '}
      <div className='rounded-lg justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            src={NavLogo}
            alt='logo'
            width='90'
            height='75'
            className='cursor-pointer'
        />
      </Link>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a className='text-xl'>
              <IoPersonOutline className='text-primary text-2xl' />
              About
            </a>
          </li>
          <li>
            <a className='text-xl'>
              <IoNewspaperOutline className='text-primary text-2xl' /> Articles
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
