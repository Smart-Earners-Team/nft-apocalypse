import * as React from 'react'
import { Link } from 'gatsby'
import { LogoImage, MenuSwitcher } from '../common/styled'
import { topNavItems } from '.'
import { useDisclosure } from '@chakra-ui/react'
import { ThemeSwitch } from '../Tools/ThemeSwitch'

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <div className='px-[10vw] py-2 shadow-xl'>

        <div className='float-left pr-[30px] md:pr-0 md:hidden'>
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
            
          </span>

          <span className='flex justify-center align-baseline'>
            <ThemeSwitch/>
          </span>

        </nav>

      </div>
    </>
  )
}

