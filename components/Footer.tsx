import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='footer footer-center p-4 bg-base-100 text-base-content'>
        <div>
          <p>
            Built with{' '}
            <a className='link link-primary' href='https://nextjs.org/'>
              NextJS
            </a>
            ,{' '}
            <a className='link link-primary' href='https://tailwindcss.com/'>
              Tailwind
            </a>
            , and{' '}
            <a className='link link-primary' href='https://daisyui.com/'>
              DaisyUI
            </a>
            . Deployed on{' '}
            <a className='link link-primary' href='https://vercel.com/'>
              Vercel
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
