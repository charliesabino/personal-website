import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='navbar bg-neutral bg-opacity-80 fixed'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
            <a className='normal-case text-xl'>Charlie Sabino</a>
          </Link>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
