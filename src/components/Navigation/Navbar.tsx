import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage } from '../common/styled'
import { topNavItems } from '.'
import Button from '../Buttons/Button'
import { network } from '.'
import { BiMenu } from 'react-icons/bi';
import { DropdownMenu } from '../Tools/DropdownMenu';
import { RiCloseFill } from 'react-icons/ri';

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div>

      <div className='px-[10vw] py-2 shadow-xl'>

        <div className='float-left pr-[30px] md:pr-0 md:hidden'>
        </div>

        <LogoImage />

        <nav className='flex float-right gap-3 md:gap-5'>
          {topNavItems.map((val, key) => {
            return (
              <div key={key} className='p-3 md:block hidden'>
                <Link to={`${val.to}`}>{val.title}</Link>
              </div>
            )
          })}

          <span onClick={() => setIsMenuOpen(true)} className='duration-300 select-none opacity-90'>
            <Button
              className='!text-inherit'
              variant='secondary'
              title={`${network.symbol} ${network.user.address}`}
            />
          </span>

          {/* <span className='flex justify-center align-baseline'>
            <BiMenu size={33} className='mt-2 p-1 duration-300' onClick={() => setIsMenuOpen(true)} />
          </span> */}

        </nav>

      </div>

      {isMenuOpen && (
        <div
          className='fixed top-0 inset-0 z-50 overflow-y-auto'
        >
          <div className='relative sm:w-[25vw] w-full min-h-screen backdrop-blur bg-inherit/80 p-4 text-inherit shadow-lg duration-300 rounded-r-2xl ease-in-out'>
            <div className='w-[85%]'>
              <h3 className='text-2xl font-bold'></h3>
              <div>
                <DropdownMenu />
              </div>
            </div>

            <button
              className='absolute right-0 top-0 mx-2 my-2 px-2 py-2 border border-slate-500 rounded-full text-inherit text-md hover:bg-slate-800 hover:text-white ease-in-out duration-300'
              onClick={() => setIsMenuOpen(false)}
            >
              <RiCloseFill />
            </button>

            <div className='absolute left-5 bottom-10 animate-bounce md:hidden inline-block text-inherit text-xs'>
              Download Whitepaper | <a className='hover:underline' href='/404' >PDF</a> | <a className='hover:underline' href='/404'>EPUB</a>
            </div>

          </div>

        </div>
      )}

    </div>
    
  )
}

