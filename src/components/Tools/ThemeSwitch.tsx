import * as React from 'react'
import { useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

export const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <button onClick={toggleColorMode} className='text-2xl opacity-75'>
      {colorMode === "light" ? <RiMoonFill /> : <RiSunFill />}
    </button>
  )
}
