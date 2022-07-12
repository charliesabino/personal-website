import React from 'react'
import { GrMail } from 'react-icons/gr'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-neutral'>
        <div className='hero-content text-center'>
          <div className='max-w-lg'>
            <h1 className='text-6xl font-bold'>{"Hey, I'm Charlie."}</h1>
            <p className='text-lg py-6 font-int'>
              {
                "I'm a student-athlete at the University of the Chicago studying economics and computer science."
              }
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/charlie-sabino'
                target='_blank'
                rel='noreferrer'
              >
                <div className='btn-primary rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/charliesabino'
                target='_blank'
                rel='noreferrer'
              >
                <div className='btn-primary rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <Link href='https://twitter.com/charliesabino'>
                <div className='btn-primary rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaTwitter />
                </div>
              </Link>
              <Link href='mailto:sabinocharlie@gmail.com'>
                <div className='btn-primary rounded-full p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <GrMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
