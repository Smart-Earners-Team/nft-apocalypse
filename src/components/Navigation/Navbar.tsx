import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage, MenuSwitcher } from '../common/styled'
import { topNavItems } from '.'
import Button from '../Buttons/Button'
import { DropdownMenu } from '../Tools/DropdownMenu'
import { BiMenu } from 'react-icons/bi'
import { RiCloseFill } from 'react-icons/ri'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <>
      <div className='px-[10vw] py-2 shadow-xl'>
        <div className='float-left pr-[30px] md:pr-0 md:hidden'>
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg py-3 px-2">
            <button className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              className="w-[80px] outline-none bg-transparent focus:w-[100px] duration-700"
              placeholder="Search..."
            />
          </div>
        </div>

        <LogoImage />

        <nav className='flex float-right gap-5'>
          {topNavItems.map((val, key) => {
            return (
              <div key={key} className='p-3 md:block hidden'>
                <Link to={`${val.to}`}>{val.title}</Link>
              </div>
            )
          })}

          <span className='flex justify-center align-baseline'>
            <BiMenu size={33} className='mt-2 p-1 opacity-50 hover:opacity-100 duration-300' onClick={() => setIsMenuOpen(true)}/>
          </span>
        </nav>
      </div>
      {isMenuOpen && (
        <div
          className='fixed top-0 inset-0 z-50 overflow-y-auto'
        >
          <div className='relative sm:w-[25vw] w-full min-h-screen backdrop-blur bg-white/75 p-4 shadow-lg duration-300 rounded-r-2xl ease-in-out'>
            <div className='w-[85%]'>
              <h3 className='text-2xl font-bold'></h3>
              <div>
                <DropdownMenu/>
              </div>
            </div>
            <button
              className='absolute right-0 top-0 mx-2 my-2 px-2 py-2 border border-slate-500 rounded-full text-slate-500 text-md hover:bg-slate-800 hover:text-white ease-in-out duration-300'
              onClick={() => setIsMenuOpen(false)}
            >
              <RiCloseFill/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

